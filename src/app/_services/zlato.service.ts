import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZlatoService {

  proizvodi = [{
    "id": 1,
    "proizvod": "Maryland Meadowbeauty",
    "tezina": 11.43,
    "tip": 1
  }, {
    "id": 2,
    "proizvod": "Sundial Lupine",
    "tezina": 4.13,
    "tip": 2
  }, {
    "id": 3,
    "proizvod": "California Polypody",
    "tezina": 2.38,
    "tip": 3
  }, {
    "id": 4,
    "proizvod": "Melia",
    "tezina": 12.5,
    "tip": 1
  }, {
    "id": 5,
    "proizvod": "Hawai'i Silversword",
    "tezina": 7.03,
    "tip": 2
  }]

  tipNakita = [{
    "id":1,
    "naziv":"Burme",
    "cenaGr":50
  },
  {
    "id":2,
    "naziv":"Prstenje",
    "cenaGr":45
  },
  {
    "id":3,
    "naziv":"Lanci",
    "cenaGr":45
  },
  {
    "id":4,
    "naziv":"Narukvice",
    "cenaGr":50
  }
]

  private REST_API_SERVER = "http://localhost:8081/api/Login/probaget";

  podaci;
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  ​  public getPodaci():Array<{id,proizvod,tezina,tip}>{
    return this.proizvodi;
  }

  public createPodaci(podaci: {id,proizvod,tezina,tip}){
    this.proizvodi.push(podaci);
  }

  ​  public getPodaciTip():Array<{id,naziv,cenaGr}>{
    return this.tipNakita;
  }

}
