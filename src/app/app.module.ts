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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { FormTableComponent } from './form-table/form-table.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { JavascriptComponent } from './javascript/javascript.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgTableComponent } from './prime-ng-components/prime-ng-components.component';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { TreeModule } from 'primeng/tree';
import { DragDropModule } from 'primeng/dragdrop';

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
    AddedItemComponent,
    FormTableComponent,
    ReactiveFormComponent,
    CarouselComponent,
    JavascriptComponent,
    PrimeNgTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    TableModule,
    ProgressBarModule,
    ToastModule,
    CheckboxModule,
    RatingModule,
    TreeModule,
    DragDropModule,
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
      {path: 'formtable', component: FormTableComponent},
      {path: 'carousel', component: CarouselComponent},
      {path: 'js', component: JavascriptComponent},
      {path: 'reactiveform', component: ReactiveFormComponent},
      {path: 'primengcomponents', component: PrimeNgTableComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
