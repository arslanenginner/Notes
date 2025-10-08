
spam = [['cat', 'bat'], [10, 20, 30, 40, 50]]
print(spam[0])      # 0 index block
print(spam[0][1])   # 0 Index block and 1 index value 
print(spam[1][4])   # first block (number block) index 4
print(spam[-1])   # last one (block of num)

###############################################
spam = ['cat', 'bat', 'rat', 'elephant']
print(spam[0:4])                  # Slice print from 0 to 4 well it do not add  last value
print(spam[0:-1])       # Print before last one
print(len(spam))       # Return number of values
spam[1] = 'malware'    # Update values in list

################################################

# Concatenation and Replication
list= [1, 2, 3] + ['A', 'B', 'C']    #  concatenate and replicate lists with the + and * operators
print(list)

spam = [1, 2, 3]
spam = spam + ['A', 'B', 'C']
print(spam)

# Del Statment
spam = ['cat', 'bat', 'rat', 'elephant']
del spam[0]

##########################################
# Store multiple values in single var
cat_name=[]
while True:        # Create infite loop until anything break
    print('Enter cat name: '+str(len(cat_name)+1)+'or enter nothing to exit')  # check cat names lenght in cat_name and add 1 
    name=input() 
    if name=='':    # Check empty input
        break  # Break the loop
    cat_name+=[name]
print('The cat names you entered are: ')
for i in cat_name:  # Loop on cat name to print
    print(i)

#############################################

for i in range(4):
    print(i)

for i in [0, 1, 2, 3]:
    print(i)

#############################################

supplies = ['pens', 'staplers', 'flamethrowers', 'binders']
for i in range(len(supplies)):
    print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

################################################

# List Item Enumeration
supplies = ['pens', 'staplers', 'flamethrowers', 'binders']
for index, item in enumerate(supplies):
    print('Index ' + str(index) + ' in supplies is: ' + item)

animals = ['cat', 'horse', 'rabit','donkey']
for index,animal in enumerate(animals):
    print(index,animal)

##############################################

# Random Selection and Ordering 
import random     
pets = ['Dog', 'Cat', 'Moose']
random.choice(pets)       # random.choice return random item
'Cat'
random.choice(pets)
'Cat'
random.choice(pets)

###############################################

# The in and not in Operators
animals=['cat','dog','lion']
'cat' in animals    # True
horse not in animals    #True

# Not in Operator
animals=['cat','dog','horse','lion']
name = input('Enter animal name: ')
if name not in animals:
    print("You enter wrong name")
else:
    print("You enter correct name")


supplies = ['pens', 'staplers', 'flamethrowers', 'binders']
print('pens' not in supplies)  # Print false if pen avilable
print('Malware' not in supplies) # Print true if malware not avilable
print('staplers' in supplies)

###############################################

# shuffle the indexes of values
import random
people = ['Alice', 'Bob', 'Carol', 'David']
random.shuffle(people)     # Randomly shuffle the people


################################################

# MultiAssignment trick also called Tuple Unpacking
a, b, c, = 1, 2, 3 # a = 1 - b = 2 - c = 3

# Bad way
cat = ['fat', 'gray', 'loud']
size = cat[0] 
color = cat[1]
disposition = cat[2]

# Fesible way
cat = ['fat', 'gray', 'loud']
size, color, disposition = cat

cat = ['fat', 'gray', 'loud']
size, color, disposition = cat
print(color)

##########################################

# Augmented  Assignment  + and * work with str and also lists
spam=43
spam=spam+1
print(spam)

virus=['malware']
virus *= 3
print(virus)
#################################################

# Replication
spam = 'Hello,'
spam += ' world!'  # Same as spam = spam + 'world!'

bacon = ['Zophie']
bacon *= 3  # Same as bacon = bacon * 3

##################################################

# Tuple Unpacking 
def get_number():
    return (5, 10) 
x, y = get_number()
print("X:", x)  # Output: X: 5
print("Y:", y)  # Output: Y: 10


list=['malware','Thunder','Cyber']
list1,list2,list3=list
print(list1)

###################################################

# Methods
spam = ['hello', 'hi', 'howdy', 'heyas']
spam.index('hello')     # Provide index

spam = ['hello','hi', 'hi', 'howdy','heyas', 'heyas']
print(spam.index('hi'))         # If contain multiple will return only first

###################################################

# Adding Values
spam = ['cat', 'dog', 'bat']
spam.append('chicken')      # add value at last index
spam.insert(1, 'chicken')    # add value in 1st index
print(spam)


spam = ['cat', 'dog', 'bat']
spam.insert(len(spam), 'chicken')  # add according to length or var
print(spam)

