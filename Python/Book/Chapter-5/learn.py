# Multiple Assigning
x, y, z = 1, 2, 3
print(x, y, z)  # Output: 1 2 3

##########################################################

# Raising Exceptions : 
def box_print(symbol, width, height):
    if len(symbol) != 1:
        raise Exception('Symbol must be a single character string.')    # Raise the exception (alert) and stop execution help to find exact line of error
    if width <= 2:
        raise Exception('Width must be greater than 2.')
    if height <= 2:
        raise Exception('Height must be greater than 2.')
    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)

try:
    box_print('*', 4, 4)
    box_print('O', 20, 5)
    box_print('x', 4, 3)
    box_print('ZZ', 3, 3)     # double zz cause error
# use of onle except will catch error but will not show what error was so we use except Exception as err
# except:
#     print('Error occur')

except Exception as err:  # catch the error that occur in box_print
    print('Eror occur: ' + str(err))     # Print the catch error
 
###########################################

# Assertions (assertion errors are just for developers in development phase)
ages = [26, 57, 92, 54, 22, 15, 17, 80, 47, 73]
assert ages[0] <= ages[-1]       # Check first value =< last value
ages.sort()
print(ages)

ages.reverse()    # Reverse sort value
assert ages[0] >= ages[-1]    # check the grater then

############################################

spam=[1,2,3,4,5,10]
for i in spam:
    print(i)
    while (i<10):
        print(i)
        i=i+1

############################################

# Logging help to save errors in files in format manner and help to see later. 
import logging      # root in output mean what logger am using
#  basicConfig Help us to specify specific format we want
logging.basicConfig(level=logging.DEBUG,filename='log.log',filemode='w')  # config log level and save logs in file with mode overwrite and here logging.DEBUG mean save logs debug level and above 
logging.debug('debug') 
logging.info('info') 
logging.warning('warning') 
logging.error('error')  
logging.critical('critical') 

#####################################

import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s -  %(levelname)s -  %(message)s')
logging.debug('Start of program')   # Print logs with start of program

def factorial(n):
    logging.debug('Start of factorial(' + str(n) + ')')  # Print start fact with logs
    total = 1
    for i in range(1,n + 1):   # range from 1 to n+1 (6) ==> [0,1,2,3,4,5]
        total *= i
        logging.debug('i is ' + str(i) + ', total is ' + str(total))  # print logs and value with i also total
    logging.debug('End of factorial(' + str(n) + ')')
    return total

print(factorial(5))
logging.debug('End of program')      # End with printing logs

###################################################

# Logging Levels and Log them in file
import logging
logging.basicConfig(filename='prac_log.log',level=logging.DEBUG, format=' %(asctime)s - %(levelname)s - %(message)s ')  # Print logs in file
logging.debug('Some minor code and debugging details')
logging.info('An event happened')
logging.warning('Something cloud go wrong')
logging.error('Error has occured')
logging.critical('Program unable to recover')

##########################################

import logging 
logging.basicConfig(level=logging.DEBUG,format=' %(asctime)s - %(levelname)s - %(message)s ')
logging.critical('Some critical error')
logging.disable(logging.CRITICAL)      # Disable anykind of logging message critical or lower then it 
logging.info('Some basic ')
logging.critical('Some critical error')

########################################

import logging 
logging.basicConfig(level=logging.DEBUG,format=' %(asctime)s - %(levelname)s - %(message)s ')
logging.critical('Some critical error')
logging.disable(logging.INFO)      # Disable anykind of logging message info or lower then it 
logging.info('Some basic ')
logging.critical('Some critical error')

#######################################

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

