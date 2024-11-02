from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/")
async def get_passport_safe_letter():
    try:
        return {"message": "Passport safe letter generated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")