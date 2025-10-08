
# Debug Program 1 
print('Enter the first number to add:')
first = input()
print('Enter the second number to add:')
second = input()
print('Enter the third number to add:')
third = input()
print('The sum is ' + first + second + third)


##############################

# Debug Program 2
import random
heads = 0
tails=0
for i in range(1, 1001):      # Range fun include start value but exclude stop value mean it go from 1 to 1000
    if random.randint(0, 1) == 1:
        heads = heads + 1
    else:
        tails=tails+1
    if i == 500:
        print('Halfway done!')
        print('Heads came up ' + str(heads) + ' times. and Tails came up ' + str(tails))    # Print number of heads and tails in half range
print('Heads came up ' + str(heads) + ' times. and Tails came up ' + str(tails))
