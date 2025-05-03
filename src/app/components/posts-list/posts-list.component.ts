import { Component, Input } from '@angular/core';
import { Posts } from '../../../assets/post';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  @Input() posts: Posts[] = [];
}
