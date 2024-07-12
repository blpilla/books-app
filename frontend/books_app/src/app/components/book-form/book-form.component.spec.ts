import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class BookFormComponent implements OnInit {
  book: any = {};
  isEditMode = false;

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
      });
    }
  }

  saveBook(): void {
    if (this.isEditMode) {
      this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService.createBook(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }
}
