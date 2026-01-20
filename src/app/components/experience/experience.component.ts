import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: 1,
      type: 'work',
      title: 'Software Engineer Intern',
      organization: 'Yoors Digital pvt Ltd',
      location: 'Sri Lanka, Colombo',
      startDate: '2025-06',
      endDate: '2026-06',
      description: 'Developed and maintained ERP application using ELO & M-files and also involved in full-stack development using Angular and Node.js.',
      achievements: [
        'Successfully Achieved 2 M-Files certifications',
        'Implemented Angular and paperless solutions',
        'Reduced deployment time by 60%'
      ]
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Westminster',
      location: 'Sri Lanka (IIT)',
      startDate: '2023-01',
      endDate: '2027-09',
      description: 'Graduated with honors. Focus on software engineering and web,mobile & Ai technologies.',
      achievements: [
        'Curretly Studing in 3rd year',
        'Maintained average 60% for all the years',
        'Led university coding club',
        'Participating in hackathons and coding competitions'
      ]
    }
  ];

  get workExperience() {
    return this.experiences.filter(e => e.type === 'work');
  }

  get education() {
    return this.experiences.filter(e => e.type === 'education');
  }

  formatDate(dateString: string): string {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  }
}
