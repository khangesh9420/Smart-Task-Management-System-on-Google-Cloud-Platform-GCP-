from flask import Blueprint, request, jsonify
from .models import Project, Task
from . import db

project_bp = Blueprint('project_bp', __name__)

@project_bp.route('/', methods=['POST'])
def create_project():
    data = request.json
    if not all(k in data for k in ('name', 'owner')):
        return jsonify({'message': 'Missing fields'}), 400

    project = Project(name=data['name'], owner=data['owner'])
    db.session.add(project)
    db.session.commit()
    return jsonify(project.to_dict()), 201

@project_bp.route('/', methods=['GET'])
def list_projects():
    projects = Project.query.all()
    return jsonify([p.to_dict() for p in projects])

@project_bp.route('/<int:project_id>/tasks', methods=['POST'])
def add_task(project_id):
    data = request.json
    if 'title' not in data:
        return jsonify({'message': 'Title is required'}), 400

    project = Project.query.get_or_404(project_id)
    task = Task(title=data['title'], project=project)
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict()), 201

@project_bp.route('/<int:project_id>/tasks', methods=['GET'])
def get_tasks(project_id):
    project = Project.query.get_or_404(project_id)
    return jsonify([t.to_dict() for t in project.tasks])
