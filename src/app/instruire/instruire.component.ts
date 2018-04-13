import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../services/localization/localization.service";

@Component({
  selector: 'app-instruire',
  templateUrl: './instruire.component.html',
  styleUrls: ['./instruire.component.scss']
})
export class InstruireComponent implements OnInit {

  constructor( public localizationService: LocalizationService,) { }

  ngOnInit() {
  }

}
