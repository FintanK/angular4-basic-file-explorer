import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FileService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('files.json').map(
      (Response) => Response.json()
    );
  }

}
