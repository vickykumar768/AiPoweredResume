import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
   private apiUrl = 'https://gw.magicalapi.com'; // Example endpoint, check your docs

  constructor(private http: HttpClient) { }

  checkAtsScore(file: File, accessKey: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    // Replace 'X-API-KEY' with the correct header key if needed
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessKey}`
    });

    return this.http.post<any>(this.apiUrl, formData, { headers });
  }
}
