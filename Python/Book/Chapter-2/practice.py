
# Boolean Expressions
(5 > 4) and (3 == 5)  # False
not (5 > 4)  # False
(5 > 4) or (3 == 5)  # True
not ((5 > 4) or (3 == 5))  # False
(True and True) and (True == False)  # False
(not False) or (not True)  # True 

# Simple Program
spam=input("Enter anything: ")
if spam=='1':
    print('Hello')
elif spam=='2':
    print('Howdy')
else:
    print("Greetings!")


username1='malware'
username2="arslanj"
username3="marov"
username4="mansa"

# Boolean Program
op=input("Enter Operator (and,or,not): ")
if op=='and' or op=='AND':
    print(bool(len(username1) and len(username2)) and bool(len(username3) and len(username4)))
elif op=='or' or op=='OR':
    print(bool(len(username1) or len(username2)) or bool1(len(username3) or len(username4)))
elif op=='not' or op=='NOT':
     print(not bool((len(username1) == len(username2))) or bool(not (len(username3) == len(username4))))
else:
    print('Wrong Operator: '+ op)
    
    