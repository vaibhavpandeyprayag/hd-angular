import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { registrationData } from '../user-data';

@Component({
  selector: 'app-personal-details-input',
  templateUrl: './personal-details-input.component.html',
  styleUrls: ['./personal-details-input.component.css']
})
export class PersonalDetailsInputComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
          let savedValues = localStorage.getItem("personaldetailsregister");
          if (savedValues !== null) {
            let json = JSON.parse(savedValues);
            this.personalDetailsInput.firstName = json.firstName;
            this.personalDetailsInput.lastName = json.lastName;
            this.personalDetailsInput.dob = json.dob;
            this.personalDetailsInput.gender = json.gender;
            this.personalDetailsInput.contact = json.contact;
            this.personalDetailsInput.country = json.country;
          } 
      }
    });
  }

  defaultMessage: string = "Message."
  firstNameMessage: string = "First name is required.";
  lastNameMessage: string = "Last name is required.";
  emailRequiredMessage: string = "Email is required.";
  emailInvalidMessage: string = "Enter valid email."
  passwordRequiredMessage: string = "Password is required."
  passwordShortLengthMessage: string = "Password must have minimum 8 characters."
  dobRequiredMessage: string = "Date of Birth is required."
  genderRequiredMessage: string = "Gender is required."
  countryRequiredMessage: string = "Country is required."

  personalDetailsInput = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contact: null,
    country: "",
  }
  
  submit() {
    registrationData.firstName = this.personalDetailsInput.firstName;
    registrationData.lastName = this.personalDetailsInput.lastName;
    registrationData.dob = this.personalDetailsInput.dob;
    registrationData.gender = this.personalDetailsInput.gender;
    registrationData.contact = this.personalDetailsInput.contact;
    registrationData.country = this.personalDetailsInput.country;
    let values = { firstName: registrationData.firstName, lastName: registrationData.lastName, dob: registrationData.dob, gender: registrationData.gender, contact: registrationData.contact, country: registrationData.country };
    window.localStorage.setItem("personaldetailsregister", JSON.stringify(values));
  }
  back() {
    this.submit();
    this.router.navigate(["/emailregister"]);
  }
  next() {
    this.submit();
    this.router.navigate(["/educationaldetailsregister"]);
  }
}
