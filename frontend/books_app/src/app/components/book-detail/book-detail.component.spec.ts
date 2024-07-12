import { TestBed } from '@angular/core/testing';
import { BookDetailComponent } from './book-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from '../../services/book.service';

describe('BookDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookService,
        { provide: ActivatedRoute, useValue: { params: of({ id: 'test-id' }) } }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookDetailComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
