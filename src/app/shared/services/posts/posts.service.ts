import { Injectable } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { catchError, Observable, of } from 'rxjs';
import { Posts } from '../../../../assets/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends ModalService {
  private apiUrl = 'http://localhost:5001/posts';

  getPosts(): Observable<Posts[]> {
    return this.get<Posts[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error in PostsService:', error);
        throw of([]);
      })
    );
  }
  getPostsbyID(id: string): Observable<Posts> {
    return this.get<Posts>(this.apiUrl + `/${id}`).pipe(
      catchError((error) => {
        console.error(`{ message: "Post with ID ${id} not found" }`, error);
        throw of();
      })
    );
  }
  deletePost(id: string) {
    return this.delete<Posts>(this.apiUrl + `/${id}`).pipe(
      catchError((error) => {
        console.error(`Error deleting post with ID ${id}:`, error);
        throw of();
      })
    );
  }

  loadPosts() {}

  createPost(post: Posts) {
    this.post<Posts>(this.apiUrl, post).subscribe(() => {
      this.loadPosts();
    });
  }
}
