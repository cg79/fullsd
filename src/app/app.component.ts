import {Component, OnInit} from '@angular/core';
import {HttpWrapperService} from "./services/http/httpService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private httpService: HttpWrapperService
  )
  {
  }

  ngOnInit(): void {
    this.httpService.postJson('/fullsd.com/api/pub', {
      proxy: {
        method:"add",
        module: "log"
      }
    });
  }


}
