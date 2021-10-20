import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-div-edit',
  templateUrl: './div-edit.component.html',
  styleUrls: ['./div-edit.component.css'],
})
export class DivEditComponent implements OnInit {
  apiValues;
  id;
  sifarnici;
  izmena = false;

  private routeSub: any; // subscription to route observer

  selectedYear: number;
  years: number[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location,
    public router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.id == 0) {
      this.izmena = true;
    }
    this.getPodaci(this.id);
    this.getSifarnici();

    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= 1800; year--) {
      this.years.push(year);
    }

    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      }
    });
  }

  public ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getPodaci(id) {
    this.http
      .get('http://localhost:8081/api/Music/dummyGetOne/' + this.id)
      .subscribe(
        (values) => {
          this.apiValues = values as string[];
          //console.log(this.apiValues)
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getSifarnici() {
    this.http.get('  http://localhost:8081/api/Music/SifarniciGet').subscribe(
      (values) => {
        this.sifarnici = values as string[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  vratiNazad() {
    this.location.back();
  }

  snimiAlbum(brisanje?) {
    if (brisanje) {
      if (confirm('Are you sure to delete ' + name)) {
        this.apiValues[0].idAlbuma = -this.apiValues[0].idAlbuma;
      } else {
        return;
      }
    }

    let payload = JSON.stringify(this.apiValues[0]);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    console.log(this.apiValues[0]);

    this.http
      .post('http://localhost:8081/api/Music/IzmenaAlbum', payload, {
        headers: headers,
      })
      .subscribe((data) => {
        //console.log(data);
        if (data[0].rezultat == 0) {
          this.toastr.success(data[0].poruka, data[0].poruka);
        } else {
          this.toastr.error(data[0].poruka, data[0].poruka);
        }
      });
  }

  izmenaMod() {
    this.izmena = true;
  }
}
