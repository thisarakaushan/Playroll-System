from fastapi import APIRouter
from .job_demand_letter_full_time import router as job_demand_letter_full_time_router
from .job_demand_letter_part_time import router as job_demand_letter_part_time_router
from .job_money_letter import router as job_money_letter_router
from .part_time_quotation import router as part_time_quotation_router
from .hotel_quotation import router as hotel_quotation_router
from .company_quotation import router as company_quotation_router
from .passport_handover_letter import router as passport_handover_letter_router
from .passport_safe_letter import router as passport_safe_letter_router

reportRouter = APIRouter()

# All report-related routes to reportRouter
reportRouter.include_router(job_demand_letter_full_time_router, 
                            prefix="/job-demand-letter-full-time", tags=["job-demand-letter-full-time"])
reportRouter.include_router(job_demand_letter_part_time_router, 
                            prefix="/job-demand-letter-part-time", tags=["job-demand-letter-part-time"])
reportRouter.include_router(part_time_quotation_router, 
                            prefix="/part-time-quotation", tags=["part-time-quotation"])
reportRouter.include_router(hotel_quotation_router, 
                            prefix="/hotel-quotation", tags=["hotel-quotation"])
reportRouter.include_router(company_quotation_router, 
                            prefix="/company-quotation", tags=["company-quotation"])
reportRouter.include_router(passport_handover_letter_router, 
                            prefix="/passport-handover-letter", tags=["passport-handover-letter"])
reportRouter.include_router(passport_safe_letter_router, 
                            prefix="/passport-safe-letter", tags=["passport-safe-letter"])
reportRouter.include_router(job_money_letter_router, 
                            prefix="/job-money-letter", tags=["job-money-letter"])

