# Try and except with mode 
def value():
    if a % 2 == 0:
        return a
    elif a % 2 == 1:
        n=3 * a + 1
        return n
try:  
    a=int(input("Enter a value: "))
    print(value())
except:
    print('wrong Input')
    

