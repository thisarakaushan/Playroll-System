from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/")
async def get_passport_handover_letter():
    try:
        return {"message": "Passport handover letter generated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")