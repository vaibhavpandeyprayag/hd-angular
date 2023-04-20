import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AgreementRegisterComponent } from './agreement-register/agreement-register.component';
import { ContactComponent } from './contact/contact.component';
import { EducationalDetailsInputComponent } from './educational-details-input/educational-details-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsInputComponent } from './personal-details-input/personal-details-input.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
