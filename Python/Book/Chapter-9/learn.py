def is_phone(text):
    if len(text)!=12:
        return False
    for i in range(0,3):
        if not text[i].isdecimal():
            return False
    if text[3]!='-':
        return False
    for i in range(4,7):
        if not text[i].isdecimal():
            return False
    if text[7]!='-':
        return False
    for i in range(8,12):
        if not text[i].isdecimal():
            return False
    return True

# print(' Is 415-356-3453 a Phone Number?', is_phone('415-356-3453'))
# print('Is Moshi moshi a Phone Number?', is_phone('Monshi Monshi'))

# Explain this part
message = 'Call me at 415-555-1011 tomorrow. 415-555-9999 is my office.'
for i in range(len(message)):
    segment = message[i:i+12]   # take number from i to i+12
    if is_phone(segment):
        print('Phone number found: ' + segment) 
print('Done')

##############################################

import re       # Built on module that work with regex
phone_num_pattern=re.compile(r'\d{3}-\d{3}-\d{4}')  # String that need to search  
match_obj=phone_num_pattern.search('My number is 415-457-4581.')    # search is fun to specific string
print(match_obj.group())    # return part of str where its match

##############################################

import re
txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)  
# here ^ mean start with The and $ mean end with spain while . mean match any single char and * mean occurance 0 to many times
print(x)

##############################################

import re 
phone=re.compile(r'(\+\d{2})-(\d{10})') # Add in paratheses to divide into groups
match=phone.search('Hello its me malware and my number is +92-3238383838')
print(match)    
print(match.group(1))   # Print first group  

##############################################

# Pip Operator 
import re 
phone=re.compile(r'malw(tag|are|rag)') # Add in paratheses to divide into groups
match=phone.search('Hello its me malware and my number is +92-3238383838')
print(match.group())    

##############################################

# Findall will not overlap matches
import re
pattern = re.compile(r'\d{3}-\d{3}-\d{4}')  # This regex has no groups
print(pattern.findall('Cell: 415-555-9999 Work: 212-555-0000'))


import re
pattern = re.compile(r'(\d{3})-(\d{3})-(\d{4})')  # This regex has  groups
print(pattern.findall('Cell: 415-555-9999 Work: 212-555-0000'))
##############################################

# Using Character Classes and Negative Character Classes
import re
pattern = re.compile(r'[aeiouAEIOU]') 
print(pattern.findall('RoboCop eats BABY FOOD.')) 

# ^ is nagtive character class match all that are not in pattern 
import re
pattern = re.compile(r'[^aeiouAEIOU]') 
print(pattern.findall('RoboCop eats BABY FOOD.')) 
##############################################

# Using Shorthand Character
import re
pattern = re.compile(r'\d+\s\w+')   # match integers, spaces and characters
print(pattern.findall('12 drummers, 11 pipers, 10 lords, 9 ladies, 8 maids, 7 swans, 6 geese, 5 rings, 4 birds, 3 hens, 2 doves, 1 partridge'))

##############################################
# digit or anything before ? is optional
import re
pattern = re.compile(r'42!?') # match 42 but ! is optional due to ?
print(pattern.search('42!'))
print(pattern.search('4!'))     # None print


import re
pattern = re.compile(r'42?!')    # match 4 and ! so 2 is optional due to  ?
pattern.search('42!')
print(pattern.search('42'))     # None
print(pattern.search('4!'))


import re
pattern = re.compile(r'(\d{3}-)?\d{3}-\d{4}')   # its optional (\d{3}-)? because in parathese and ? at end
match1 = pattern.search('My number is 415-555-4242')
print(match1.group())

##############################################

#Matching One or More Qualifiers
import re
pattern=re.compile(r'Eggs (and spam)+')     # + mean one  or more occurance
print(pattern.search('Eggs and spam'))
print(pattern.search('Eggs and spam and spam'))
print(pattern.search('Eggs and spam and spam and spam'))

##############################################
# Matching a Specific Number of Qualifiers
(Ha){3}     # match only three times
(ha){3,5}   # MATCH 3 TO 5 TIME
(ha){3,}    # MATCH min 3 and max no limit
(Ha){,5}   # Not correct syntax


