from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter()

@router.get("/test")
def read_root():
    try:
        return {"Hello": "World"}
    except Exception as e:
        return JSONResponse(status_code=500, content={"message": f"Error: {e}"})