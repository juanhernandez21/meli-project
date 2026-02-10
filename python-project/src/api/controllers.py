"""Define api endpoints."""

from fastapi import (
    APIRouter,
    Response,
    status,
    HTTPException,
)
import logging
from .schemas import HealthSchema, SellerSchema, ProductSchema, OfferSchema
from settings import settings
from models.products import productsHelpers
from models.sellers import sellersHelpers
from models.offers import offersHelpers

VERSION = "v1"

router = APIRouter(prefix=f"/api/{VERSION}")
logger = logging.getLogger(__name__)


@router.get("/", tags=["Health"], response_model=HealthSchema)
@router.get("/health", tags=["Health"], response_model=HealthSchema)
async def read_health():
    """Report the system's health status."""
    return {"status": "pass", "version": VERSION, "releaseId": settings.commit}


@router.get("/sellers/{seller_id}", tags=["sellers"], response_model=SellerSchema)
async def read_seller(seller_id: str):
    """Read a seller by ID."""
    items = sellersHelpers().read_sellers()
    for item in items:
        if item["seller"]["id"] == seller_id:
            return item
    raise HTTPException(status_code=404, detail="Seller no encontrado")


@router.get("/products/{product_id}", tags=["products"], response_model=ProductSchema)
async def read_product(product_id: str):
    """Read a product by ID."""
    items = productsHelpers().read_products()
    for item in items:
        if item["product"]["id"] == product_id:
            return item
    raise HTTPException(status_code=404, detail="Producto no encontrado")


@router.get("/products/{product_id}/offers", tags=["products"], response_model=OfferSchema)
async def read_product_offers(product_id: str):
    """Read a product's offers by product ID."""
    items = offersHelpers().read_offers()
    for item in items:
        if item["offer"]["product_id"] == product_id:
            return item
    raise HTTPException(status_code=404, detail="Oferta no encontrada")
