import { CriticaltestService } from './../services/criticaltest.service';
import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../models/IQuestion';

@Component({
  selector: 'app-critical-test-start',
  templateUrl: './critical-test-start.component.html',
  styleUrls: ['./critical-test-start.component.css']
})
export class CriticalTestStartComponent implements OnInit {
  questions: IQuestion[] = [];
  prev: number[]= [];
  currentQuestion:number = 0;
  correctAns = 0;
  incorrectAns = 0;

  constructor(private serv: CriticaltestService) { }

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
