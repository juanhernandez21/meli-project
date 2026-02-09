
"""Define api endpoints."""
from fastapi import (
    APIRouter,
    Response,
    status,
    HTTPException,
)
import logging
from .schemas import HealthSchema
from settings import settings
from models.products import helpers

VERSION = "v1"

router = APIRouter(prefix=f"/api/{VERSION}")
logger = logging.getLogger(__name__)



@router.get("/", tags=["Health"], response_model=HealthSchema)
@router.get("/health", tags=["Health"], response_model=HealthSchema)
async def read_health():
  """Report the system's health status."""
  return {"status": "pass", "version": VERSION, "releaseId": settings.commit}

@router.get("/products/{product_id}", tags=["products"])
async def read_product(product_id: str):
    """Read a product by ID."""
    items = helpers().read_products()
    for item in items:
        if item["id"] == product_id:
            return item
    raise HTTPException(status_code=404, detail="Producto no encontrado")
