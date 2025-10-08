
name=''
while name!='malware':      # continu asking until name true
    print("Enter You Name: ")
    name=input('>')
print("Thank You!")

#################################

bool('Hello')  # Any non empty string consider as True
True
bool('')  # empty string consider as False
False

################################

while True:
    uname=input("Enter you name: \n>")
    if uname =='malware':
        print("Thanks You")
        break
    print(".............")       # This will skipped
print("Program Ended")

#####################################

while True:
    print('Who are you?')
    name = input('>')
    if name != 'Joe':
        continue # move program to start of Loop
    print('Hello, Joe. What is the password? (It is a fish.)')
    password = input('>')
    if password == 'swordfish':
        break
print('Access granted.') 