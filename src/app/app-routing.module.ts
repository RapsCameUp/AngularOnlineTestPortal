import { NumericalTestStartComponent } from './numerical-test-start/numerical-test-start.component';
import { CriticalThinkingComponent } from './critical-thinking/critical-thinking.component';
import { TestscoresComponent } from './testscores/testscores.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NumericalReasoningComponent } from './numerical-reasoning/numerical-reasoning.component';
import { CriticalTestStartComponent } from './critical-test-start/critical-test-start.component';

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'logout', component:LogoutComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'about', component:AboutComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'assessments', component:AssessmentsComponent}, 
    {path: 'testscores', component:TestscoresComponent},
    {path: 'numerical-reasoning', component:NumericalReasoningComponent},
    {path: 'CriticalThinking', component:CriticalThinkingComponent},
    {path: 'NumericalTestStart', component:NumericalTestStartComponent},
    {path: 'CriticalTestStart', component:CriticalTestStartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
