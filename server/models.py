from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin


db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    serialize_rules = ('-plans.user',)
    
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String, nullable=False)
    gender = db.Column(db.String)
    age = db.Column(db.Integer)
    email = db.Column(db.String, nullable= False)
    phone = db.Column(db.Integer, nullable=False)
    
    plans = db.relationship('Plan', backref='user')
    
    # @validates('age')
    # def validates_age(self, key, age):
    #     for age in range(0, 16):
    #         if age:
    #             raise ValueError("you can not be registered! only (16+)")
    #         return age
    
    # @validates('email')
    # def validates_email(self, key, email):
        
    #     if '@' not in email:
    #         raise ValueError("failed email validation")
    #     return email
    
    def __repr__(self):
        return f'<User {self.name}, {self.age}, {self.gender}, {self.email}, {self.phone}>'

    
class Plan(db.Model, SerializerMixin):
    __tablename__ = 'plans'
    
    serialize_rules = ('-instructor.plans', '-user.plans',)
    
    id = db.Column(db.Integer, primary_key=True)
    plan_name = db.Column(db.String, nullable=False)
    package = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    instructor_id = db.Column(db.Integer, db.ForeignKey('instructors.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    def __repr__(self):
        return f'<Plan {self.plan_name}: {self.package}' 
    
class Instructor(db.Model, SerializerMixin):
    __tablename__ = 'instructors'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    gender = db.Column(db.String)
    level = db.Column(db.String)

    plans = db.relationship('Plan', backref='instructor')
    
    def __repr__(self):
        return f'<Instructor {self.name} {self.level} {self.gender}>'