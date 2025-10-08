x=5
def good_enough(x,guess):    # sq of guess should be too far
    return abs((guess * guess) - x) < 0.000001       # it should less then  0.000001
def improve_guess(x,guess):  # Avg of guess x/guess
    return (guess+x/guess)/2
def sqrt(x,guess=0.0001):   # 
    if good_enough(x,guess):
        return guess
    else:
        return sqrt(x,improve_guess(x,guess))

print(sqrt(x))