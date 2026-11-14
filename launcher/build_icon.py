"""Draw desktop-shortcut icon using only Python's standard library.
Run from the repository root: python launcher/build_icon.py
"""
from __future__ import annotations
import struct
from pathlib import Path

OUT = Path(__file__).resolve().parent / "support-desk.ico"
PURPLE = (134, 59, 255)
PURPLE_DARK = (84, 32, 168)
WHITE = (255, 255, 255)
QUESTION = ("011110", "110011", "110011", "000011", "000110", "001100", "011000", "011000", "000000", "000000", "011000", "011000")

def render(size: int):
    radius = max(2, size // 4)
    bubble = (size * 15 // 100, size * 12 // 100, size * 81 // 100, size * 75 // 100)
    mark_scale = max(1, size // 16)
    mark_w = len(QUESTION[0]) * mark_scale
    mark_x0 = (size - mark_w) // 2
    mark_y0 = int(bubble[1] + (bubble[3] - bubble[1]) * 0.16)
    def inside_rounded(x: int, y: int) -> bool:
        if x < 0 or y < 0 or x >= size or y >= size: return False
        cx = min(max(x, radius), size - 1 - radius)
        cy = min(max(y, radius), size - 1 - radius)
        return (x - cx) ** 2 + (y - cy) ** 2 <= radius * radius
    rows = []
    for y in range(size):
        row = []
        for x in range(size):
            if not inside_rounded(x, y):
                row.append((0, 0, 0, 0)); continue
            t = (x + y) / (2 * size)
            colour = tuple(int(a + (b - a) * t) for a, b in zip(PURPLE, PURPLE_DARK))
            in_bubble = bubble[0] <= x < bubble[2] and bubble[1] <= y < bubble[3]
            if not in_bubble and size >= 24:
                tail = bubble[0] + 2 <= x < bubble[0] + size * 14 // 100 and y >= bubble[3]
                if tail and (y - bubble[3]) <= (bubble[0] + size * 14 // 100 - x) * 0.9: in_bubble = True
            if in_bubble: colour = WHITE
            gy, gx = y - mark_y0, x - mark_x0
            if 0 <= gy < len(QUESTION) * mark_scale and 0 <= gx < mark_w and QUESTION[gy // mark_scale][gx // mark_scale] == "1": colour = PURPLE_DARK
            row.append((*colour, 255))
        rows.append(row)
    return rows

def encode(size: int) -> bytes:
    pixels = render(size)
    header = struct.pack("<IiiHHIIiiII", 40, size, size * 2, 1, 32, 0, 0, 0, 0, 0, 0)
    body = bytearray()
    for y in range(size - 1, -1, -1):
        for r, g, b, a in pixels[y]: body += bytes((b, g, r, a))
    mask_row = (size + 31) // 32 * 4
    body += b"\x00" * (mask_row * size)
    return header + bytes(body)

def main() -> None:
    images = [(32, 32), (24, 24), (16, 16)]
    blobs = [encode(size) for size, _ in images]
    directory = struct.pack("<HHH", 0, 1, len(blobs))
    offset = 6 + 16 * len(blobs)
    for (w, h), blob in zip(images, blobs):
        directory += struct.pack("<BBBBHHII", w, h, 0, 0, 1, 32, len(blob), offset)
        offset += len(blob)
    OUT.write_bytes(directory + b"".join(blobs))
    print(f"Wrote {OUT} ({OUT.stat().st_size:,} bytes, {len(blobs)} sizes)")

if __name__ == "__main__": main()
