
/*
==> Data structure is a structure in code to store data
==> Algorithm are ways to perform efficient operation on data.


==> Array (1st DS)
same type of data stored ,contigious(store in continous manner)and  all data store in one time also linear

int marks[5]={1,5,3,8,,9};           //intilized array and tel size
double marks[]={1,5,3,8,,9};        //we can skip the size

position at array start from 0 and lenght from 1.
index position (n-1)

 */
==> 
#include <iostream>
using namespace std;
int main()
{
    int array[]={2,5,4,9,6};
    array[0]=3;    //array 0 will be replaced
    cout<<array[0]<<endl;
    return 0;
}
 
==> // Get Total size of array
#include <iostream>
using namespace std;
int main()
{
    int array[]={2,5,4,9,6};
    cout<<sizeof(array)/sizeof(int);
    return 0;
}
 
==> // Print array number
#include <iostream>
using namespace std;
int main()
{
    int array[]={1,2,3,4,5,6,7,8,9};
    int size=sizeof(array)/4;
     for (int i=1;i<=size;i++){
        cout <<i<<endl;
    }
}

==> // Print smallest value 
#include <iostream>
#include <climits>  // Include this for INT_MAX
using namespace std;

int main()  
{  
   int array[] = {5, 8, 10, 9, 7};
   int smallest = INT_MAX;   //largest value saved

   // Loop through the array to find the smallest number
   for (int i = 0; i < 5; i++)  // Using the correct for loop syntax and array size (5 elements)
   {
       // Compare each element with 'smallest'
       if (array[i] < smallest) {
           smallest = array[i];
       }
   }
   // Output the smallest value
   cout << "Smallest value is: " << smallest << endl;

   return 0;
}
// We can also use min function instead of this array loop smallest=min(array[i] ,smallest);

==> // Give index of largest value 
#include <iostream>
#include <climits>  // Include this for INT_MIN
#include <algorithm>

using namespace std;
int main()  
{
    int index=-1;
   int array[] = {5, 8, 10, 9, 7};
   int largest = INT_MIN; 

   for (int i = 0; i < 5; i++) 
   {
       
     if (array[i] > largest) 
        {
            largest = array[i];
            index = i; 
        }
       
   }
  
   cout << "Largest value is: " << largest << endl;
   cout << "Index of  value is: " << index << endl;
   

   return 0;
}