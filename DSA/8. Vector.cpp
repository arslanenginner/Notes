/*
STL (standard template library of c++) have code of DS like vector,stack, Queue etc are called
STL containers that store data.

Vector a data structure like array have indexes and have dynamic in nature (size changed).
vector is internally array in memory.

vector <type> name={};
vector <type> name=(5,4);            //first size ==> 5 and 4  will save as value on 5 indexes

*/
#include <iostream>
#include <vector>
using namespace std;
int main()
{
   vector<int> vect ={4,5,8};
   vector<int> size (9,4);

   cout<<vect[0];
   cout<<size[8];
    return 0;
}
// Loop on vector
#include <iostream>
#include <vector>
using namespace std;
int main()
{
   vector<char> cha={'a','v','f','c','d'};
   vector<int> vec (5,4);
   
  for (int i :vec)
  {
      cout<<i<<endl;
  }
  for (char j :cha)
  {
      cout<<j<<endl;
  }
    return 0;
}

/*
Vector Function:
size()        vector.size()
pushback()    vector.push_back(val)             push value in vector
pop_back()    vector.pop_back()                 delete last element from vector not need to tell value
front         vector.front()                    print front value
back          vector.back()                     print last value
at            vector.at(i)                      print index value

Static Vs Dynamic memory alocation:
 In static memory assigned during compile time,array assigned static memory location which not changed and inside stack
 In dynamic memory assigned during runtime, vector assigned dynamic memory which can be changed inside heap.
*/

// Vector Functions
#include <iostream>
#include <vector>
using namespace std;

int main()
{
   vector<int> vec;
   vec.push_back(5);
   vec.push_back(4);
   vec.push_back(3);
   vec.push_back(2);
   vec.push_back(1);
   
   cout<<"size of vector: "<<vec.size()<<endl;
    cout<<"Vector capacity: "<<vec.capacity()<<endl;
    
    vec.pop_back();
    cout<<"Front vector: "<<vec.front()<<endl;
    cout<<"Back vector: "<<vec.back()<<endl;
    
    cout<<"size of vector: "<<vec.size()<<endl;
    cout<<"Vector capacity: "<<vec.capacity()<<endl;
    return 0;
}

// XOR operation 
#include <vector>  // For using the vector class
#include <iostream> // For input/output (optional, if needed for testing)

class Solution {
public:
    int single(std::vector<int>& num) {
        int ans = 0;
        for (int val : num) {
            ans = ans ^ val;
        }
        return ans;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {4, 1, 2, 1, 2};
    std::cout << "The single number is: " << solution.single(nums) << std::endl;
    return 0;
}
