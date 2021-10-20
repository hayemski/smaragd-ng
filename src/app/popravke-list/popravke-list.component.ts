import { PopravkeService } from './../_services/popravke.service';
import { ModalPopravkaComponent } from '../modal-popravka/modal-popravka.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popravke-list',
  templateUrl: './popravke-list.component.html',
  styleUrls: ['./popravke-list.component.css']
})
export class PopravkeListComponent implements OnInit {

  podaci;
  selektovaniPodatak;

  constructor(public popravkaServis: PopravkeService, private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.podaci = this.popravkaServis.getPodaci();
  }

  public selectPodatak(podatak){
    this.selektovaniPodatak = podatak;
  }

  public openModal(podatak){
    const modalRef = this.modalService.open(ModalPopravkaComponent);
    modalRef.componentInstance.podatak = podatak;
  }

}
