try:
    a=int(input("Enter a number: "))
    print('its integer')
except:
    print("Its not integer")

###########################################

spam=int(input("Enter the number: "))
assert spam < 10

###########################################

eggs=input("Enter anystring: ")
bacon=input("Enter anystring: ")
assert eggs.lower() != bacon.lower() or eggs.upper() != bacon.upper()
print("String are diffenet")

##########################################

# Correct version of program
import random
guess = ''
while guess not in ('heads', 'tails'):      # Run the loop if input not heads or tails
    print('Guess the coin toss! Enter heads or tails:')
    guess = input()
toss = random.randint(0, 1)  # 0 is tails, 1 is heads
if toss == 0 and guess == 'tails' or  toss == 1 and guess == 'heads':     # true if one of them correct 
    print('You got it!')
else:
    print('Nope! Guess again!')
    guess = input()
    if toss == 0 and guess == 'tails' or  toss == 1 and guess == 'heads':
        print('You got it!')
    else:
        print('Nope. You are really bad at this game.')

