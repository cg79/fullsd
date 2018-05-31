import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
// import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { CodingComponent } from './coding/coding.component';
import { HttpWrapperService } from './services/http/httpService'
import { AppRoutingModule }        from './routes/app-routing.module';
import { HomeComponent }        from './home/home.component';
import { NotFoundComponent }        from './not-found/notfound.component';
import { AboutComponent }  from './about/about.component';
// import { JavascriptComponent }  from './cursuri/javascript/javascript.component';
import { ObjectKeysPipe }  from './pipes/objectKeys.pipe';
// import { HtmlNodeComponent }  from './cursuri/javascript/components/htmlnode.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe'
import { CodeExecutionService } from './services/code/codeExecution'
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './ui/header/header.component';
import  { TypoComponent } from './ui/type/typo.component';
import  { HomePresentationComponent } from './ui/homePresentation/homePresentation.component';


import { ResetPasswordComponent } from './login/resetpassword/resetpassword.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LocalStorageModule } from 'angular-2-local-storage';

import {DropdownModule} from "ngx-dropdown";
import { FacebookModule } from 'ngx-facebook';
import {AuthGuard} from "./routes/auth-guard.service";
import { EvaluationComponent } from './ui/evaluation/evaluation.component';
import { QuizAddComponent } from './ui/evaluation/quiz/add/quiz.add.component';
import { QuizFooterComponent } from './ui/evaluation/quiz/footer/quiz.footer.component';
import { QuizHeaderComponent } from './ui/evaluation/quiz/header/quiz.header.component';
import { QuizManagerComponent } from './ui/evaluation/quiz/manager/quiz.manager.component';
import { QuizQuestionComponent } from './ui/evaluation/quiz/question/quiz.question.component';
import { ServicesComponent } from './ui/services/services.component';
import { SimpleTimer } from 'ng2-simple-timer';
import { TimerComponent } from './timer/timer.component';
import { MomentModule } from 'angular2-moment';
import * as moment from 'moment/moment';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
import * as $ from 'jquery';
import { WysEditorComponent } from './wys-editor/wys-editor.component';
import {PubSubService} from "./services/pubsub/pubsub";
import { FileComponentComponent } from './file-component/file-component.component';
import { QuizImageComponent } from './ui/evaluation/quiz/quiz-image/quiz-image.component';
import { QuizWysEditorComponent } from './ui/evaluation/quiz/quiz-wys-editor/quiz-wys-editor.component';
import { QuizTimerComponent } from './ui/evaluation/quiz/quiz-timer/quiz-timer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CourseRegistrationComponent } from './ui/course-registration/course-registration.component';
import { CodemirrorModule } from '@nomadreservations/ngx-codemirror';
import { CodemirrorEditorComponent } from './coding/editors/codemirror-editor/codemirror-editor.component';
import { CoursesComponent } from './ui/courses/courses.component';
import {SocketService} from "./services/socket/socketService";
import { NewsManagementComponent } from './ui/news-management/news-management.component';

import {UtilsService} from "./services/utils/utilsService";
import { ConsoleComponetComponent } from './console-componet/console-componet.component';
import { PageViewerComponent } from './ui/page-viewer/page-viewer.component';
import { MyDatePickerModule } from 'mydatepicker';
import { DailyNewsComponent } from './ui/news-management/daily-news/daily-news.component';
import {BsDropdownModule, TabsModule} from 'ngx-bootstrap';
import { NewsComponent } from './ui/news-management/news/news.component';
import {NewsService} from "./ui/news-management/services/newsService";
import { DailyChallengeComponent } from './ui/daily-challenge/daily-challenge.component';
import { CollapsibleNewsComponent } from './ui/news-management/collapsible-news/collapsible-news.component';
import { CoddingMirrorComponent } from './coding/codding-mirror/codding-mirror.component';
import { PagerWrapperComponent } from './components/pager-wrapper/pager-wrapper.component';
import { PaginationModule } from 'ngx-bootstrap';
import { NotificationWrapperComponent } from './components/notification-wrapper/notification-wrapper.component';
import { CreateUserComponent } from './ui/user/create-user/create-user.component';
import { ForgotPasswordComponent } from './ui/user/forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './ui/user/set-new-password/set-new-password.component';
import { ChangePasswordComponent } from './ui/user/change-password/change-password.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ModalModule  } from 'ngx-bootstrap';

