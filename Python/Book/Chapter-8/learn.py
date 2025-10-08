
# String Literals
spam = "That is Alice's cat."

# Escape Characters
spam = 'Say hi to Bob\'s mother.'  

spam='Helloo its new window\\OS'    # use \\ for actual backslash
print(spam)

 # Raw string(ignore all escape characters)
print(r'Hello its new path C:\Desktop\Python\file.py ') 

 # Multiline string
print('''Hi last year i see some one who are thinking about soem one who were also 
thinking about something else that he even can't imagine''')   
print("""Hi last year i see some one who are thinking about soem one who were also 
thinking about something else that he even can't imagine""")

# Multi Line comments
'''
print("Hi last year i see some one who are thinking about soem one who were also 
thinking about something else that he even can't imagine")
'''
"""
print("Hi last year i see some one who are thinking about soem one who were also 
thinking about something else that he even can't imagine")
"""

# Indexes and Slices
spam=['hello', 'its', 'me', 'malware']
print(spam[3])
helo='hello malware'
print(helo[7])
print(helo[0:-1])   # print all except e

#############################################

# in and not in Operators
print('malware' in 'this is malware')
print('python' not in 'this is Python course')

# F-Strings or Alternative %s and format()
name='Ali'
age='40'
print(f'His name is {name} and his age is {age}')

name='ahsan'
age='30'
print('This is %s and his age is %s' %(name,age))
print('His name is {} and his age 10 year ago was {}'.format(name,age))
# specify using indexes
print('His age 10 year ago was {1} and his name is  {0}'.format(name,age)) 

#############################################
# Useful methods
spam = 'Hello, world!'
spam = spam.upper() 
print(spam.isupper()) # check capital or not
print(spam)

spam = spam.lower()  # print lower case
print(spam.islower())
print(spam)

isalpha()   # check  string consists only of letters and isn’t blank
isalnum()   # check consists only of letters and numbers
isdecimal()   # check consist of  spaces
isspace()    # check if str consist of only spaces 
istitle()    # check consists only of words that begin with an uppercase letter

#############################################

while True:
    print('Enter your age:')
    age = input()
    if age.isdecimal():         # check char are decimal digit 
        break
    print('Please enter a number for your age.')

while True:
    print('Select a new password (letters and numbers only):')
    password = input()
    if password.isalnum():  # check if pass contain only digit and number
        break
    print('Passwords can only have letters and numbers.')

#############################################
# Start or End with
print('Hello, world!'.startswith('Hello'))  # check if str value start with hello
print('Hello, world!'.endswith('world!'))  # check if str value end with world


# Joining and Splitting Strings
print(' '.join(['cat','bat','rat']))    # seprate with space
print(' ! '.join(['cat','bat','rat']))  # seprate with !

# split exclude character a frpm str
print('My name is malware'.split('a')) 
print('My name is malware'.split('lw'))   # exclude lw 

# In multistr spit where line change
spam = '''Dear Alice,
There is a milk bottle in the fridge
that is labeled "Milk Experiment."
Please do not drink it.
... Sincerely,
Bob'''
print(spam.split('\n'))     

#############################################
# Justifying and Centering 
print('Hello'.rjust(10))    # right justify 10 so Hello have 5 and add 5 more spaces
print('malware'.ljust(10))    # left justify 10 so malware have 7 and add 3 more spaces

print('printing'.rjust(10,'*')) # instead of space add *


# Removing Whitespace
spam='      Malware'
print(spam.strip(' '))   # remove whitespaces 
print(spam.lstrip())    # from left
print(spam.rstrip())


spam = 'SpamSpamBaconSpamEggsSpamSpam'
print(spam.strip('S'))  # Remove S at start and at end
print(spam.strip('apmS'))   # Remove a,p,m,S at start and end do not effect middle one
print(spam.lstrip('S'))     # Remove S at left(start)
print(spam.rstrip('m'))     # Remove m at right(end)
print(spam.replace('Bacon',""))  # if want to remove bacon replace it

#############################################
# Numeric Code Points of Characters
print(ord('A'))  # get code point of one-character string
print(chr(67))     # get the one-character string of int code
print(ord(chr(68)))    # get char and then ord
print(chr(ord('B')+4))     # get int and then add the char
print(ord('A') < ord('D'))  # compare int
print(chr(65)<chr(66))      # compare chars

# Copying and Pasting Strings
import paperclip
paperclip.copy('Hello World')
paperclip.paste()

###############################################
# Print upper and lower cases what ever you copy
import pyperclip
text=pyperclip.paste()
alt_text=""
mk_uppercase=True
for char in text:
    if mk_uppercase:
        alt_text += char.upper()    # capitalize the car and then add in alt_text
    else:
        alt_text += char.lower()

    mk_uppercase= not mk_uppercase  # Flip to true and false
pyperclip.copy(alt_text)
print(alt_text)

############################################### 
import pyperclip
list=['Lists of animals', 'Lists of aquarium life','Lists of biologists by author abbreviation','Lists of cultivars']
copied=pyperclip.paste()
a=""
for i in list:
    a=a + '* ' + i + '\n'
    
pyperclip.copy(a)   # copy the data in a
print(a)


###############################################
