export const quizData = [
  {
    id: 0,
    question: `In a kilometre race, A beats B by 40 meters or by 5 seconds.
        What is the time taken by A over the course?
`,
    options: [
      `A. 1 minute 57 seconds.`,
      `B. 2 minutes`,
      `C. 1.5 minutes`,
      `D. None of these`,
    ],
    answer: `B. 2 minutes`,
  },
  {
    id: 1,
    question: `A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?`,
    options: [`A. 100m`, `B. 200m`, `C. 240m`, `D. 340m`],
    answer: `C. 240m`,
  },
  {
    id: 2,
    question: `Tom is travelling on his cycle and has calculated 
to reach point A at 2 P.M. if he travels at 10 kmph, 
he will reach there at 12 noon if he travels at 15 kmph. 
At what speed must he travel to reach A at 1 P.M.?`,
    options: [`A. 12 kmph`, `B. 5kmph`, `C. 60kmph`, `D. 15kmph`],
    answer: `A. 12 kmph`,
  },
  {
    id: 3,
    question: `In a certain store, the profit is 320% of the cost.  
If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?`,
    options: [`A. 50 %`, `B. 60 %`, `C. 70 %`, `D. 80 %`],
    answer: `C. 70 %`,
  },
  {
    id: 4,
    question: `39 persons can repair a road in 12 days, working 5 hours a day. In how many days will 30 persons, working 6 hours a day, complete the work?`,
    options: [`A. 12`, `B. 13`, `C. 14`, `D. 15`],
    answer: `B. 13`,
  },
  {
    id: 0,
    question: `Which of the following features must be supported by any programming language to become a pure object-oriented programming language?`,
    options: [
      `A. Encapsulation`,
      `B. Inheritance`,
      `C. Polymorphism`,
      `D. All of the above`,
    ],
    answer: `D. All of the above`,
  },
  {
    id: 1,
    question: `Which of the following is the correct syntax to read the single character to console in the C++ language?`,
    options: [`A. Read ch()`, `B. Getline vh()`, `C. get(ch)`, `D. Scanf(ch)`],
    answer: `C. get(ch)`,
  },
  {
    id: 2,
    question: `If we stored five elements or data items in an array, what will be the index address or the index number of the array's last data item?`,
    options: [`A. 3`, `B. 5`, `C. 4`, `D. 88`],
    answer: `C. 4`,
  },
  {
    id: 3,
    question: `Which type of memory is used by an Array in C++ programming language?`,
    options: [
      `A. Contiguous`,
      `B. None-contiguous`,
      `C. Both A and B`,
      `D. Not mentioned`,
    ],
    answer: `A. Contiguous`,
  },
  {
    id: 4,
    question: `Read the given C++ program carefully and choose the correct output from the given options:`,
    code: `#include <iostream>  
#include <string>  
using namespace std;  
int main()  
{  
    cout<<rank<int[10]>::value; // Case A  
    cout<<rank<char[10][10]>::value;   // Case B  
    cout<<rank<string[10][10][10]>::value; //Case C  
    return 0;  
}`,
    options: [`A. 121`, `B. 321`, `C. 123`, `D. 010`],
    answer: `C. 123`,
  },
  {
    id: 5,
    question: `Which one of the following statements correctly refers to the Delete and Delete[] in C++ programming language?`,
    options: [
      `A. Delete is syntactically correct although, if the Delete[] is used, it will obtain an error.`,
      `B. The "Delete" is used for deleting the standard objects, while on the other hand, the "Delete[]" is used to delete the pointer objects`,
      `C. The "Delete" is a type of keyword, whereas the "Delete[]" is a type of identifier`,
      `D. The "Delete" is used for deleting a single standard object, whereas the "Delete[]" is used for deleting an array of the multiple objects`,
    ],
    answer: `D. The "Delete" is used for deleting a single standard object, whereas the "Delete[]" is used for deleting an array of the multiple objects`,
  },
  {
    id: 6,
    question: `Which operator can not be overloaded in C++?`,
    options: [`A. +`, `B. -`, `C. *`, `D. ::`],
    answer: `D. ::`,
  },
  {
    id: 7,
    question: `Find the output of below C++ program? `,
    code: `#include<iostream>
void Execute(int &x, int y = 200)
{
 int TEMP = x + y;
 x+= TEMP;
 if(y!=200)
     std::cout<<TEMP<<x<<y<<"--";
}
int main() {
 int A=50, B=20;
 std::cout<<A<<B<<"--";
 Execute(A,B);
 std::cout<<A<<B<<"--";
 return 0;
}`,
    options: [
      `A. 5020--5020--`,
      `B. 5020--7012020--12020--`,
      `C. 5020--70120200--5020`,
      `D. 5020--7050200--5020--`,
    ],
    answer: `B. 5020--7012020--12020--`,
  },
  {
    id: 8,
    question: `Which of the following given statement is completely true?

I. In an object-oriented programming language, all the function calls are resolved at compile-time.
II. In a procedure programming language, all the function calls are resolved at compile-time`,
    options: [
      `A. Only II`,
      `B. Only I`,
      `C. Both I & II`,
      `D. None of the above`,
    ],
    answer: `B. Only I`,
  },
  {
    id: 9,
    question: `
The below code snap display______`,
    code: `String str="Hello";
int i;
for(i = str.length() - 1; i >= 0; i--)
{
    cout<<str[i];
}`,
    options: [
      `A. Given String Hello`,
      `B. Given String ollH`,
      `C. Given String reverse`,
      `D. Given String Hell`,
    ],
    answer: `C. Given String reverse`,
  },
];
