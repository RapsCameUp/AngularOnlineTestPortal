import { IQuestion } from './../models/IQuestion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumericaltestService {

  constructor() { }

questions: IQuestion[] = [
  {
      question: 'If 1 = 3, 2 = 3, 3 = 5, 4 = 4, 5 = 4 Then, 6=?',
      answer: [
        { option: '18', correct: false },
        { option: '3', correct: true },
        { option: '7', correct: false },
        { option: '6', correct: false },
      ]
  },
  {
      question: 'Which number is equivalent to 3^(4)÷3^(2) ?',
      answer: [
        { option: '26', correct: false },
        { option: '64', correct: false },
        { option: '9', correct: true },
        { option: '3', correct: false },
      ]
    },
    {
      question: 'There are 49 dogs signed up for a dog show. There are 36 more small dogs than large dogs. How many small dogs have signed up to compete? ',
      answer: [
        { option: '42.5', correct: true },
        { option: '39.2', correct: false },
        { option: '96.1', correct: false },
        { option: '14.3', correct: false }
      ]
    },
    {
      question: 'I am an odd number. Take away one letter and I become even. What number am I?',
      answer: [
        { option: 'One', correct: false },
        { option: 'Three', correct: false },
        { option: 'Seven', correct: true },
        { option: 'Five', correct: false }
      ]
    },
    {
      question: 'Using only an addition, how do you add eight 8’s and get the number 1000?',
      answer: [
        { option: '888 * 88 * 8 * 8 - 8', correct: false },
        { option: '888 + 88 + 8 + 8 + 8', correct: true },
        { option: '888 + 88 + 8 + 8 * 8', correct: false },
        { option: '888 ÷ 88 + 8 + 8 + 8', correct: false }
      ]
    },
    {
      question: 'Sally is 54 years old and her mother is 80, how many years ago was Sally’s mother times her age?',
      answer: [
        { option: '65 years ago', correct: false },
        { option: '20 years ago', correct: false },
        { option: '41 years ago', correct: true },
        { option: '43 years ago', correct: false }
      ]
    },
    {
      question: 'There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?',
      answer: [
        { option: '181', correct: false },
        { option: '151', correct: false },
        { option: '141', correct: true },
        { option: '191', correct: false }
      ]
    },
    {
      question: 'Two girls were born to the same mother, at the same time, on the same day, in the same month and the same year and yet somehow they’re not twins. Why not?',
      answer: [
        { option: 'Twins', correct: false },
        { option: 'decuplets', correct: false },
        { option: 'Triplets', correct: true },
        { option: 'none', correct: false },
      ]
    },
    {
      question: 'The day before yesterday I was 25. The next year I will be 28. This is true only one day in a year. What day is my Birthday?',
      answer: [
        { option: 'June 31', correct: false },
        { option: 'January 31 ', correct: false },
        { option: 'December 31', correct: true },
        { option: 'August 31 ', correct: false }
      ]
    },
    {
      question: ' How many feet are in a mile?',
      answer: [
        { option: '2540', correct: false },
        { option: '5428', correct: false },
        { option: '5280', correct: true },
        { option: '6358', correct: false }
      ]
    }
]

  getTheQuestions(){
    return this.questions;
  }
}
