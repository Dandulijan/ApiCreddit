import { Component, effect, inject, signal } from '@angular/core';
import { Posts } from '../../../assets/post';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../../shared/services/posts/posts.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent {
  Posts$ = signal<Posts | undefined>(undefined);
  private _postService = inject(PostsService);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private https: HttpClient
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (!id) {
      console.error('No ID found in route parameters');
      return;
    } else {
      effect(() => {
        this._postService.getPostsbyID(id).subscribe({
          next: (response: Posts) => {
            console.log('Post fetched:', response);
            this.Posts$.set(response);
          },
          error: (err) => {
            console.error('Error fetching pet:', err);
          },
        });
      });
    }
  }

  deletePost(id: string) {
    this._postService.deletePost(id).subscribe({
      next: () => {
        console.log('Post deleted successfully');
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        console.error('Error deleting post:', err);
      },
    });
  }
}
