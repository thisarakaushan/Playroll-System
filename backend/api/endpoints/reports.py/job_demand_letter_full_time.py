from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/")
async def get_job_demand_letter_full_time():
    try:
        return {"message": "Full-time Job Demand letter generated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")
