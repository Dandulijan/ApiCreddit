import { Component, Input } from '@angular/core';
import { Posts } from '../../../assets/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  @Input() post!: Posts;
}
