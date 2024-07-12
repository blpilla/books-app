import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksListComponent } from './books-list.component';
import { BookService } from '../../services/book.service';

describe('BooksListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BooksListComponent // Importando o componente standalone
      ],
      providers: [BookService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BooksListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
