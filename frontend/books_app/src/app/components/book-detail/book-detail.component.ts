import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(Number(id)).subscribe(data => {
      this.book = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }
}
