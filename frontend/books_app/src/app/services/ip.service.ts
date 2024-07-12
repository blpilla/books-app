import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private ipUrl = 'https://api.ipify.org?format=json';

  constructor(private http: HttpClient) {}

  getIp() {
    return this.http.get<{ ip: string }>(this.ipUrl);
  }
}
