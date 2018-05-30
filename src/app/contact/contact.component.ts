import {Component, OnInit, TemplateRef, EventEmitter, Output} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {LocalizationService} from "../services/localization/localization.service";
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [BsModalService]
})
export class ContactComponent implements OnInit {
  @Output() action = new EventEmitter();

  public user : any = {
    name:"",
    email:""
  };
  constructor(public bsModalRef: BsModalRef,
              public localizationService: LocalizationService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
    const localStorageUser = this.localStorageService.get('user');
    if( localStorageUser) {
      this.user = {...localStorageUser};
    }
  }

  public clickOk() {
    //https://github.com/valor-software/ngx-bootstrap/issues/2290
    console.log("Click ok...");
    // this.action.emit(true);
    this.bsModalRef.hide();
  }

}
