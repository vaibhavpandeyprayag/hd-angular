import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { registrationData } from '../user-data';

@Component({
  selector: 'app-educational-details-input',
  templateUrl: './educational-details-input.component.html',
  styleUrls: ['./educational-details-input.component.css']
})
export class EducationalDetailsInputComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
          let savedValues = localStorage.getItem("educationaldetailsregister");
          if (savedValues !== null) {
            let json = JSON.parse(savedValues);
            this.educationalDetailsInput.highSchoolBoard = json.highSchoolBoard;
            this.educationalDetailsInput.highSchoolSchool = json.highSchoolSchool;
            this.educationalDetailsInput.highSchoolPercentage = json.highSchoolPercentage;
            this.educationalDetailsInput.intermediateBoard = json.intermediateBoard;
            this.educationalDetailsInput.intermediateSchool = json.intermediateSchool;
            this.educationalDetailsInput.intermediatePercentage = json.intermediatePercentage;
            this.educationalDetailsInput.universityName = json.universityName;
            this.educationalDetailsInput.graduationCourse = json.graduationCourse;
            this.educationalDetailsInput.graduationBranch = json.graduationBranch;
            this.educationalDetailsInput.graduationPercentage = json.graduationPercentage;
          } 
      }
    });
  }



  educationalDetailsInput = {
    highSchoolBoard: "",
    highSchoolSchool: "",
    highSchoolPercentage: null,
    intermediateBoard: "",
    intermediateSchool: "",
    intermediatePercentage: null,
    universityName: "",
    graduationCourse: "",
    graduationBranch: "",
    graduationPercentage: null
  }

  submit() {
    registrationData.highSchoolBoard = this.educationalDetailsInput.highSchoolBoard;
    registrationData.highSchoolSchool = this.educationalDetailsInput.highSchoolSchool;
    registrationData.highSchoolPercentage = this.educationalDetailsInput.highSchoolPercentage;
    registrationData.intermediateBoard = this.educationalDetailsInput.intermediateBoard;
    registrationData.intermediateSchool = this.educationalDetailsInput.intermediateSchool;
    registrationData.intermediatePercentage = this.educationalDetailsInput.intermediatePercentage;
    registrationData.universityName = this.educationalDetailsInput.universityName;
    registrationData.graduationCourse = this.educationalDetailsInput.graduationCourse;
    registrationData.graduationBranch = this.educationalDetailsInput.graduationBranch;
    registrationData.graduationPercentage = this.educationalDetailsInput.graduationPercentage;

    let values = { highSchoolBoard: registrationData.highSchoolBoard,
                    highSchoolSchool: registrationData.highSchoolSchool,
                    highSchoolPercentage: registrationData.highSchoolPercentage,
                    intermediateBoard: registrationData.intermediateBoard,
                    intermediateSchool: registrationData.intermediateSchool,
                    intermediatePercentage: registrationData.intermediatePercentage,
                    universityName: registrationData.universityName,
                    graduationCourse: registrationData.graduationCourse,
                    graduationBranch: registrationData.graduationBranch,
                    graduationPercentage: registrationData.graduationPercentage };
    window.localStorage.setItem("educationaldetailsregister", JSON.stringify(values));
  }

  back() {
    this.submit();
    this.router.navigate(["/personaldetailsregister"]);
  }

  next() {
    this.submit();
    this.router.navigate(["/agreementregister"]);
  }
}
