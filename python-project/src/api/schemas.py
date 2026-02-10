"""Define validation schemas for the api."""
from enum import Enum
from pydantic import BaseModel
from models.products import products
from models.sellers import sellers
from models.offers import offers

class HealthStatusEnum(str, Enum):
  """A health status."""

  passed = "pass"
  failed = "fail"
  warned = "warn"


class HealthSchema(BaseModel):
  """An integrated health report."""

  status: HealthStatusEnum
  version: str
  releaseId: str

class ProductSchema(products):
	"""The product model"""
	
class SellerSchema(sellers):
	"""The seller model"""

class OfferSchema(offers):
  """The offer model"""
