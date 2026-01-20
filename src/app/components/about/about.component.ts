import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutTitle = 'About Me';
  introduction = `I'm a passionate developer who loves creating elegant solutions to complex problems. 
    With a strong foundation in both frontend and backend technologies, I bring ideas to life through code.`;
  
  whatIDo = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Creating responsive and dynamic web applications using modern frameworks and best practices.'
    },
    {
      icon: '⚛️',
      title: 'Frontend Development',
      description: 'Building modern, responsive user interfaces with React, Angular, and cutting-edge frontend technologies.'
    },
    {
      icon: '🔧',
      title: 'Backend Development',
      description: 'Building scalable server-side applications and RESTful APIs with robust architectures.'
    },
    {
      icon: '📱',
      title: 'ERP System Design',
      description: 'Designing ERP systems that integrate core business functions, centralize data, and improve overall operational efficiency across the organization.'
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'Deploying and managing applications on cloud platforms to ensure scalability and reliability.'
    },
    {
      icon: '🛠️',
      title: 'DevOps',
      description: 'Implementing CI/CD pipelines, automating deployments, and monitoring system performance to ensure smooth operations.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that provide excellent user experiences.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to deliver high-quality software solutions.'
    }
  ];

  interests = [
    'Problem Solving',
    'Clean Code',
    'Learning New Technologies',
    'Open Source Contribution',
    'Continuous Improvement',
    'Tech Blogging'
    
  ];
}
