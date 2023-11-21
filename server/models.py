from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func 
from sqlalchemy.ext.associationproxy import association_proxy

db = SQLAlchemy()