import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule} from '@angular/forms';
import { EmailInputComponent } from './email-input/email-input.component';
import { PersonalDetailsInputComponent } from './personal-details-input/personal-details-input.component';
import { EducationalDetailsInputComponent } from './educational-details-input/educational-details-input.component';
import { AgreementRegisterComponent } from './agreement-register/agreement-register.component';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { CartComponent } from './cart/cart.component';
import { PurchasePageComponent } from './purchase-page/purchase-page.component';
import { AddedItemComponent } from './added-item/added-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    RegistrationFormComponent,
    EmailInputComponent,
    PersonalDetailsInputComponent,
    EducationalDetailsInputComponent,
    AgreementRegisterComponent,
    HeaderComponent,
    FooterComponent,
    ItemCardComponent,
    CartComponent,
    PurchasePageComponent,
    AddedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'emailregister', component: EmailInputComponent},
      {path: 'personaldetailsregister', component: PersonalDetailsInputComponent},
      {path: 'educationaldetailsregister', component: EducationalDetailsInputComponent},
      {path: 'agreementregister', component: AgreementRegisterComponent},
      {path: 'purchase', component: PurchasePageComponent},
      {path: 'cart', component: CartComponent},
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
