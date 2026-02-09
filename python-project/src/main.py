"""Main application."""
import logging
import logging.config
import sentry_sdk
from settings import settings
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.controllers import router


# Application setup
app = FastAPI(
    title="Test API",
    description="This project is used for testing.",
)

# Solución temporal para CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Application routers
app.include_router(router)

# Logging
logging.config.dictConfig(settings.log_config)
logger = logging.getLogger(__name__)

# Remote logging
sentry_sdk.init(
    settings.sentry_dsn,
    release=settings.commit,
    environment=settings.env,
    shutdown_timeout=5,
)