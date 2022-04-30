import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsComponent } from './forms/forms.component';
import { DemoFlexyModule } from '../demo-flexy-module';
import { GridListComponent } from './grid-list/grid-list.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressComponent } from './progress/progress.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { RegisterUserComponent } from './register-user/register-user.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterSkilledPersonComponent } from './register-skilled-person/register-skilled-person.component';
import { RegisterInvestorComponent } from './register-investor/register-investor.component';
import { RegisterEnterprunureComponent } from './register-enterprunure/register-enterprunure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';
import { SkilledYesQuestionsComponent } from './skilled-yes-questions/skilled-yes-questions.component';
import { SkilledRejectQuestionsComponent } from './skilled-reject-questions/skilled-reject-questions.component';
import { IdeaPageComponent } from './idea-page/idea-page.component';
import { TextInputComponent } from './text-input/text-input.component';
import { PostCreationComponent } from './post-creation/post-creation.component';

import { FileUploadModule } from 'ng2-file-upload';
import { NgxFileDragDropModule } from "ngx-file-drag-drop";



@NgModule({
  declarations: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent,
    TooltipsComponent,
    RegisterUserComponent,
    LoginComponentComponent,
    RegisterSkilledPersonComponent,
    RegisterInvestorComponent,
    RegisterEnterprunureComponent,
    TestingComponent,
    SkilledYesQuestionsComponent,
    SkilledRejectQuestionsComponent,
    IdeaPageComponent,
    TextInputComponent,
    PostCreationComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    NgxFileDragDropModule
  ],
  exports: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent,
    FileUploadModule,
    NgxFileDragDropModule
  ]
})
export class ComponentsModule { }
