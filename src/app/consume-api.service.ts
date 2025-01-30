import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumeApiService {
  private apiUrl = 'http://localhost/ApiProductosPhpJson/api.php'; // URL de tu API en XAMPP

  constructor(private http: HttpClient) {}

  getProductoAleatorio(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
