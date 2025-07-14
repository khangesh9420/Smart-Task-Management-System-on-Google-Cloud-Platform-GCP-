from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    #CORS(app, origins="*")
    CORS(app, origins=["https://user.khangesh.store"], supports_credentials=True)
    db.init_app(app)

    # ✅ Register main user routes
    from .routes import user_bp
    app.register_blueprint(user_bp, url_prefix='/users')

    # ✅ Register health route as a standalone blueprint
    from .health import health_bp
    app.register_blueprint(health_bp)  # Will expose /health

    with app.app_context():
        db.create_all()

    return app

