import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../../../services/localization/localization.service";

@Component({
  selector: 'app-training-it',
  templateUrl: './training-it.component.html',
  styleUrls: ['./training-it.component.scss']
})
export class TrainingItComponent implements OnInit {

  constructor(public localizationService: LocalizationService) { }

  ngOnInit() {
  }

}
