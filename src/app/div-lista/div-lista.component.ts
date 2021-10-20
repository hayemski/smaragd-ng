import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-lista',
  templateUrl: './div-lista.component.html',
  styleUrls: ['./div-lista.component.css'],
})
export class DivListaComponent implements OnInit {
  apiValues;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getPodaci();
  }

  getPodaci() {
    this.http.get('http://localhost:8081/api/Music/dummyGet/').subscribe(
      (values) => {
        this.apiValues = values as string[];
        //console.log(this.apiValues);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  izmenaAlbum(id) {
    //console.log(id);
    this.router.navigate(['/div-edit'], { queryParams: { id: id } });
  }
}
