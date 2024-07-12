import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class BookFormComponent implements OnInit {
  book: any = {
    title: '',
    author: '',
    description: '',
    number_of_pages: 0,
    published_at: ''
  };
  isEditMode = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookService.getBook(Number(id)).subscribe(data => {
        this.book = data;
        this.book.published_at = formatDate(this.book.published_at, 'dd/MM/yyyy HH:mm:ss', 'en-US');
      });
    }
  }

  saveBook(): void {
    if (this.isEditMode) {
      this.bookService.updateBook(this.book.id, this.book).subscribe({
        next: () => this.router.navigate(['/books']),
        error: (error) => this.handleError(error)
      });
    } else {
      this.bookService.createBook(this.book).subscribe({
        next: () => this.router.navigate(['/books']),
        error: (error) => this.handleError(error)
      });
    }
  }

  handleError(error: any): void {
    if (error.status === 422) {
      this.errorMessage = error.error.message;
    } else {
      this.errorMessage = 'Ocorreu um erro inesperado. Por favor, tente novamente.';
    }
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }
}
