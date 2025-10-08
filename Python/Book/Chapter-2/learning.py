

# print(bool(True)) # True is already boolean so return True
# print(bool(False)) # False is already boolean so return False
# print(bool("False")) # False is non-empty string & evaluated as True.
# print(bool("True"))  # True is non-empty string & evaluated as True.

# ==>   not not not not True
# not True => False
# not Flase => True
# not True => False
# not Flase => True # so True will be answer


username='malware'
password='pass'
if username=='malware' :
    print('welcome '+ username)
    if password=='pass':
        print("Access Granted")
    else:
        print("Access Denied")
else:
    print('Wrong Username: '+ username)




