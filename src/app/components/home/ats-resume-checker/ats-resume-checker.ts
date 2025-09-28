import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common-service';

@Component({
  selector: 'app-ats-resume-checker',
  standalone: false,
  templateUrl: './ats-resume-checker.html',
  styleUrl: './ats-resume-checker.css'
})
export class AtsResumeChecker {
selectedFile: File | null = null;
  result: any = null;
  accessKey = 'mag_a8076fdee714b47b04f21a6475dabcfc2181917'; // Replace with your API key

  constructor(private atsService: CommonService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submit() {
    if (!this.selectedFile) {
      alert('Please select a resume file first.');
      return;
    }

    this.atsService.checkAtsScore(this.selectedFile, this.accessKey)
      .subscribe(
        res => {
          console.log('ATS Check Result:', res);
          this.result = res; // assumed response contains score and rating properties
        },
        err => {
          console.error('API Error:', err);
          alert('Failed to check score. Please try again.');
        }
      );
  }
}
