from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict

ROOT_DIR = Path(__file__).resolve().parents[2]

class Settings(BaseSettings):
    app_name: str = "SupportPilot AI"
    secret_key: str = "development-only-change-me"
    database_path: Path = ROOT_DIR / "data" / "support.db"
    model_config = SettingsConfigDict(env_file=ROOT_DIR / ".env", extra="ignore")

settings = Settings()
