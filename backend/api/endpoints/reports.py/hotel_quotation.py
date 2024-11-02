from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/")
async def get_hotel_quotation():
    try:
        return {"message": "Hotel quotation generated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")