import re
haregex=re.compile(r'(ha){3,5}')
match1=haregex.search('hahahaha')
print(match1.group())

match = haregex.search('HaHa')
print(match==None)

##############################################

# Greedy Matching
import re
greedy_pattern = re.compile(r'(Ha){3,5}')   # match as much text as it can  +? (greedy)
match1 = greedy_pattern.search('HaHaHaHaHa')
print(match1.group())

#  Non-greedy Matching
lazy_pattern = re.compile(r'(Ha){3,5}?')    # use to match little text  a?  (non greedy)
match2 = lazy_pattern.search('HaHaHaHaHa')
print(match2.group())

##############################################

# Matching Everything
import re
pattern=re.compile(r'First name: (.*\s.*) Last name: (.*)')     # . mean any single char and * mean repleatdly
match=pattern.search('First name: alice jondo Last name: David')
print(match.group())

# Lazy search
import re
lazy_pattern=re.compile(r'<.*?>')  # . any char, * one or multiple time, ? lazy only 0 or once
match1=lazy_pattern.search('<To serve man> for dinner.>')
print(match1.group())

# Greedy Search 
import re
lazy_pattern=re.compile(r'<.*>')  # . any char, * one or multiple time
match1=lazy_pattern.search('<To serve man> for dinner.>')
print(match1.group())

##############################################

# Matching Newline Characters
import re
pattern=re.compile('.*')
print_pattern=pattern.search('Serve the public trust.\nProtect the innocent. \nUphold the law.')
print(print_pattern.group())

#  Using re.DOTALL 
import re
pattern=re.compile('.*',re.DOTALL) # re.DOTALL also match \n 
print_pattern=pattern.search('Serve the public trust.\nProtect the innocent. \nUphold the law.')
print(print_pattern.group())    # In python interactive shell it show as \n but in code editor it will execute the \n

##############################################

# Matching at the Start and End of a String

# At start 
import re 
pattern=re.compile(r'^Malware')  # ^ mean str must occur at beggning
stringdata=pattern.search('Malware is here')
print(stringdata.group())

# At end
import re 
pattern=re.compile(r'\d{4}$')  # $ mean str must occur at end
stringdata=pattern.search('Hii my age os 1009')
print(stringdata.group())

# ^ and $ togather
import re 
pattern=re.compile(r'^\d+$')  
stringdata=pattern.search('031800000')
print(stringdata.group())

# Match word boundary
import re
pattern = re.compile(r'\bcat.*?\b')   # \b match only word boundary
print(pattern.findall('The cat found a catapult catalog in the catacombs.'))


import re
pattern = re.compile(r'\Bcat.*?\B')   # \B match anything other that not word
print(pattern.findall('The cat found a catapult catalog in the catacombs.'))

##############################################

# Case-Insensitive Matching
import re
pattern = re.compile(r'robocop', re.I)  # re.IGNORCASE ignore case senstive
print(pattern.search('RoboCop is part man, part machine, all cop.').group())

##############################################

# Substituting Strings
import re
pattern=re.compile(r'Agent \w+')
print(pattern.sub('CENSORED','Agent Alice contacted Agent Bob.'))   # replace Agent .... with CENSORD

import re
agent_pattern = re.compile(r'Agent (\w)\w*')  # (\w) match exactly single char and \w any single word char 
print(agent_pattern.sub(r'\1****', 'Agent Alice contacted Agent Bob.')) # replace Agent Alice and Agent Bob

##############################################

# Managing Complex Regexes with Verbose Mode
pattern = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext\.)\s*\d{2,5})?)')

# use this to mitigate the complexity
pattern = re.compile(r'''(
    (\d{3}|\(\d{3}\))?  # Area code
    (\s|-|\.)?  # Separator
    \d{3}  # First three digits
    (\s|-|\.)  # Separator
    \d{4}  # Last four digits
    (\s*(ext|x|ext\.)\s*\d{2,5})?  # Extension
    )''', re.VERBOSE)

##############################################

# Combining re.IGNORECASE, re.DOTALL, and re.VERBOSE
some_regex = re.compile('foo', re.IGNORECASE | re.DOTALL)
# Including all three options in the second argument looks like this:
some_regex = re.compile('foo', re.IGNORECASE | re.DOTALL | re.VERBOSE)