import { Component } from '@angular/core';
import { registrationData } from '../user-data';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent {
  constructor(private toastr: ToastrService) {}
  submitted = false;


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
    this.submitted = true;
    this.toastr.success("Your form got submitted successfuly.", "Message");
  }
  reset() {
    this.submitted = false;
  }
}
