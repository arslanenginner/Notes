/*
Pass By Value: 
  a copie will created and change will not happend in main value.

Pass By Refrence:
  original address is provide and change reflect in original value.array reflect change in 
  main value.
*/

/*
Linear Search: 
  search one by one using loop to every value and match condition.Easy and simple 


*/

// Linear Search
#include <iostream>
using namespace std;
int main()
{
    int array[]={5,6,8,3,4};
    int search =8;
    int index=-1;
    for(int i=0;i<5;i++){
      if(search==array[i]){
        index=i;
      }
     
    }
    cout<<index<<endl;

}

//Linear Search using Function
#include <iostream>
using namespace std;
 
int linearsearch(int arr[],int search)
{
    for (int i=0;i<5;i++){
        if(arr[i]==search){
            return i;
        }
    }
    return -1;
}
int main()
{
 int arr[]={4,8,5,9,2};
 int search=5;
cout<< linearsearch(arr,search)<<endl;
}
    
//Swap two numbers using function in array
#include <iostream>
#include <algorithm> 
using namespace std;

void reverse(int array[],int size){
    int start=0;int end=size-1;
    while(start<end){
        swap(array[start],array[end]);
        start++;
        end--;
    }
}
int main()
{
    int array[]={4,5,9,6,7};
    int size=5;
reverse(array,size);
    for(int i=0;i<size;i++){
       cout << array[i]<<" "; 
    }
    cout<<endl;
    return 0;
}