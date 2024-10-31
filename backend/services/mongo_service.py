from configurations.config import config
from pymongo import MongoClient

class MongoService:
    def __init__(self):
        try:
            self.client = MongoClient(
                host=config.mongodb_host,
                port=config.mongodb_port,
                username=config.mongodb_username,
                password=config.mongodb_password,
                authSource=config.mongodb_authSource
            )
            print("Connected to MongoDB")
        except Exception as e:
            print(f"Error connecting to MongoDB: {e}")
            
        def get_database(self, db_name):
            """
            Get a reference to a specific database
            """
            return self.client[db_name]
            
            
mongo_db = MongoService()           