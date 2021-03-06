import numpy as np
import sklearn 
from mlSegment import Machine_Learning
#starting income is predicted by the sklearn model
def getStudentFunding(prior_money, tuition, housing, transport,lifestyle,food):
    funds= prior_money-(tuition+housing+transport+lifestyle+food)
    if funds>0:
        return 0
    else:
        return funds

def getInflatedIncome(period,inflation_rate,startingIncome):
    return startingIncome*(1+inflation_rate)**(period-5)

def calcRate(RBC_commission,student_funding,discount_rate,inflation,startingIncome,unemployment_rate):
    repayPercent=0.0
    for i in range(0,4):
        repayPercent+=(student_funding[i])/(1+discount_rate)**i

    repayPercent*=(1+RBC_commission)
    div=0

    for i in range(5,12):
        income=getInflatedIncome(i,inflation,startingIncome)/(1+discount_rate)**float(i)
        div+=income
    div=div*(1-unemployment_rate) #account for unemployment 
    return repayPercent/div





#University Value, Program Value
#convert into 0s and 1s 

#6 universities and 6 program
#waterloo, toronto, western, guelph, ryerson, wilfrid 
#eng, arts, science, busienss, math

def returnArray(uni_name,program_name):
    uniDict = {
        "University of Waterloo": [0,0,0,0,0],
        "University of Toronto":[1,0,0,0,0],
        "University of Western":[0,1,0,0,0],
        "University of Guelph":[0,0,1,0,0],
        "Ryerson University":[0,0,0,1,0],
        "Wilfrid Laurier University":[0,0,0,0,1]
    }
    
    progDict={
        "Engineering":[0,0,0,0],
        "Arts":[1,0,0,0],
        "Science":[0,1,0,0],
        "Business":[0,0,1,0],
        "Math": [0,0,0,1]
    }

    return uniDict[uni_name]+progDict[program_name]

if __name__=='__main__':
    uni="University of Guelph"
    program_name="Arts"
    x=calcRate(0.02,[4000,5000,6000,8000], 0.147 , 0.02, 45000,0.127)
    x2=calcRate(0.02,[4000,5000,6000,8000], 0.147 , 0.02, 60000,0.127)
    x3=calcRate(0.02,[4000,5000,6000,8000], 0.147 , 0.02, 75000,0.127)

    print('my rate', x,x2,x3)
    arr=returnArray(uni,program_name)
    income=Machine_Learning(arr)

    print(income)