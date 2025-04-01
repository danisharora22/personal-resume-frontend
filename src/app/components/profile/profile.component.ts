import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile | null = null;
  isLoading = true;
  error = '';

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.isLoading = true;
    this.resumeService.getProfile().subscribe({
      next: (profiles) => {
        this.profile = profiles.length > 0 ? profiles[0] : null;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load profile data. Please try again later.';
        this.isLoading = false;
        console.error('Error loading profile:', err);
      }
    });
  }
}
