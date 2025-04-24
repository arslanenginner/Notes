/*
BitWise Operators

& and operator (Both should be true)
| or  operator (one ture all true)
^ xor exclusive or ( same bit zero and differ is 1)
<< left shif    (shif 1 bit to left other fill with 0) ==> (a * 2^b)
>> right shift  (shif 1 bit to right other fill with 0 and if right side 
have no place so digit will remvoed) ==> (a/2^b)

*/

//Left shift
#include <iostream>
using namespace std;
int main()
{
    int a=10,b=2;
    cout<<(a << b)<<endl;

    return 0;
}

//Right shift
#include <iostream>
using namespace std;
int main()
{
    int a=10,b=2;
    cout<<(a >> b)<<endl;

    return 0;
}

/*
Operator Precedence (perority)
uniary ==> arithmatic ==> relational ==> logical ==> value assigned
!,+,- ==> *,%,/ ==> +,- ==> <,<=,>,>= ==> ==,!= ==> && ==> || ==> =
R to L ==> L to R ==> L to R ==> L to R ==> L to R ==> L to R ==> R to L
*/

/*
Scope 
local  (with in loop function)
global  (access from anywhere)
*/

/*
Data Type Modifier
.long     (8 bit)
.short    (2 bit)
.long long (8 bit but depend on OS)
.signed  (both for +ve and -ve values)
.unsigned (only for +ve values and range of data storing will increase beacuse 
no MSB(signed bit) for -ve vlaues)

*/

#include <iostream>
using namespace std;
int main()
{    
    cout<<sizeof(short int)<<endl;
    cout<<sizeof(long long int)<<endl;
    cout<<sizeof(long int)<<endl;
    return 0;
}
------------------------------------------------------------------
//Find n is  power of 2
#include <iostream>
using namespace std;
bool isPowerOfTwo(int n) {
    // A number is a power of 2 if it is greater than 0 and its bitwise AND with (n-1) is 0
    return (n > 0) && (n & (n - 1)) == 0;
}
/*
1000   (n = 8)
0111   (n - 1 = 7)
----
0000   (result)

-----------------------

10000   (n = 16)
01111   (n - 1 = 15)
----
00000   (result is 0)
*/
int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    if (isPowerOfTwo(number)) {
        cout << number << " is a power of 2." << endl;
    } else {
        cout << number << " is not a power of 2." << endl;
    }
    
    return 0;
}
------------------------------------------------------------------
#include <iostream>
using namespace std;
bool isPowerOfTwo(int n) {
    // A number is a power of 2 if it is greater than 0 and can be divided by 2 repeatedly until it becomes 1.
    if (n <= 0) {
        return false;
    }
    // Keep dividing the number by 2 as long as it is divisible by 2
    while (n % 2 == 0) {
        n /= 2;  // Divide by 2
    }
    // If the number becomes 1, it was a power of 2
    return (n == 1);
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    if (isPowerOfTwo(number)) {
        cout << number << " is a power of 2." << endl;
    } else {
        cout << number << " is not a power of 2." << endl;
    }
    
    return 0;
}
