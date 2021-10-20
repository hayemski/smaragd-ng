import { Component, Injectable, Input, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modal-popravka',
  templateUrl: './modal-popravka.component.html',
  styleUrls: ['./modal-popravka.component.css']
})
@Injectable()
export class ModalPopravkaComponent implements OnInit {

  @Input() public podatak;
  public datum!:NgbDate;
  public podatakPrvi

  public onSaveStatusChanged(value:boolean){
    this.podatak.status = value;
  }

  constructor(){}
  

  public onDateSelect(event){
    this.podatak.datum = event.month+'/'+event.day+'/'+event.year;
    console.log(event);
    console.log(event.day);
    console.log(this.podatak)
  }

  public cancel(){
    this.podatak = Object.assign({}, this.podatakPrvi);
    
    console.log(this.podatak);
  }

  ngOnInit(): void {
    let dat =  this.podatak.datum.split('/');
    this.datum = new NgbDate(parseInt(dat[2]),parseInt(dat[0]),parseInt(dat[1]));
    this.podatakPrvi = Object.assign({}, this.podatak);
    console.log(this.podatakPrvi);
  }

}
