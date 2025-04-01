import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsList: Project[] = [];
  isLoading = true;
  error = '';

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.isLoading = true;
    this.resumeService.getProjects().subscribe({
      next: (projects) => {
        this.projectsList = projects;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load projects data. Please try again later.';
        this.isLoading = false;
        console.error('Error loading projects:', err);
      }
    });
  }
}
