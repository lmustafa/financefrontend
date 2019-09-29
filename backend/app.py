import requests
import matplotlib.pyplot as plt
import os
import sys
from rateCalc import getStudentFunding, returnArray, getInflatedIncome, calcRate
from mlSegment import Machine_Learning

from flask import Flask,jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors=CORS(app)
app.config['CORS_HEADERS']='Content-Type'

@app.route('/',methods=['GET','POST'])
@cross_origin()

def index():
    if(request.method=="POST"):
        print("Post")
        my_data=request.get_json(force=True)
        print(my_data['University'],my_data['Parents'],my_data['Income'],my_data['Degree'])
        print(my_data['Tuition'],my_data['Housing'],my_data['Transport'],my_data['Lifestyle'])
        funds=abs(getStudentFunding(int(my_data['Parents'])+int(my_data['Income'])+int(my_data['Scholarship']),int(my_data['Tuition']),int(my_data['Housing']),int(my_data['Transport']),int(my_data['Lifestyle']),int(my_data['Food'])))
        myArr= returnArray(my_data['University'],my_data['Degree'])
        predictedIncome=Machine_Learning(myArr)
        r=calcRate(0.02,[funds,funds,funds,funds], 0.0408 , 0.02, predictedIncome,0.127) #0.9 adjust 3 standard deviations to give a lower rate and ensure a high breakeven probability
        print('r',r,'funds',funds)
        return jsonify({'Rate':r,'Funding':funds}),201
    else:
        my_data=request.get_json()
        print(my_data)
        return jsonify({"Test":my_data})


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False)

# class HelloWorld(Resource):
#     def get(self):  
#         print('GET')
#         my_data=request.get_json()
#         print(my_data)      
#         return {'Hello World':"hello"}

#     def post(self):
#         print('POST')
#         my_data=request.get_json() #get json file here
#         #process json file here 
#         #return {'You sent': my_data}     
#         return {'Rate': my_data['Rate'], 'Funding': my_data['Funding']}


# api.add_resource(HelloWorld,'/')

# if __name__ == '__main__':
#     app.run(host="0.0.0.0", debug=False)