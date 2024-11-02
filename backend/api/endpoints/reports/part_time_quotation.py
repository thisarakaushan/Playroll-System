from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/")
async def get_part_time_quotation():
    try:
        return {"message": "Part-time quotation generated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")