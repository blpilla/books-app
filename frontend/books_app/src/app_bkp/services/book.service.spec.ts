import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getBooks API', () => {
    const dummyBooks = [{ title: 'Book 1' }, { title: 'Book 2' }];
    service.getBooks().subscribe(books => {
      expect(books).toEqual(dummyBooks);
    });
    const req = httpMock.expectOne(`${service['apiUrl']}/books`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyBooks);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
