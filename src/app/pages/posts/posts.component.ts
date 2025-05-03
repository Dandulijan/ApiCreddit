import { Component, effect, signal } from '@angular/core';
import { Posts } from '../../../assets/post';
import { PostsService } from '../../shared/services/posts/posts.service';
import { HttpClient } from '@angular/common/http';
import { PostsListComponent } from '../../components/posts-list/posts-list.component';
import { HeaderComponent } from '../../components/header/header.component';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostsListComponent, HeaderComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  query = '';

  Posts$ = signal<Posts[]>([]);
  error: string | null = null; // Property to store error messages

  constructor(private posts: PostsService, http: HttpClient) {
    effect(() => {
      this.posts.getPosts().subscribe((response) => {
        console.log(response); // log the response
        this.Posts$.set(response); // ✅ Update signal
      });
    });
  }
  setQuery(query: string) {
    this.query = query;
  }

  get filteredPosts() {
    return this.Posts$().filter((p: { title: string }) =>
      p.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
