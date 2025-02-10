import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tareas } from './tareas';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }
  
    private rutaLocal = 'tareas.json';
  
    peticionTareas():Observable<Tareas[]>{
      return this.http.get<Tareas[]>(this.rutaLocal);
    }
}
