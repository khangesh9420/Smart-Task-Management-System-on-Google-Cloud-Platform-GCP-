from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    # 🔐 Production-safe CORS
    CORS(app, origins=["https://user.khangesh.store"], supports_credentials=True)

    db.init_app(app)

    from .routes import project_bp
    app.register_blueprint(project_bp, url_prefix='/projects')

    from .health import health_bp
    app.register_blueprint(health_bp)

    with app.app_context():
        db.create_all()

    return app

