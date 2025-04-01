import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];
  isLoading = true;
  error = '';

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.loadEducation();
  }

  loadEducation(): void {
    this.isLoading = true;
    this.resumeService.getEducation().subscribe({
      next: (education: Education[]) => {
        this.educationList = education;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load education data. Please try again later.';
        this.isLoading = false;
        console.error('Error loading education:', err);
      }
    });
  }
}
