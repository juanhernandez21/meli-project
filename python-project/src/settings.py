"""Define application settings."""
from typing import Any, Dict, Optional
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Contains application settings."""

    commit: str = "local"
    log_level: str = "debug"
    env: str = "dev"
    sentry_dsn: Optional[str] = None

    @property
    def log_config(self) -> Dict[str, Any]:
        """Define logs configuration."""
        return {
            "version": 1,
            "formatters": {
                "default": {
                    "format": "%(asctime)s | %(levelname)-7s | %(module)-11s | %(message)s"
                }
            },
            "handlers": {
                "console": {
                    "formatter": "default",
                    "class": "logging.StreamHandler",
                    "stream": "ext://sys.stdout",
                    "level": self.log_level.upper(),
                }
            },
            "loggers": {
                "gunicorn": {"propagate": True},
                "uvicorn": {"propagate": True},
                "uvicorn.access": {"propagate": True},
            },
            "root": {"handlers": ["console"], "level": self.log_level.upper()},
        }


settings = Settings()
