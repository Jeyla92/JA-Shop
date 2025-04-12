import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private apiUrl = 'http://localhost:8080'; // Replace with your API URL

    constructor(private http: HttpClient) { }

    // Generic GET request
    getData<T>(endpoint: string): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
    }

    // Generic POST request
    postData<T>(endpoint: string, data: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data);
    }

    // Generic PUT request
    updateData<T>(endpoint: string, data: any): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data);
    }

    // Generic DELETE request
    deleteData<T>(endpoint: string): Observable<T> {
        return this.http.delete<T>(`${this.apiUrl}/${endpoint}`);
    }
}