window["$"] = $;
window["jQuery"] = $;
import { EditUserComponent } from './ui/user/edit-user/edit-user.component';
import { ConfirmEmailComponent } from './ui/user/confirm-email/confirm-email.component';
import { BdRadioComponent } from './components/input/bd-radio/bd-radio.component';
import { UserListComponent } from './ui/user/user-list/user-list.component';
import {LocalizationService} from "./services/localization/localization.service";
import { InstruireComponent } from './instruire/instruire.component';
import { ConsultingComponent } from './ui/homePresentation/consulting/consulting.component';
import { CollaborationComponent } from './ui/homePresentation/collaboration/collaboration.component';
import { TrainingItComponent } from './ui/homePresentation/training-it/training-it.component';
import { InstruireDetailsComponent } from './instruire/instruire-details/instruire-details.component';
import { ContactComponent } from './contact/contact.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ShowContactDialogComponent } from './contact/show-contact-dialog/show-contact-dialog.component';

let providers = {
  // "google": {
  //   "clientId": "GOOGLE_CLIENT_ID"
  // },
  // "linkedin": {
  //   "clientId": "LINKEDIN_CLIENT_ID"
  // },
  "facebook": {
    "clientId": "2046457209013195",
    "apiVersion": "v2.11" //like v2.4
  }};

@NgModule({
  declarations: [
    AppComponent,
    CodingComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    // JavascriptComponent,
    ObjectKeysPipe,
    // HtmlNodeComponent,
    EscapeHtmlPipe,
    LoginComponent,
    HeaderComponent,
    // MainSliderComponent,
    // SwipperComponent,
    TypoComponent,
    HomePresentationComponent,
    ResetPasswordComponent,
    FooterComponent,
    EvaluationComponent,
    QuizAddComponent,
    QuizFooterComponent,
    QuizHeaderComponent,
    QuizManagerComponent,
    QuizQuestionComponent,
    ServicesComponent,
    TimerComponent,
    WysEditorComponent,
    FileComponentComponent,
    QuizImageComponent,
    QuizWysEditorComponent,
    QuizTimerComponent,
    CourseRegistrationComponent,
    CodemirrorEditorComponent,
    CoursesComponent,
    NewsManagementComponent,
    ConsoleComponetComponent,
    PageViewerComponent,
    DailyNewsComponent,
    NewsComponent,
    DailyChallengeComponent,
    CollapsibleNewsComponent,
    CoddingMirrorComponent,
    PagerWrapperComponent,
    NotificationWrapperComponent,
    CreateUserComponent,
    ForgotPasswordComponent,
    SetNewPasswordComponent,
    ChangePasswordComponent,
    EditUserComponent,
    ConfirmEmailComponent,
    BdRadioComponent,
    UserListComponent,
    InstruireComponent,
    ConsultingComponent,
    CollaborationComponent,
    TrainingItComponent,
    InstruireDetailsComponent,
    ContactComponent,
    WhoweareComponent,
    ShowContactDialogComponent,


    //
  ],
  imports: [
    AceEditorModule,

    Angular2SocialLoginModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    CodemirrorModule,
    DropdownModule,
    FacebookModule.forRoot(),
    FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),

    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    HttpModule,
    MyDatePickerModule,
    MomentModule,
    NgbModule.forRoot(),

    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TextMaskModule,
    ModalModule.forRoot()
  ],
  providers: [HttpWrapperService,CodeExecutionService, AuthGuard, SimpleTimer,PubSubService, SocketService, UtilsService,NewsService, LocalizationService ],
  bootstrap: [AppComponent],
  entryComponents: [
    ContactComponent
  ],
})


export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
