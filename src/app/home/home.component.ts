import { ZlatoService } from './../_services/zlato.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';  
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  podaciServis;
  podaci2;
  apiValues;

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 9;
  tableSizes = [3, 6, 9, 12];



  constructor(public zlatoServis: ZlatoService, private http: HttpClient ) { 

  }

  ngOnInit(): void {
    this.getPodaci();

  }

  getPodaci(){
    this.http.get('http://localhost:8081/api/Music/dummyGet/').subscribe(values => {
      this.apiValues = values as string[];
      console.log(this.apiValues);
    },error => {
      console.log(error);
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.getPodaci();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getPodaci();
  }  

}
