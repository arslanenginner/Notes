
# Data Types:
'''
Remember that expressions are just values combined with operators, and they always evaluate to a single value. A data type is a category for values, and every value belongs to exactly one data type.

 The integer (or int) data type indicates values that are whole numbers. 
 Numbers with a decimal point, such as 3.14, are called floating-point numbers (or floats)

While 3 + 4 evaluates to the integer 7, the expression 3 + 4.0 evaluates to the floating-point number 7.0. Any division between two integers with the / division operator results in a float as well.
'''

# concationation
'bob' + 'alice'
'bob' * '3'      # error
'bob' - 'alice'  # error
'bob' + 4        # error
'bob' / 'alice'  # error

# convert age into int and then string
my_age = input('>')
print('You will be ' + str(int(my_age) + 1) + ' in a year.')


# The input() function always returns a string, even if the user enters a number.
spam = input()
101
spam
'101'


 # it can't evaluate as interger
 int('99.99') 


42 == '42'
False
42 == 42.0
True
42.0 == 0042.000
True


type(name)  # The name variable has a value of the string type.
<class 'str'>
type(len(name))  # The len() function returns integer values.
<class 'int'>


round(3.16,1)
3.2
round(3.15,1)
3.1



# abs() function returns the absolute value of the number argument. Mean +ve value.
abs(25)
25
abs(-25)
25
abs(-3.14)
3.14
abs(0)
0