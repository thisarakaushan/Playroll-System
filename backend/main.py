from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from configurations.config import config
from services.mongo_service import mongo_db

# Import routers form endpoint files
from api.endpoints.test import router as testRouter

app = FastAPI()

# Middleware setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# Include the routers
app.include_router(testRouter)




