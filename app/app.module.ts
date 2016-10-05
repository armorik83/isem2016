import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {TranslateModule, TranslateService} from 'ng2-translate'

import {LOCALE} from './constant'
import {ROUTING} from './app.routing'

import {AppComponent} from './app.component'
import {DashboardComponent} from './dashboard.component'
import {DetailComponent} from './detail.component'
import {ModalDialogComponent} from './modal-dialog.component'
import {ModalDialogLoadFileComponent} from './modal-dialog-load-file.component'
import {UiButtonComponent} from './ui-button.component'
import {InputFileDirective} from './input-file.directive'

import {WindowRef} from './window-ref.service'
import {AppActions} from './app.actions'
import {AppDispatcher} from './app.dispatcher'
import {AppStore} from './app.store'
import {ProjectsResolver} from './projects.resolver'

const waltsProviders = [
  AppActions,
  AppDispatcher,
  AppStore,
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    ROUTING
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent,
    ModalDialogComponent,
    ModalDialogLoadFileComponent,
    UiButtonComponent,
    InputFileDirective
  ],
  providers: [
    WindowRef,
    waltsProviders,
    {
      provide: ProjectsResolver,
      useClass: ProjectsResolver,
      deps: waltsProviders
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('ja')
    translate.use(LOCALE)
  }

}
