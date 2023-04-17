import { Component } from '@angular/core';
import { registrationData } from '../user-data';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
          let savedValues = localStorage.getItem("emailregister");
          if (savedValues !== null) {
            let json = JSON.parse(savedValues);
            this.emailInput.email = json.email;
            this.emailInput.password = json.password;
          } 
      }
    });
  }

  defaultMessage: string = "Message.";
  emailRequiredMessage: string = "Email is required.";
  emailInvalidMessage: string = "Enter valid email.";
  passwordRequiredMessage: string = "Password is required.";
  passwordShortLengthMessage: string = "Password must have minimum 8 characters.";

  emailInput = {
    email: "",
    password: "",
  }

  submit() {
    registrationData.email = this.emailInput.email;
    registrationData.password = this.emailInput.password;
    let values = { email: registrationData.email, password: registrationData.password };
    window.localStorage.setItem("emailregister", JSON.stringify(values));
    
  }
  next() {
    this.submit();
    this.router.navigate(["/personaldetailsregister"]);
  }
}
