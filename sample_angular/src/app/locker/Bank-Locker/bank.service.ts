import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bank} from './bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private baseURL = "http://localhost:8080/api/bank";

  constructor(private httpClient: HttpClient) { }
  getBankList(): Observable<Bank[]>{
    return this.httpClient.get<Bank[]>(`${this.baseURL}`);
  }

  createBank(employee: Bank): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getBankById(id: number): Observable<Bank>{
    return this.httpClient.get<Bank>(`${this.baseURL}/${id}`);
  }

  updateBank(id: number, employee: Bank): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteBank(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
