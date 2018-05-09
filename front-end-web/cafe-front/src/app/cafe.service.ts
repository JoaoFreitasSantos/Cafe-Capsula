import { CoffeCapsule } from './../Cafe';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class CafeService {
  private urlCafe: string = 'http://localhost:8080/capsulas';
  private headers = new Headers({'Content-Type': 'application.json'})
  private options = new RequestOptions({headers: this.headers });
  private coffeCapsule: CoffeCapsule;

  constructor( private http: Http ) {  }

////Metodos Obrigatorios////////////////////
  //GET
  pegaTodasCapsulas() {
    return this.http.get(this.urlCafe, this.options);
  }
  //POST
  criaCapsulas(coffeCapsule : CoffeCapsule): Observable<any>{
    let resultado: Observable<any>;
      resultado = this.http.post(this.urlCafe, JSON.stringify(coffeCapsule),this.options);
    return resultado;
  }
/////////////////////////////////////////////
  editaCapsula(coffeCapsule: CoffeCapsule): Observable<any>{
    let resultado: Observable<any>;
    resultado = this.http.put(this.urlCafe,coffeCapsule);
    return resultado;
  }

  deletaCapsula(capsulaId: number){
    this.http.delete(this.urlCafe + "/" + capsulaId,this.options);
  }

  
  //GET com id
  /*
  pegaCapsulaPorId(id: number) : Observable<any>{
    return this.http.get(this.urlCafe + '/' + id);
  }
  //DELETE
  deletaCapsula(cafeId: number){
    return this.http.delete(this.urlCafe + '/' + cafeId);
  }
  
  errorHandler(Error: Response){
    return Observable.throw(Error || "Erro interno no Servidor")
  }

  getter(){
    return this.coffeCapsule;
  }

  setter(coffeCapsule: CoffeCapsule){
    this.coffeCapsule = coffeCapsule;
  }
  */
}
