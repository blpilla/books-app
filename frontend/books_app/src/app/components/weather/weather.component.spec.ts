import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherComponent } from './weather.component';
import { WeatherService } from '../../services/weather.service';

describe('WeatherComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        WeatherComponent // Importando o componente standalone
      ],
      providers: [WeatherService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
