import { Component } from '@angular/core';

@Component({
  selector: 'app-file-read',
  templateUrl: './file-read.component.html',
  styleUrls: ['./file-read.component.css']
})
export class FileReadComponent {
  constructor () {}
  selectedFile: any;
  fileFullName: string = "";
  fileType: string = "";
  fileContent: string = "";
  handleFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
    
    if (this.selectedFile) {
      this.fileFullName = this.selectedFile.name;  
      let fileTypeValue = this.selectedFile.type;      

      if (fileTypeValue.includes('pdf')) {
        this.fileType = 'pdf';
        console.log("pdf file found.");
        this.readAsPDF();
      } else if (fileTypeValue.includes('document')) {
        this.fileType = 'docx';
        console.log("docx file found.");
        this.readAsDocument();
      } else if (fileTypeValue.includes('text')) {
        this.fileType = 'txt';
        console.log("txt file found.");
        this.readAsText();
      } else {
        this.fileType = 'unknown';
        console.log("unknown file type found.")
      }   
    }
  }

  readAsText() {
    const reader = new FileReader();
    reader.onload = this.handleTextFileLoad;
    reader.readAsText(this.selectedFile as File);
  }
  handleTextFileLoad(event: any) {
    this.fileContent = event.target.result;
    const fileContentElement = document.getElementById('fileContent') as HTMLTextAreaElement;
    fileContentElement.value = this.fileContent;
    console.log(this.fileContent);    
  }

  readAsPDF() {
  }

  readAsDocument() {

  }

}
