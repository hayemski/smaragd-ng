import { ZlatoService } from './../_services/zlato.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prodaja-zlato',
  templateUrl: './prodaja-zlato.component.html',
  styleUrls: ['./prodaja-zlato.component.css']
})
export class ProdajaZlatoComponent implements OnInit {

  podaci;
  selektovaniPodatak;
  tip;
  podaciServis;
  test

  constructor(public zlatoServis: ZlatoService ) { }

  ngOnInit(): void {

    // this.httpService.get('http://localhost:8081/api/Login/probaget').subscribe(
    //   data=>{
    //     this.podaciServis = data;
    //   }
    // )
    // this.zlatoServis.sendGetRequest().subscribe((data)=>{
    //   console.log("PODACI");
    //   this.podaciServis = data;
    //   //console.log(this.podaciServis);

    // })  



     console.log(this.test);

    //console.log(this.podaciServis);
    this.podaci = this.zlatoServis.getPodaci();
    this.tip = this.zlatoServis.getPodaciTip();
    this.kalkulisiCenu();
  }

  public changeTip(event){

  }

  private kalkulisiCenu(){
    for (const key in this.podaci) {
      if (Object.prototype.hasOwnProperty.call(this.podaci, key)) {
        let element = this.podaci[key];
        let tipZ = this.podaci[key].tip;
        let cenaZ = this.nadjiCenu(tipZ);
        this.podaci[key].cenaKom = parseFloat(cenaZ) * parseFloat(this.podaci[key].tezina);
        this.podaci[key].cenaKom = (Math.round(this.podaci[key].cenaKom * 100) / 100).toFixed(2);
      }
    }
  }

  private nadjiCenu(idN:number){
    let obj = this.tip.find(o => o.id == idN);
    return obj.cenaGr;
  }

}
