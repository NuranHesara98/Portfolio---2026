import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactInfo } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo: ContactInfo = {
    email: 'nuranhesara321@gmail.com',
    github: 'https://github.com/NuranHesara98',
    linkedin: 'https://www.linkedin.com/in/nuran-chandrasekara/',
    twitter: 'https://twitter.com/yourusername',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  formSubmitted = false;
  isSubmitting = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.formSubmitted = true;
        
        // Reset form after 3 seconds
        setTimeout(() => {
          this.formSubmitted = false;
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
        }, 3000);
      }, 1500);
    }
  }

  copyEmail() {
    navigator.clipboard.writeText(this.contactInfo.email);
    alert('Email copied to clipboard!');
  }
}
