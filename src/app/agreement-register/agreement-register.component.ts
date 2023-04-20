import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { registrationData } from '../user-data';

@Component({
  selector: 'app-agreement-register',
  templateUrl: './agreement-register.component.html',
  styleUrls: ['./agreement-register.component.css']
})
export class AgreementRegisterComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        let savedValues = localStorage.getItem("agreementregister");
          if (savedValues !== null) {
            let json = JSON.parse(savedValues);
            this.agreementInput.agreement = json.agreement;
          }
      }
    });
  }
  agreementInput = {
    agreement: false,
  }

  back() {
    window.localStorage.setItem("agreementregister", JSON.stringify({agreement: this.agreementInput.agreement}))
    this.router.navigate(['/educationaldetailsregister']);

  }

  submit() {
    registrationData.agreement = this.agreementInput.agreement;
    window.localStorage.clear();

    this.router.navigate(['/home']);
  }
}
