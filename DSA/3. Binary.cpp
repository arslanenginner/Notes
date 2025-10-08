/*

Bin (base 2) 0-1
oct (base 8) 0-7
Dec (base 10) 0-9
Hex (base 16) 0-9,A-F

*/

/*

Deccimal to Binary: 
repeatdly divide the number on 2 until reminder is zero.

*/
#include <iostream>
using namespace std;

int dec2binary(int decnum){
    int ans=0, powr=1;

  
  while(decnum>0){
      int rem=decnum%2;
      decnum=decnum/2;
      ans+=(rem*powr);
      powr*=10;
      
  }
    return ans;
}  

int main(){
   int decnum=50;
   cout<<dec2binary(decnum)<<endl;
   return 0;
}



/*

Binary to Deciaml:
right to left multiply by 2 and then add

*/

#include <iostream>
using namespace std;

int binary2decimal(int binnum){
    int ans=0, powr=1;
    while(binnum>0){
        int rem=binnum%10;
        ans+=rem*powr;
        binnum/=10;
        powr*=2;
    }
    return ans;
}  

int main(){
   cout<<binary2decimal(10010)<<endl;
   return 0;
}

/*
converting -ve number
-8 to bianry and reverse

==> convert to binary
convert into binary
Prefix with 0 (add 0 at starting represent -ve value and 1 +ve  value)
compliment (reverse number)
add +1

==> Binary to decimal (Reverse)
compliment
add +1

*/