i=0
i+=1     # increment value
i=+1     # just store value
print(i)

# have some issue in code
def hello():
    print("This is malware")
i=0
while(i<1000):
    print(hello())
    i+=1

# Function with in function
def malware():
    print("Hello malware")
    def virus():
        print("Hello virus")
    virus()
malware()

# return always use at end of function
def hello(name):
    print("Hello"+name)
hello(name)
hello("malware")
hello(name)  # when fun return value of parm will forgotten

#######################################

# Return value is what expression evaluate it depend upon 
# Keyword and Value that return fun will return


import random
def getans(answerNumber):
    if answerNumber == 1:
        return 'It is certain'
    elif answerNumber == 2:
        return 'It is decidedly so'
    elif answerNumber == 3:
        return 'Yes'
    elif answerNumber == 4:
        return 'Reply hazy try again'
    elif answerNumber == 5:
        return 'Ask again later'
    elif answerNumber == 6:
        return 'Concentrate and ask again'
    elif answerNumber == 7:
        return 'My reply is no'
    elif answerNumber == 8:
        return 'Outlook not so good'
    elif answerNumber == 9:
        return 'Very doubtful'
    else:
        return "Hello Hacker Malware"
print(getans(random.randint(1,9)))     # Only provide integer values
print(getans(random.random()))         # Only provide float values v<0

#######################################

# None is datatype which mean empty (no value)
def greet(name):              # f is f-string formatting used for litteral string to add var inside commas.
    print(f"Hello, {name}!")    # if fun doesn't return anything so it automatically return None
result = greet("Alice")
print(result)  # Output: None

#######################################

spam=print('hello')
hello 
None==spam
True      # its None because just printing not return anythin
spam='malware'
None==spam
False    # Its not None because assign real string to spam

#######################################

# we pass arugment when call a function and python match them by position.
random.randint(1, 10)  # 1 is low and 10 hight
random.randint(10, 1) # 10 is low and 1 high so 10!<1 through error


import random
for i in range(100):  # Flip coin 100 times
    if random.randint(0, 1) == 0:
        print('H', end=' ')  # Instead of adding new line add space
    else:
        print('T', end=' ') # Print start with new line but end will add on same line with space
print()  # Print a newline at the end


# when add multiple      
print('cats', 'dogs', 'mice')  # print cats dogs mice
print('cats', 'dogs', 'mice', sep='.')  # seprate them with comma

#######################################

# callback is function that pass as argument to another function and execute on specific event and fun that accept callback called higher order fun.
def  hello_malware(name,age,gender):
    return name,age,gender
print(hello_malware(name='malware', age=20,gender='male'))

 #######################################

def fact(n):
    if(n==1 or n==0):
        return 1
    return fact(n-1)*n
print(fact(4))

#######################################

# This concept local and global called Lexical Scope
def func1():
    var1=6 # Local scope Variable end after execution 
    print(var1)
print(var1)

var='malware' # Global scope Variable
def scope(name):
    print(var) # print Global variable
    return name  # return name otherwise return None
print(scope('attacker'))

#######################################

# Always prefer local variables
eggs = 'global_eggs1'
def spam():
    eggs = 'spam_fun'
    bacon() # its local scope ends after execution
    print(eggs)  # Prints 'SPAMSPAM'  
eggs = 'global_eggs2'
def bacon():
    ham = 'hamham'
    eggs = 'Bacon_Fun'
    print(eggs)
eggs = 'global_eggs3'
print (eggs)
spam()

#######################################

# start from spam then eggs_global then becon part then then move to spam part then again execute becon part at end print egs
def spam(): 
    eggs = 'spam local'
    print(eggs)  # Prints 'spam local'
def bacon():
    eggs = 'bacon local'
    print(eggs)  # Prints 'bacon local'
    spam()
    print(eggs)  # Prints 'bacon local'
eggs = 'global'
bacon()
print(eggs)  # Prints 'global'

#######################################

# Print eggs spam because it call later after global
def spam():
    global eggs
    eggs = 'spam'  # This is the global variable.
def bacon():
    global eggs
    eggs = 'bacon'  # This is a local variable.
def ham():
    print(eggs)  # This is the global variable.
eggs = 'global'  # This is the global variable.
spam()
print(eggs)

#######################################

# See to print local var but has not assigned yet
def spam():
    print(eggs)  # ERROR!
    eggs = 'spam local'  # Not assigned Yet
eggs = 'global'
spam()

#######################################

# In python error in code will crash whole the program
def spam(divide_by):
    return 42 / divide_by
print(spam(2))
print(spam(12))
print(spam(0))  # Division by zero will cause crash of whole program
print(spam(1))

#######################################

# we handle errors in python with try/except statments
def spam(divideby):
    try:
    # If code in this block cause error will move to except part
        return 42/divideby
    except:
        print('Error: Invalid Arugment') # also return value will be None
print(spam(2))
print(spam(7))
print(spam(0))
print(spam(5))

#######################################

def spam(divideby):
    try:
    # If code in this block cause error will move to except part
        return 42/divideby
    except ZeroDivisionError: # stop progrma after error occur because excep only hande zerodivision error
        print('Error: Invalid Arugment') # also return value will be None
print(spam(2))
print(spam('f'))
print(spam(0))
print(spam(5))

#################################################

# Basic Program that print ZigZag(***)
import time,sys
space=0  # Space to add
space_increase=True 
try: 
    while True:
        print(' '*space,end='')     # Print spaces on screen
        print('*****')      # Print * on screen
        time.sleep(0.1)      # slow it to 0.1 s
        if space_increase:  # if space_increate true
            space=space+1
            if space==5:     # if spaces are 5 so no increare in space
                space_increase=False
        else:
            space=space-1   # Decrase the space
            if space==0:     
                space_increase=True  # when space zero then set true to increase
except KeyboardInterrupt:
    sys.exit()

#####################################################

# Basic Program that print ZigZag(---)
import time, sys
try:
    while True:  # The main program loop
        # Draw lines with increasing length:
        for i in range(1, 9):  # Pic one number and increase it 
            print('-' * (i * i))  # Run this for until reached to max 9
            time.sleep(0.1)

        # Draw lines with decreasing length:
        for i in range(7, 1, -1):  # Pic one in decending order 
            print('-' * (i * i))  # Run this until reached to max 1
            time.sleep(0.1)
except KeyboardInterrupt:
    sys.exit()

