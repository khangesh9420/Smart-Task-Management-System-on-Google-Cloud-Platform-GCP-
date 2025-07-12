from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    CORS(app)
    db.init_app(app)

    from .routes import project_bp
    app.register_blueprint(project_bp, url_prefix='/projects')

    with app.app_context():
        db.create_all()

    return app
