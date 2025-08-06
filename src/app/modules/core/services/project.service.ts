import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  http = inject(HttpClient)
  projectUrl = 'http://localhost:3000/machlouproject'


  // Get All Projects
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.projectUrl}`)

  }





  
}
 