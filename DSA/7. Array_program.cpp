// Calculate sum and mul of array
#include <iostream>
using namespace std;

int main(){
int array[]={2,3,5,2,6};
int size=5;int mul=1;int sum=0;
for (int i=0;i<5;i++){
    mul=array[i]*mul;
    sum=array[i]+sum;
   
}

cout<<"Sum of array is :"<<sum<<endl;
cout<<"Mul of array is :"<<mul;
return 0;
}

// Swap Two numbers
#include <iostream>
#include <climits>  // Include this for INT_MIN
#include <algorithm>
using namespace std;

void findLargestSmallest(int array[], int size, int &large, int &small, int &largeIndex, int &smallIndex) { 
    large = INT_MIN;
    small = INT_MAX;
    largeIndex = -1;
    smallIndex = -1;

    for (int i = 0; i < size; i++) {
        if (array[i] > large) {
            large = array[i];
            largeIndex = i;
        }
        if (array[i] < small) {
            small = array[i];
            smallIndex = i;
        }
    }
}

void swapElements(int array[], int largeIndex, int smallIndex) {
    // Swap the values at the indices
    int temp = array[largeIndex];
    array[largeIndex] = array[smallIndex];
    array[smallIndex] = temp;
}

int main() {
    int array[] = {3, 6, 8, 2, 9};
    int size = 5;
    int large, small;
    int largeIndex, smallIndex;

    findLargestSmallest(array, size, large, small, largeIndex, smallIndex); // Find largest and smallest

    cout << "Array Before swaping:" << endl;
     for (int i = 0; i < size; i++) {
        cout << array[i] << " ";
    }

    // Swap the smallest and largest numbers in the array
    swapElements(array, largeIndex, smallIndex);

    // Display the array after swapping
    cout <<endl<<"Array after swapping: "<<endl;
    for (int i = 0; i < size; i++) {
        cout << array[i] << " ";
    }
    cout << endl;

    return 0;
}

// Count value duplicate or not
#include <iostream>
using namespace std;

void uniqvalue(int array[],int size){
    for(int i=0;i<size;i++){
      
       for(int m=i+1;m<size;m++){
           if(array[i]==array[m]){
               cout<<"Dublicate array: "<<array[i]<<endl;
          }
      }
    
    }
}
int main()
{
    
    int array[]={4,6,4,7,6,7};
    int size=6;
    uniqvalue(array,size);
    return 0;

}
// Intersection of two arrays
#include <iostream>
using namespace std;

void intersection(int array1[],int array2[],int size){
    for(int i=0;i<size;i++){
      
       for(int m=0;m<size;m++){
           if(array1[i]==array2[m]){
               cout<<"intersection of array is : "<<array1[i]<<endl;
          }
      }
    
    }
}
int main()
{
    int array1[]={1,2,4,3,5,8};
    int array2[]={9,2,3,6,7,5};
    int size=6;
    intersection(array1,array2,size);
    return 0;
}