import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Dress Me Mobile App',
      description: 'A Full-Stack mobile app that uses AI to generate custom clothing designs, suggest outfits from photos, and recommend colors based on skin tone. Designed to be simple, stylish, and personalized.',
      image: 'https://nuran-chandrasekara.vercel.app/assets/img/masonry-portfolio/Dress%20Me.png',
      technologies: ['Flutter', 'Express.js', 'MongoDB', 'AWS'],
      liveUrl: 'https://marcketing-web.vercel.app/',
      githubUrl: 'https://github.com/NuranHesara98/Fashion_Design_App',
      featured: true
    },
    {
      id: 2,
      name: 'Movie Explorer Web App',
      description: 'A web application that allows users to explore movies, view details, and search for their favorite films.',
      image: 'assets/projects/movie.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TMDb API',],
      liveUrl: 'https://movie-explorer-brown-three.vercel.app/',
      githubUrl: 'https://github.com/NuranHesara98/movie-explorer',
      featured: true
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      description: 'This weather app shows real-time temperature, humidity, and wind speed with a simple, user-friendly design, allowing users to search weather details by city.',
      image: 'assets/projects/weather.png',
      technologies: ['HTML', 'CSS', 'Openweather API'],
      liveUrl: 'https://weather-website-zeta-sandy.vercel.app/',
      githubUrl: 'https://github.com/NuranHesara98/Weather-Website',
      featured: false
    },
    
    {
      id: 5,
      name: 'Stay-Mate House Details Platform',
      description: 'A property rental website built with React, HTML, CSS, and JavaScript, featuring a user-friendly interface, advanced property search, Google Maps integration, and a favorites option.',
      image: 'assets/projects/stay.jpg',
      technologies: ['React', 'JavaScript', 'HTML','Tailwind CSS'],
      liveUrl: 'https://nuranhesara98.github.io/StayMate/',
      githubUrl: 'https://github.com/NuranHesara98/StayMate',
      featured: false
    },
    {
      id: 5,
      name: 'Note keeper App',
      description: 'Note Keeper is a simple text editor built with Java Swing, offering essential functionalities for creating, editing, and formatting text files. Key features include creating, opening, and saving files, as well as text editing and formatting options.',
      image: 'assets/projects/notepad.png',
      technologies: ['JAVA'],
      
      githubUrl: 'https://github.com/NuranHesara98/Note-keeper',
      featured: false
    },
    {
      id: 6,
      name: 'Cinema Seat Booking System',
      description: 'The Cinema Management Program is a Java application designed for managing cinema seat bookings. It allows users to buy and cancel tickets, search for tickets, view seating plans, and sort ticket information by price.',
      image: 'assets/projects/cinema.png',
      technologies: ['JAVA'],
      
      githubUrl: 'https://github.com/NuranHesara98/Cinema-seat-booking-system',
      featured: false
    }
  ];

  selectedFilter: string = 'all';

  get filteredProjects() {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.featured);
  }

  filterProjects(filter: string) {
    this.selectedFilter = filter;
  }
}
