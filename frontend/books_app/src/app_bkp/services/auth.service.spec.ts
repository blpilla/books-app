import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login API', () => {
    const dummyResponse = { token: '123' };
    service.login('test@test.com', 'password').subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });
    const req = httpMock.expectOne(`${service['apiUrl']}/auth/login`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
