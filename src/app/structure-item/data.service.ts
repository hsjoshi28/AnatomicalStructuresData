import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/"
  constructor(private httpClient: HttpClient) { }

  getDetails(id: string) {
    const refinedId = id.replace(':', '_');
    const url = this.url + refinedId;
    console.log(url);
    return this.httpClient.get(url);
  }
}
