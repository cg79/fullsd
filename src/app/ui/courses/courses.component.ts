import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpWrapperService} from "../../services/http/httpService";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private httpService: HttpWrapperService,
              private router: Router,
  ) {
  }
  user: any = null;


  async ngOnInit() {
  }


}
