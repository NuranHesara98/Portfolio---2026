import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    // Programming Languages
    { name: 'HTML', category: 'language', proficiency: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', category: 'language', proficiency: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', category: 'language', proficiency: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', category: 'language', proficiency: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', category: 'language', proficiency: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Java', category: 'language', proficiency: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', category: 'language', proficiency: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'PHP', category: 'language', proficiency: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Java Swing', category: 'language', proficiency: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C#', category: 'language', proficiency: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Python', category: 'language', proficiency: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Flutter', category: 'language', proficiency: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    
    // Tools
    { name: 'VS Code', category: 'tool', proficiency: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'IntelliJ IDEA', category: 'tool', proficiency: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    { name: 'NetBeans', category: 'tool', proficiency: 75, icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg' },
    { name: 'GitHub', category: 'tool', proficiency: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Git', category: 'tool', proficiency: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Postman', category: 'tool', proficiency: 85, icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Figma', category: 'tool', proficiency: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'MongoDB', category: 'tool', proficiency: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'M-Files', category: 'tool', proficiency: 75, icon: 'https://play-lh.googleusercontent.com/JLJT2Tm8vle-QmALnAFW67czyJkOS8lxZFBpSjjVtzOFrVDpSPWY3Hy6lAxcYML0QPs=w480-h960-rw' },
    { name: 'ELO Digital Office', category: 'tool', proficiency: 75, icon: 'https://www.comex.eu/wp-content/uploads/2023/08/image008.png.webp' },
    
    // DevOps and Cloud
    { name: 'Docker', category: 'devops', proficiency: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', category: 'devops', proficiency: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Azure', category: 'devops', proficiency: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'GitHub Actions', category: 'devops', proficiency: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    
    
    // Soft Skills
    { name: 'Creativity', category: 'soft-skill', proficiency: 90, icon: 'https://img.icons8.com/fluency/96/idea.png' },
    { name: 'Communication', category: 'soft-skill', proficiency: 85, icon: 'https://img.icons8.com/fluency/96/communication.png' },
    { name: 'Problem Solving', category: 'soft-skill', proficiency: 90, icon: 'https://img.icons8.com/fluency/96/puzzle.png' },
    { name: 'Teamwork', category: 'soft-skill', proficiency: 85, icon: 'https://img.icons8.com/fluency/96/teamwork.png' },
    { name: 'Leadership', category: 'soft-skill', proficiency: 80, icon: 'data:image/png;base64,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' },
  ];

  get languages() {
    return this.skills.filter(s => s.category === 'language');
  }

  get tools() {
    return this.skills.filter(s => s.category === 'tool');
  }

  get devops() {
    return this.skills.filter(s => s.category === 'devops');
  }

  get softSkills() {
    return this.skills.filter(s => s.category === 'soft-skill');
  }
}
