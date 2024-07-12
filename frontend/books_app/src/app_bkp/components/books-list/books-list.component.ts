import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class BooksListComponent implements OnInit {
  books: any[] = [];
  titleFilter: string = '';
  authorFilter: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  perPage: number = 10;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(page: number = 1): void {
    this.bookService.getBooks(page, this.perPage, this.titleFilter, this.authorFilter).subscribe((data: any) => {
      this.books = data.data;
      this.currentPage = data.current_page;
      this.totalPages = data.last_page;
    });
  }

  applyFilters(): void {
    this.loadBooks();
  }

  viewBook(id: number): void {
    this.router.navigate(['/books', id]);
  }

  editBook(id: number): void {
    this.router.navigate(['/books/edit', id]);
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks(this.currentPage);
    });
  }

  addBook(): void {
    this.router.navigate(['/books/new']);
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.loadBooks(page);
    }
  }
}
