import { Component, OnInit } from '@angular/core';
import {BsModalService, BsModalRef} from "ngx-bootstrap";
import {ContactComponent} from "../contact.component";

@Component({
  selector: 'app-show-contact-dialog',
  templateUrl: './show-contact-dialog.component.html',
  styleUrls: ['./show-contact-dialog.component.scss']
})
export class ShowContactDialogComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  showContactDlg(item){
    this.bsModalRef = this.modalService.show(ContactComponent, {class: 'modal-lg'});
    // this.bsModalRef.content.title = 'New Client';

    this.bsModalRef.content.action.take(1).subscribe((value) => {
      console.log(value); // here you will get the value
    });
  }


}