spam = ['cat', 'dog', 'bat']
spam.insert(-1, 'chicken')  # print before value at index (-1) mean will print it at second last index
print(spam)

spam = ['cat', 'bat', 'rat', 'cat', 'hat', 'cat']
spam.remove('cat')      # remove at 1st location if multiple val occur
print(spam)

###################################################

# Sorting the values in different ways
spam = [2, 5, 3.14, 1, -7]
spam.sort()     # Sorting the Values
print(spam)

spam = ['Ants', 'Cats', 'Dogs', 'Badgers', 'Elephants']       # Sort in Alphabetical ways
spam.sort()
print(spam)

spam.sort(reverse=True)     # Sort in Reverse way
print(spam)

spam = [1, 3, 2, 4, 'Alice', 'Bob']     # Not supported both str and int in same list
spam.sort()


spam = ['Alice', 'ants', 'Bob', 'badgers', 'Carol', 'cats']   # First Capital then small
spam.sort()         # Return val will be none
print(spam)

spam = ['a', 'z', 'A', 'Z'] # Sort in Lower Order
spam.sort(key=str.lower)


spam = ['cat', 'dog', 'moose']
spam.reverse()       # Reversing Values
print(spam) 

###############################################
# line continuation character (\)
print('Four score and seven ' + \
      'years ago...')

###############################################

# Short-Circuiting Boolean Operators
spam = []
if len(spam) > 0 and spam[0] == 'cat':   # if len > 0 so to next condition otherwise skip it
    print('A cat is the first item.')
else:
    print('The first item is not a cat.')

################################################

# Magic 8 Ball with a List
import random
messages = ['It is certain',
    'It is decidedly so',
    'Yes definitely',
    'Reply hazy try again',
    'Ask again later',
    'Concentrate and ask again',
    'My reply is no',
    'Outlook not so good',
    'Very doubtful']

print('Ask a yes or no question:')
input('>')
print(messages[random.randint(0, len(messages) - 1)])           # can also use this print(random.choice(messages))
 
################################################

# Sequence Data Types (String also represent seq datatype)
name = 'Zophie'
print(name[1])

################################################
# Immutable  (can not changed)
name = 'Zophie a cat'      # string is immutable
name[0]='the'         # Throw error

name = 'Zophie a cat'
new_name = name[0:7] + 'the' + name[8:12]   # proper way to mute a string and here the char we wish not to replace
print(name)

txt = "hello"
x = txt.capitalize()      # Capital the word Hello
print(x)
print(txt)              # immutable don't change original

################################################

# mutable (can be change)
eggs = ['A', 'B', 'C']   # List is immutable
eggs = ['x', 'y', 'z']
print(eggs)

################################################

# Tuples (immutable cant be changed)
eggs = ('hello', 42, 0.5)
eggs[0]
eggs[1:3]

eggs = ('hello', 42, 0.5)
eggs[1] = 99    # Throw error

type(('hello',))        # if only one item in tuple so use , at end otherwise python think its regular value inside parentheses
<class 'tuple'>

type(('hello'))
<class 'str'>

################################################

# Size of Sys
import sys
my_list = [1, 2, 3, 4, 5]
my_tuple = (1, 2, 3, 4, 5)
list_size = sys.getsizeof(my_list)
tuple_size = sys.getsizeof(my_tuple)

print("Size of list in memory:", list_size, "bytes")
print("Size of tuple in memory:", tuple_size, "bytes") 

################################################

# List and Tuple Type Conversion
tuple(['cat', 'dog', 5])   # convert into tuple  
('cat', 'dog', 5)   

list(('cat', 'dog', 5))   # convert into list   
['cat', 'dog', 5]

list('hello')    # convert into list from string
['h', 'e', 'l', 'l', 'o']      

##################################################

# Reference     
# In integers (because immutable)
spam = 42   
eggs = spam
spam = 99   # eggs will 42 and spam will 99


# In list (mbecause mutable)
spam = [0, 1, 2, 3]     # stored in memory
eggs = spam         # eggs not getting copy its getting reference 
eggs[1] = 'Hello!'      
print(eggs,spam)    

##################################################

# Arguments (pass the original)
def eggs(some_parameter):
    some_parameter.append('Hello')

spam = [1, 2, 3]
eggs(spam)
print(spam)  # Prints [1, 2, 3, 'Hello']

##################################################

# copy() and deepcopy() 
import copy
spam = ['A', 'B', 'C']
cheese = copy.copy(spam)  # Creates a duplicate copy of the list
cheese[1] = 42  # Changes cheese
print(spam)   # copy.deepcopy() for inner lists
print(cheese)