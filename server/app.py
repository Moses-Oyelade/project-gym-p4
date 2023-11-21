
from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate
from models import db, User, Plan, Instructor

app =Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODOFICATIONS'] = False
app.json.compact = False


migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return "<h1>Welcome to Flex't GYM</h1>"

@app.route('/users', methods=['GET', 'POST'])
def users():
    
    if request.method == 'GET':
        return make_response(jsonify([user.to_dict(rules=('-plans',)) for user in User.query.all()]), 200)
    
    elif request.method == 'POST':
        new_user = User(
            name=request.form.get('name'),
            gender=request.form.get('gender'),
            age=request.form.get('age'),
            email=request.form.get('email'),
            phone_no=request.form.get('phone_no')
            )
        db.session.add(new_user)
        db.session.commit() 

        user_dict = new_user.to_dict(rules=('-plans.instructor',))
        return make_response( user_dict, 201)

@app.route('/users/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def users_by_id(id):
    user = User.query.filter_by(id=id).first()
    
    if user == None:
        response_body ={
            "error!": "User not found."
        }
        return make_response( response_body, 404 )
    else: 
        if request.method == 'GET':
            user_serializer = user.to_dict()
            return make_response( jsonify(user_serializer), 200 )
        
        elif request.method ==  "PATCH":
            for attr in request.form:
                setattr(user, attr, request.form.get(attr))
            db.session.add(user)
            db.session.commit()
            
            user_dict = user.to_dict()
            
            response = make_response(
                user_dict,
                200
            )
            return response
        
        elif request.method == 'DELETE':
            db.session.delete(user)
            db.session.commit()
            
            response_body = {
                "delete_successful": True,
                "message": "User deleted."
            }
            
            response = make_response(
                response_body,
                200
            )
            
            return response
        
@app.route('/plans', methods= ['GET'])
def plans():
    if request.method == 'GET':
        return make_response(jsonify([plan.to_dict() for plan in User.query.all()]), 200)
    
@app.route('/plans/<int:id>', methods= ['GET', 'PATCH'])
def plan_by_id(id):
    plan = Plan.query.filter_by(id=id).first()
    
    if plan == None:
        response_body ={
            "error!": "User not found."
        }
        return make_response( response_body, 404 )
    else: 
        if request.method == 'GET':
            plan_serializer = plan.to_dict()
            return make_response( jsonify(plan_serializer), 200 )
        
        elif request.method ==  "PATCH":
            for attr in request.form:
                setattr(plan, attr, request.form.get(attr))
            db.session.add(plan)
            db.session.commit()
            
            plan_dict = plan.to_dict()
            
            response = make_response(
                plan_dict,
                200
            )
            return response
            
    
@app.route("/instructor", methods=['GET'])
def instructor():
    if request.method == 'GET':
        return make_response(jsonify([instructor.to_dict() for instructor in Instructor.query.all()]), 200)
    
    
    
if __name__ == '__main__':
    app.run(port="5555", debug=True)