import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetallesService {
  loading = false;

  constructor(private http: HttpClient) {}

  obtenerProducto(id: number): Observable<any> {
    return this.http.get('https://yondris.com/producto/' + id).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  guardarFormulario(data: any): Observable<any> {
    return this.http.post('https://yondris.com/producto/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
