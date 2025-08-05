import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programming_Languages } from '../../../models/programming_languages';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageService {

  http = inject(HttpClient)
  progLangUrl = 'http://localhost:3000/machlouprogramming_language'

  // Get All Progamming Languages 
  getAllProgLanguages():Observable<Programming_Languages[]> {
    return this.http.get<Programming_Languages[]>(`${this.progLangUrl}`)

  }


}
