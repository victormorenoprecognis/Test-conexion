import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://miton.precognis.com/openbravo/wsprjson/';

  constructor(private http: HttpClient) { }

  public getUserDetails(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // Otros encabezados pueden ser añadidos aquí si son necesarios
    });

    /*const url = `${this.baseUrl}ADUser?_where=username='${username}'&_selectedProperties=id,username&l=${username}&p=${password}`;*/
    const url = `https://miton.precognis.com/openbravo/wsprjson/ADUser?_where=username='Openbravo'&_selectedProperties=id,username&l=Openbravo&p=pr3$MIT23`;
    console.log(url);
    return this.http.get(url, { headers: headers });
  }
}
