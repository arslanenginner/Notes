import re
phone_regex = re.compile(r'\d{3}-\d{3}-\d{4}')
user_inp=input("Enter your text please: ")
all_vals=phone_regex.findall(user_inp)
for each in all_vals:
    print(each)


################################################

import re
phone_regex = re.compile(r'[^@\s]+@{1}[a-zA-Z0-9]+\.{1}[a-zA-Z]+')
user_inp=input("Enter your text please: ")
all_vals=phone_regex.findall(user_inp)
for each in all_vals:
    print("The valid email is "+each)

################################################

import re
phone_regex = re.compile(r'(\d{2})/(\d{2})/(\d{4})')
user_inp=input("Enter your text please: ")
all_vals=phone_regex.findall(user_inp)
for each in all_vals:
    day=int(each[0])
    month=int(each[1])
    year=each[2]
    if (day>=0 and day<=30) and (month>=1 and month<=12) and len(year)==4:
        print(f"The valid date is:  {each[0]}/{each[1]}/{each[2]}")
    else:
        continue

################################################

import re
#ask to enter cnic
cnic = input("Enter your cnic in the format XXXXX-XXXXXXX-X: ") 

#check if they have entered all digits and hypens where required. then run the block of code. 
format = re.compile(r'^\d{5}-\d{7}-\d$')
if format.match(cnic):
    start = cnic[0:5] #first five digits
    mid = cnic[6:13] #next seven digits
    end = cnic[14] #last digit

    if start.isdecimal() and mid.isdecimal() and end.isdecimal(): #use and function to make sure all true
        print("You entered:", cnic)
    else:
        print("use only digits where required.") #this runs if they havent entered digits
else:
    print("use the format XXXXX-XXXXXXX-X.") #this runs if they got it completely wrong

################################################

import re
cnic=input("Please enter the CNIC (e.g. 11111-1111111-1):\t")
cnic_regex_obj = re.compile(r'\d{5}-\d{7}-\d{1}')
matching_val = cnic_regex_obj.search(cnic)
try:
    print("You have entered a valid CNIC which is "+matching_val.group())
except AttributeError:
    print("Your input is not a valid CNIC.")

################################################

import re

def cnic_checker(cnic):
    province_mappings = {
        '1': 'Khyber Pakhtunkhwa',
        '2': 'FATA',
        '3': 'Punjab',
        '4': 'Sindh',
        '5': 'Balochistan',
        '6': 'Islamabad',
        '7': 'Azad Jammu and Kashmir',
        '8': 'Gilgit Baltistan',
        '9': 'Overseas Pakistani'
    }
    cnic_obj = re.compile(r'\d{5}-\d{7}-\d{1}')
    matched_pattern = cnic_obj.search(cnic)
    if matched_pattern:
        print("Valid CNIC number ✅")
        cnic_str = matched_pattern.group()
        if int(cnic_str[-1]) % 2 == 0:
            print("CNIC holder is female 👧")
        else:
            print("CNIC holder is male 👦")
        sliced_cnic_str = cnic_str[0]
        if sliced_cnic_str in province_mappings:
            residence_info = province_mappings[sliced_cnic_str]
            print(f"CNIC holder is residence of {residence_info}📍🌏")
    else:
        print("❌ You should enter CNIC in valid format ❌")


user_cnic = input("Enter CNIC >> ")
cnic_checker(user_cnic)

################################################
# Task: Write a program that takes user input and checks if the input is a valid CNIC or not. You must use re module for this task.
# Hint: CNIC consists of this pattern 5 numbers-7 numbers-1 number


import re

def cnic_checker(cnic):
    cnic_obj = re.compile(r'\d{5}-\d{7}-\d{1}')
    matched_pattern = cnic_obj.search(cnic)
    if matched_pattern:
        print("Valid CNIC number ✅")
    else:
        print("❌ You should enter CNIC in valid format ❌")


user_cnic = input("Enter CNIC >> ")
cnic_checker(user_cnic)