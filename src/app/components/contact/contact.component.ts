import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactInfo } from '../../models/portfolio.models';
import emailjs from '@emailjs/browser';

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
    twitter: 'https://x.com/NuranHesara',
    phone: '+94 76 548 2770',
    location: 'Chilaw, Sri Lanka'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  formSubmitted = false;
  isSubmitting = false;

  // EmailJS Configuration - UPDATE THESE WITH YOUR ACTUAL IDS FROM https://dashboard.emailjs.com
  private SERVICE_ID = 'service_6ushsum';  // From Email Services
  private TEMPLATE_ID = 'template_dptugn9';  // From Email Templates - UPDATE THIS!
  private PUBLIC_KEY = 'hcQgBxIkY9R2DA4xc';  // From Account > General

  constructor() {
    // Initialize EmailJS with public key
    emailjs.init(this.PUBLIC_KEY);
  }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitting = true;
      
      // Send email using EmailJS
      emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject || 'Portfolio Contact Form',
          message: this.formData.message
        },
        this.PUBLIC_KEY
      ).then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
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
        },
        (error) => {
          console.error('Failed to send email:', error);
          console.error('Error details:', JSON.stringify(error));
          this.isSubmitting = false;
          let errorMessage = 'Failed to send message. ';
          if (error.text) {
            errorMessage += 'Error: ' + error.text + '. ';
          }
          errorMessage += 'Please try again or email me directly at ' + this.contactInfo.email;
          alert(errorMessage);
        }
      );
    }
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.contactInfo.email).then(
      () => alert('Email copied to clipboard!'),
      () => alert('Failed to copy email')
    );
  }
}
