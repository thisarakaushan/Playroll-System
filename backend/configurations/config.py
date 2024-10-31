import os
# from dotenv import load_dotenv


class Config:
    def __init__(self):
        """
        Initialize the Config class by loading the environment variables from a .env file, 
        loading API keys and secrets
        """
        # load_dotenv()
        
        
        # configurations for mongodb docker
        self.mongodb_host = "playroll-mongodb"
        self.mongodb_port = 27017
        self.mongodb_username = "user"
        self.mongodb_password = "root"
        self.mongodb_authSource = "admin"
        
        
    
config = Config()
