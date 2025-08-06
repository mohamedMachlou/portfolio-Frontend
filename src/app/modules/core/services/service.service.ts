import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Service } from '../../../models/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

http = inject(HttpClient)
serviceUrl = 'http://localhost:3000/machlouservice'

// Get All Services
getAllServices(): Observable<Service[]> {
  return this.http.get<Service[]>(`${this.serviceUrl}`)
}






}
