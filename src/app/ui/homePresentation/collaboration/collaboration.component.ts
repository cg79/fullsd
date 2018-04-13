import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../../../services/localization/localization.service";

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {

  constructor(public localizationService: LocalizationService) { }

  ngOnInit() {
  }

}
