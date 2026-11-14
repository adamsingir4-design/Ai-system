from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

from backend.app.database import Base, engine

if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
    print(f"Database initialized at {engine.url.database}")
