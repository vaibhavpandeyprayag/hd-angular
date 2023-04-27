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
  onUpdate = false;
  updateIndex = -1;

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

  valuesList: any = []

  save() {
    if (this.onUpdate === false) {
      this.submitted = true;
      this.toastr.success("Your form got submitted successfuly.", "Message");
      this.valuesList.push({...this.educationalDetailsInput, id: (this.valuesList.length === 0) ? 0 : this.valuesList[this.valuesList.length - 1].id + 1});
      
      window.localStorage.setItem("formTableList", JSON.stringify(this.valuesList));
      let savedList = JSON.parse(window.localStorage.getItem("formTableList") as string);
      console.log(savedList);
    }
    else {
      let savedList = JSON.parse(window.localStorage.getItem("formTableList") as string);
      savedList[this.updateIndex] = {...this.educationalDetailsInput, id: savedList[this.updateIndex].id}
      this.valuesList = savedList;
      window.localStorage.setItem("formTableList", JSON.stringify(this.valuesList));
      this.updateIndex = -1;
      this.onUpdate = false;
    }
    (document.querySelector("#resetButton") as HTMLButtonElement).click();
    this.submitted = true;
  }

  edit(id: any) {
    let idx = -1;
    for (let i = 0; i < this.valuesList.length; i++) {
      let item = this.valuesList[i];
      if (item.id === id) {
        idx = i;
        break;
      }
    }
    this.updateIndex = idx;
    this.onUpdate = true;
    let savedList = JSON.parse(window.localStorage.getItem("formTableList") as string);
      let updateItem = savedList[this.updateIndex];
      this.educationalDetailsInput.highSchoolBoard = updateItem.highSchoolBoard;
      this.educationalDetailsInput.highSchoolSchool = updateItem.highSchoolSchool;
      this.educationalDetailsInput.highSchoolPercentage = updateItem.highSchoolPercentage;
      this.educationalDetailsInput.intermediateBoard = updateItem.intermediateBoard;
      this.educationalDetailsInput.intermediateSchool = updateItem.intermediateSchool;
      this.educationalDetailsInput.intermediatePercentage = updateItem.intermediatePercentage;
      this.educationalDetailsInput.universityName = updateItem.universityName;
      this.educationalDetailsInput.graduationCourse = updateItem.graduationCourse;
      this.educationalDetailsInput.graduationBranch = updateItem.graduationBranch;
      this.educationalDetailsInput.graduationPercentage = updateItem.graduationPercentage;    
  }
  remove(id: any) {
    let idx = -1;
    for (let i = 0; i < this.valuesList.length; i++) {
      let item = this.valuesList[i];
      if (item.id === id) {
        idx = i;
        break;
      }
    }

    this.toastr.show("Entry deleted.", "Message");
    this.valuesList.splice(idx, 1);
    
    window.localStorage.setItem("formTableList", JSON.stringify(this.valuesList));
    let savedList = JSON.parse(window.localStorage.getItem("formTableList") as string);
    console.log(savedList);

    if (this.valuesList.length === 0) this.submitted = false;
  }
}
