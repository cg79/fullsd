import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../../../services/localization/localization.service";

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {

  constructor(public localizationService: LocalizationService) { }

  ngOnInit() {
  }

}
