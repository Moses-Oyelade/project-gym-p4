from random import choice as rc, randint
from faker import Faker

from app import app
from models import db, User, Instructor, Plan


# packages = [
#     "Strength",
#     "Circuit training",
#     "Swimming",
#     "Push_up",
#     "Dance",
#     "Kick bocking",
#     "Burpee",
#     "Weightlifting",
#     "Aerobic exercise",
#     "Yoga",
#     "Walking",
#     "Aerobics",
#     "Stretching",
#     "Hiking",
#     "Plank",
#     "Skipping rope",
#     "Pilates",
#     "Cycling",
#     "Running",
#     "Squats",
#     "Lunge",
#     "Interval training",
#     "High-intensity interval training",
#     "Rowing"
#     ]

genders =[
    "Male",
    "Female"
    ]

# b = slice(6)
# j=slice(10)
# p = slice(15)
# pro=slice(20)
# m=slice(24)


# plan_names = [{
#     "Basic" : packages[b],
#     "Jungle": packages[j],
#     "Premium" : packages[p],
#     "Pro-max" : packages[pro],
#     "Master": packages[m],

# }]

# plan_names = {
#     "Basic" : "Strength, Circuit training, Swimming,  Dance, Kick bocking",
#     "Jungle" : "Burpee, Aerobic exercise, Yoga, Walking, Aerobics",
#     "Premium" : "Stretching, Plank, Skipping rope, Pilates, Cycling",
#     "Pro-max" :  "Running, Squats, Lunge, Interval training, Rowing",
#     "Master" : "Push_up, High-intensity interval training, Hiking, Weightlifting",
# }

packages = [
    "Strength, Circuit training, Swimming,  Dance, Kick bocking",
    "Burpee, Aerobic exercise, Yoga, Walking, Aerobics",
    "Stretching, Plank, Skipping rope, Pilates, Cycling",
    "Running, Squats, Lunge, Interval training, Rowing",
    "Push_up, High-intensity interval training, Hiking, Weightlifting",
]


plan_names = [
    "Basic",
    "Jungle",
    "Premium",
    "Pro-max",
    "Master",
    ]

fake = Faker()

with app.app_context():
    
    User.query.delete()
    Plan.query.delete()
    Instructor.query.delete()
    
# #Seeding to add each model data
  
    users = []
    for i in range(20):
        u = User(
            name =fake.name(),
            gender = rc(genders),
            age = randint(17, 70),
            email = fake.email(),
            phone = fake.numerify('081-###-####'),
            
        )
        users.append(u)
    db.session.add_all(users)
    
    plans = []
    for i in range(20):
        p = Plan(
            plan_name = rc(plan_names),
            package = rc(packages),
            user_id = randint(1, 20),
            instructor_id =randint(1, 8),
            
        )
        plans.append(p)
    db.session.add_all(plans)
    
   
    instructors=[]
    for i in range(randint(1, 8)):
        ins = Instructor(
            name = fake.name(),
            gender = rc(genders),
            level = randint(1, 5),
        )
        instructors.append(ins)
    db.session.add_all(instructors)
    
    for user in users:
        user.plan = rc(plans)
        user.instructor = rc(instructors)
    db.session.add_all(users)    
    
    
    db.session.commit()
    


    
