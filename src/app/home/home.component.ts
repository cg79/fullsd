import { Component, OnInit, Injectable, ViewChild  } from '@angular/core';
import { HttpWrapperService } from '../services/http/httpService'
import {
  trigger,
  state,
  style,
  animate,
  transition, query, stagger
} from '@angular/animations';
import {LocalizationService} from "../services/localization/localization.service";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})

// @Injectable()
  export class HomeComponent implements OnInit {


  private text: string;
  private  httpService: HttpWrapperService;
  public codeResult : any;

  constructor(httpService: HttpWrapperService, public localizationService: LocalizationService, meta: Meta, title: Title)
  {
    this.httpService = httpService;
    // Sets the <title></title>
    title.setTitle('Home');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'FullSD' },
      { name: 'description', content: 'This is a description.' },
    ]);

  }

  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  onChange(code) {
  }

  ngOnInit() {



  }

  async executeCodeOnServer(event)
  {
    const xxx = await this.httpService.postJson('http://localhost:3001/api/funcp',
      {
        code: this.text
      });
    this.codeResult = xxx;
  }
  // ngAfterViewInit() {
  //   this.editor.setTheme("eclipse");

  //   this.editor.getEditor().setOptions({
  //       enableBasicAutocompletion: true
  //   });

  //   this.editor.getEditor().commands.addCommand({
  //       name: "showOtherCompletions",
  //       bindKey: "Ctrl-.",
  //       exec: function (editor) {

  //       }
  //   })
//}

}
