import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../models/portfolio.models';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit, OnDestroy {
  certificates: Certificate[] = [
    {
      id: 1,
      name: 'Problem Solving Certificate',
      issuer: 'HackerRank',
      issueDate: '2024-04',
      credentialUrl: 'https://www.hackerrank.com/certificates/8aab66e53151',
      image: 'assets/certificates/HR PS.jpeg',
      description: 'Certification in problem solving skills, covering algorithms, data structures, and coding challenges.'
    },
    {
      id: 2,
      name: 'Postman Api Fundamentals Certificate',
      issuer: 'Postman',
      issueDate: '2025-02',
      credentialUrl: 'https://badges.parchment.com/public/assertions/EpuJdlPNRB2psg3iyf3ryQ',
      image: 'assets/certificates/postman.png',
      description: 'Certification in API fundamentals, including designing, testing, and documenting APIs using Postman tools.'
    },
    {
      id: 3,
      name: 'Git and GitHub Certificate',
      issuer: 'Udemy',
      issueDate: '2024-09',
      credentialUrl: 'https://www.udemy.com/certificate/UC-50e719da-1185-4874-a6c0-e0f6f1d5869c/',
      image: 'assets/certificates/Udemy git.jpeg',
      description: 'Certification in version control using Git and GitHub, covering essential commands, branching, merging, and collaboration workflows.'
    },
    {
      id: 4,
      name: 'Web Design for beginners',
      issuer: 'University of Moratuwa (UMO)',
      issueDate: '2024-12',
      credentialUrl: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php',
      image: 'assets/certificates/Uom wd.jpeg',
      description: 'Certification in web design principles, HTML, CSS, and responsive design techniques.'
    },
    {
      id: 5,
      name: 'Java Object-Oriented Programming Certificate',
      issuer: 'Linkdin Learning',
      issueDate: '2024-07',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/5f9bc945dbf0fd2736ee4694d64a37fd6997af41280a446f0ec571b3f0fcdeed?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BEztj6EymTb6a6zoHBLEIDA%3D%3D',
      image: 'assets/certificates/linkdin oop.jpeg',
      description: 'Certification in Java programming with a focus on object-oriented design principles and best practices.'
    },
        {
      id: 6,
      name: 'Gen Ai 101',
      issuer: 'pieces .ai',
      issueDate: '2025-02',
      credentialUrl: 'https://badges.parchment.com/public/assertions/UQsUKf-mQxmTM1HwnsuUBw?identity__email=nuranhesara321@gmail.com',
      image: 'assets/certificates/GenAi 101.png',
      description: 'Certification in Generative AI fundamentals, covering key concepts, applications, and ethical considerations in the field of AI.'
    },
        {
      id: 7,
      name: 'M-Files Developer Certification',
      issuer: 'M-Files',
      issueDate: '2025-11',

      image: 'assets/certificates/mfiles developer.png',
      description: 'certification in M-Files development, including customization, integration, and best practices for using the M-Files platform.'
    },
        {
      id: 8,
      name: 'IEE Extreme Hacker Certificate',
      issuer: 'IEEE',
      issueDate: '2023-11',

      image: 'assets/certificates/IEEE h.jpeg',
      description: 'certification in competitive programming and problem-solving skills through participation in the IEE Extreme programming competition.'
    }
  ];

  currentIndex = 0;
  autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
  }

  previous() {
    this.currentIndex = this.currentIndex === 0 
      ? this.certificates.length - 1 
      : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  get currentCertificate() {
    return this.certificates[this.currentIndex];
  }

  formatDate(dateString: string): string {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  }
}
