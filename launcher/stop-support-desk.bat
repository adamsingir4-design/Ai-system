@echo off
setlocal EnableExtensions
rem Stops only a Python/uvicorn process listening on port 8000.
powershell -NoProfile -Command ^
  "$c = Get-NetTCPConnection -LocalPort 8000 -State Listen -ErrorAction SilentlyContinue;" ^
  "if (-not $c) { Write-Host 'No support desk is running on port 8000.'; exit }" ^
  "$c.OwningProcess | Sort-Object -Unique | ForEach-Object {" ^
  "  $p = Get-Process -Id $_ -ErrorAction SilentlyContinue;" ^
  "  if ($p -and $p.ProcessName -match 'python|uvicorn') { Stop-Process -Id $p.Id -Force; Write-Host ('Stopped ' + $p.ProcessName + ' (pid ' + $_ + ')') }" ^
  "  elseif ($p) { Write-Host ('Left ' + $p.ProcessName + ' (pid ' + $_ + ') alone - it is not a Python server.') } }"
pause
