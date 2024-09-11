import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CnpjDados } from 'src/Interfaces/CnpjDados';

// Definindo a interface para os dados que a API de CNPJ vai retornar


@Injectable({
  providedIn: 'root'
})
export class ConsultaCnpjService {
  private baseUrl = 'https://www.receitaws.com.br/v1/cnpj/{CNPJ}';

  constructor(private http: HttpClient) {}

  consultaCNPJ(cnpj: string): Observable<CnpjDados> {
    return this.http.get<CnpjDados>(`${this.baseUrl}/${cnpj}`);
  }
}
