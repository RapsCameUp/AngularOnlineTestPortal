import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AssessmentsComponent } from './assessments/assessments.component';
import { TestscoresComponent } from './testscores/testscores.component';
import { NumericalReasoningComponent } from './numerical-reasoning/numerical-reasoning.component';
import { CriticalThinkingComponent } from './critical-thinking/critical-thinking.component';
import { NumericalTestStartComponent } from './numerical-test-start/numerical-test-start.component';
import { CriticalTestStartComponent } from './critical-test-start/critical-test-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    AssessmentsComponent,
    TestscoresComponent,
    NumericalReasoningComponent,
    CriticalThinkingComponent,
    NumericalTestStartComponent,
    CriticalTestStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
       HttpClientModule,
       ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
