from . import db

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    owner = db.Column(db.String(80), nullable=False)

    tasks = db.relationship('Task', backref='project', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'owner': self.owner,
            'tasks': [task.to_dict() for task in self.tasks]
        }

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    status = db.Column(db.String(20), default='pending')
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'status': self.status
        }
