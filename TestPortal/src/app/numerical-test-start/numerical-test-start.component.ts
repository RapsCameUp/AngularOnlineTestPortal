import { IQuestion } from './../models/IQuestion';
import { Component, OnInit } from '@angular/core';
import { NumericaltestService } from '../services/numericaltest.service';

@Component({
  selector: 'app-numerical-test-start',
  templateUrl: './numerical-test-start.component.html',
  styleUrls: ['./numerical-test-start.component.css']
})
export class NumericalTestStartComponent implements OnInit {

  questions: IQuestion[] = [];
  prev: number[]= [];
  currentQuestion:number = 0;
  correctAns = 0;
  incorrectAns = 0;

  constructor(private serv: NumericaltestService) { }

  ngOnInit(): void {
      this.questions = this.serv.getTheQuestions();
      this.currentQuestion = this.getRandomQ();
      this.prev.push(this.currentQuestion);
  }

    AnalyseAndGetNext(option: boolean){
      setTimeout(() => {
        let NextQ = this.getRandomQ();
         while(this.prev.includes(NextQ) && this.prev.length < 10){
          NextQ = this.getRandomQ();
         }
         this.currentQuestion = NextQ;
          this.prev.push(this.currentQuestion);
      }, 600);
  
      if(option){
        this.correctAns++;
      }else{
        this.incorrectAns++;
      }     
    }
    getRandomQ(){
      return Math.floor(Math.random() * this.questions.length);
    }
}
