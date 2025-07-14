from flask import request, jsonify, Blueprint
from . import db
from .models import User

user_bp = Blueprint('user_bp', __name__)

# ✅ Health check endpoint
@user_bp.route('/health', methods=['GET'])
def health_check():
    try:
        # Try a lightweight DB query
        db.session.execute('SELECT 1')
        return jsonify({"status": "ok"}), 200
    except Exception as e:
        return jsonify({"status": "error", "details": str(e)}), 500

# ✅ Registration route
@user_bp.route('/', methods=['POST'])
def create_user():
    data = request.json
    if not all(k in data for k in ('username', 'email', 'password')):
        return jsonify({"message": "Missing fields"}), 400
    existing_user = User.query.filter_by(username=data['username']).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 409
    user = User(username=data['username'], email=data['email'])
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

# ✅ Login route
@user_bp.route('/login', methods=['POST'])
def login_user():
    data = request.json
    if not all(k in data for k in ('username', 'password')):
        return jsonify({"message": "Missing fields"}), 400
    user = User.query.filter_by(username=data['username']).first()
    if not user or not user.check_password(data['password']):
        return jsonify({"message": "Invalid credentials"}), 401
    return jsonify({"message": "Login successful", "username": user.username}), 200

# ✅ Get all users
@user_bp.route('/', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])
