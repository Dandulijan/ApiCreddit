import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ModalService } from '../../shared/services/modal/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string>();
  searchQuery = '';

  private modalService = inject(ModalService);

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.search.emit(this.searchQuery);
  }
}
