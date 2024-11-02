from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/")
async def get_job_money_letter():
    try:
        return {"message": "Job money letter generated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")
