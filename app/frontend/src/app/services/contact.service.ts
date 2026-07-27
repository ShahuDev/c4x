import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactRequest, ContactResponse } from '../models/contact-request.model';

/**
 * Talks to the Spring Boot backend's /api/contact endpoint.
 * Relative URL works as-is once the Angular build is served by the same
 * Spring Boot app (or behind the same reverse proxy) as the API.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly endpoint = '/api/contact';

  constructor(private http: HttpClient) {}

  submitEnquiry(payload: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.endpoint, payload);
  }
}
