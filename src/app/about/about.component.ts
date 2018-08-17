import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../services/localization/localization.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
  export class AboutComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public localizationService: LocalizationService) {

  }





}
