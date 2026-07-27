import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogPost } from '../../models/blog-post.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent {
  post: BlogPost | undefined;
  notFound = false;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.post = this.blogService.getBySlug(slug);
    this.notFound = !this.post;
  }
}
