import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsList: Skill[] = [];
  skillCategories: string[] = [];
  isLoading = true;
  error = '';

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.isLoading = true;
    this.resumeService.getSkills().subscribe({
      next: (skills: Skill[]) => {
        this.skillsList = skills;
        // Extract unique categories
        this.skillCategories = [...new Set(skills.map((skill: Skill) => skill.category))];
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load skills data. Please try again later.';
        this.isLoading = false;
        console.error('Error loading skills:', err);
      }
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skillsList.filter(skill => skill.category === category);
  }
}
