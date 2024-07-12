import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { IpService } from '../../services/ip.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  userIp: string = '';

  constructor(private weatherService: WeatherService, private ipService: IpService) {}

  ngOnInit(): void {
    this.ipService.getIp().subscribe((data: any) => {
      this.userIp = data.ip;
      this.weatherService.getWeather(this.userIp).subscribe((weatherData: any) => {
        this.weather = weatherData.results;
      });
    });
  }
}
