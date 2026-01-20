import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../models/portfolio.models';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: Blog[] = [
    {
      id: 1,
      title: 'Node.js',
      description: 'Node.js is a powerful JavaScript runtime built on Chrome\'s V8 engine that allows developers to build scalable server-side applications using JavaScript. It is known for its event-driven, non-blocking I/O model, making it efficient and suitable for real-time applications.',
      image: 'assets/blogs/node.png',
      url: 'https://medium.com/@nuranchandrasekara/node-js-4cbaa293e704',
      publishDate: '2025-04-11',
      tags: ['Node.js', 'JavaScript', 'Best Practices']
    },
    {
      id: 2,
      title: 'JAVA',
      description: 'Java is a versatile and widely-used programming language known for its portability, performance, and robustness. It follows the "write once, run anywhere" principle, allowing developers to create applications that can run on any platform with a Java Virtual Machine (JVM). Java is commonly used for building enterprise-level applications, mobile apps (Android), and large-scale systems.',
      image: 'assets/blogs/java.png',
      url: 'https://medium.com/@nuranchandrasekara/java-017e68db336e',
      publishDate: '2024-12-30',
      tags: ['Java', 'Programming', 'Enterprise']
    },
    {
      id: 3,
      title: 'GIT',
      description: 'Git is a distributed version control system that enables developers to track changes in their codebase, collaborate with others, and manage different versions of their projects efficiently. It allows multiple developers to work on the same code simultaneously, providing features like branching, merging, and conflict resolution to streamline the development process.',
      image: 'assets/blogs/git.png',
      url: 'https://medium.com/@nuranchandrasekara/git-799e0648f47e',
      publishDate: '2024-08-02',
      tags: ['Git', 'Version Control', 'Collaboration']
    },
    {
      id: 4,
      title: 'SQL',
      description: 'SQl (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. It provides a set of commands and syntax to perform various operations such as querying data, inserting, updating, and deleting records, as well as creating and modifying database structures.',
      image: 'assets/blogs/sql.png',
      url: 'https://medium.com/@nuranchandrasekara/sql-6a4beb09fb28',
      publishDate: '2024-08-01',
      tags: ['SQL', 'Databases', 'Query Language']
    },
    {
      id: 5,
      title: 'Basic Web Development Languages',
      description: 'An introduction to the fundamental languages used in web development, including HTML, CSS, and JavaScript.',
      image: 'assets/blogs/webdev.png',
      url: 'https://nuranchandrasekara.medium.com/basic-web-development-lang-f762fecf1fb7',
      publishDate: '2024-07-31',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 6,
      title: 'IT Related Technical Terms Simplified',
      description: 'A blog post that breaks down complex IT terms into simple explanations for better understanding.',
      image: 'assets/blogs/itterms.png',
      url: 'https://nuranchandrasekara.medium.com/it-related-technical-terms-simplified-525220afdaf6',
      publishDate: '2024-06-22',
      tags: ['IT-Terms', 'Programming', 'Best Practices']
    }
  ];

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
