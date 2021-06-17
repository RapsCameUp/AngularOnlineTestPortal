import { Injectable } from '@angular/core';
import { IQuestion } from '../models/IQuestion';

@Injectable({
  providedIn: 'root'
})
export class CriticaltestService {

  constructor() { }

  
questions: IQuestion[] = [
  {
      question: 'What is usually the most important question you can ask in any given situation?',
      answer: [
        { option: 'How much money can I make?', correct: false },
        { option: 'Who is responsible?', correct: true },
        { option: 'Why?', correct: false },
        { option: 'Can I accomplish this?', correct: false },
      ]
  },
  {
      question: 'Doing which of the following can expand your thinking as well as help you gather new information and discover new insights?',
      answer: [
        { option: 'Silently observing the situation.', correct: false },
        { option: 'Writing up an action plan.', correct: false },
        { option: 'Taking a moment for silent contemplation.', correct: true },
        { option: 'Asking questions.', correct: false },
      ]
    },
    {
      question: 'Which three actions should you take to analyze information?',
      answer: [
        { option: 'Compare, contrast and connect.', correct: true },
        { option: 'Prioritize, pursue and persuade', correct: false },
        { option: 'Question, quiz and quarrel.', correct: false },
        { option: 'Navigate, nurture and negotiate', correct: false }
      ]
    },
    {
      question: 'Do you think it is more important to develop thinking skills or job skills while in high school?',
      answer: [
        { option: 'Job skills: they are what will get you hired.', correct: false },
        { option: 'Both are equally important.', correct: false },
        { option: 'Thinking skills: you can use them to learn a variety of job skills', correct: true },
        { option: 'Neither: it is more important to be a nice person.', correct: false }
      ]
    },
    {
      question: 'Which of the following skillsets is most important when entering the workforce?',
      answer: [
        { option: 'Communication skills', correct: false },
        { option: 'Managerial skills', correct: false },
        { option: 'Interpersonal skills.', correct: false },
        { option: 'All are equally important.', correct: true }
      ]
    },
    {
      question: 'A powerful question...',
      answer: [
        { option: 'Narrows the scope of the conversation.', correct: false },
        { option: 'Is less reliable than a yes or no question.', correct: false },
        { option: 'Is open-ended and expands your thinking', correct: true },
        { option: ' Calls for a one-word response.', correct: false }
      ]
    },
    {
      question: 'A group of students is trying to find a creative way to solve a problem. Which student is asking the most imaginative question?',
      answer: [
        { option: ' Laurel wants to know which books will give them answers', correct: false },
        { option: 'Henry is curious about which rules can be broken.', correct: false },
        { option: 'Dolores is brainstorming a list of whom they can ask for help.', correct: true },
        { option: 'Stevie is ready to give up', correct: false }
      ]
    },
    {
      question: 'If a plane crashes on the border of Germany and Poland, where do you bury the survivors.',
      answer: [
        { option: 'Germany', correct: false },
        { option: 'Poland', correct: false },
        { option: 'You dont', correct: false },
        { option: 'There is no German poland border.', correct: true },
      ]
    },
       {
      question: 'How many birthdays does the average man have?',
      answer: [
        { option: '10', correct: false },
        { option: '2', correct: false },
        { option: '34', correct: false },
        { option: '1', correct: true },
      ]
    },
       {
      question: 'A directive is also a/an?',
      answer: [
        { option: 'Interrogative', correct: false },
        { option: 'Imperative', correct: false },
        { option: 'Declarative', correct: false },
        { option: 'Emotive expression', correct: true },
      ]
    }
]

  getTheQuestions(){
    return this.questions;
  }
}
