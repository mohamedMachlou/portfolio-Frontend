import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devops_Other } from '../../../models/Devops_other';

@Injectable({
  providedIn: 'root'
})
export class DevopsService {

   http = inject(HttpClient)
  devopsUrl = 'http://localhost:3000/machloudevops'

  // Get All Devops & Others
  getAllDevops():Observable<Devops_Other[]> {
    return this.http.get<Devops_Other[]>(`${this.devopsUrl}`)

  }
  
}
