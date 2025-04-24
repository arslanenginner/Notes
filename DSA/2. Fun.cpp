
/*
 In c++ we have 2 types of memory store layer by layer and other one is heap
use for dynamic and stack for static allocation.
Every fun and its var stored in stack memory.fun and stack run and store side by side
 Arrguemtn pass by value and pass by reference.
*/
#include <iostream>
using namespace std;
void myfun() {
    // if fun just printing not returning anything we use void
    // fun can declare before and after main
    cout << "Hello world";
}

int main() {
    myfun();
    return 0;
}


// Both function work is same

#include <iostream>
using namespace std;
// Forward declaration of myfun
void myfun();

int main() {
    myfun();
    return 0;
}
void myfun() {
    cout << "Hello world";
}

// Use of return

#include <iostream>
using namespace std;
// Forward declaration of myfun
int myfun();

int main() {
  cout<< myfun(); 
}

int myfun() {
    cout << "Hello world"<<endl;
     return 5;
}

// Fucntion with parameters

#include <iostream>
using namespace std;

int sum(int a, int b){
    int s=a+b;
    return s;
}
int main()
{
    cout<<sum(10,20);
} 

// count value to n program

#include <iostream>
using namespace std;

int sum(int n){
    int m=0;
    for (int i=0 ;i<=n;i++)
    {
        m=m+i;
    }
    return m;
}
int main()
{
    cout<<sum(10);
    return 0;
} 

// Factorial calculator 

 #include <iostream>
using namespace std;

int fact(int n)
{
    int m=1;
    for (int i=1;i<=n;i++)
    {
        m=m*i;
    }
    return m;
}
int main()
{
    std::cout <<fact(7)<< std::endl;
    return 0;
}