import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceList: Experience[] = [];
  isLoading = true;
  error = '';

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.loadExperience();
  }

  loadExperience(): void {
    this.isLoading = true;
    this.resumeService.getExperiences().subscribe({
      next: (experiences: Experience[]) => {
        this.experienceList = experiences;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load experience data. Please try again later.';
        this.isLoading = false;
        console.error('Error loading experience:', err);
      }
    });
  }
}
