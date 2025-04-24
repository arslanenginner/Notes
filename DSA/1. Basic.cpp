
print *

#include <iostream>
using namespace std;
int main()
{
   int n=3;
   for(int m=1; m<=n;m++)
   {
    for(int i=0; i<m;i++){
    cout<<"*";
    }
    cout<<endl;
   }
}


print ABCD

#include <iostream>
using namespace std;
int main()
{
   int n=4;
   for(int m=1; m<=n;m++)
   {
    for(int i=0; i<m;i++){
    cout<<char('A'+m-1);
    }
    cout<<endl;
   }
}

Print 
1
12
123
1234

#include <iostream>
using namespace std;
int main()
{
     int n=1;
     for(int i=0;i<4;i++)
     {
         for(int m=0;m<n;m++)
         {
             cout<<m+1;
            
         }
     cout<<endl;
     n++;
     }
}

Print 
A
AB
ABC
ABCD

#include <iostream>
using namespace std;
int main(){
    
    for(int i=0;i<4;i++)
    {
        for(int j=0;j<=i;j++)
        {
            cout<<char('A'+j);
        }
        cout<<endl;
    }
}