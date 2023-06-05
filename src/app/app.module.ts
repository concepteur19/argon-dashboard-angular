import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';
//import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ModalAssociateUserComponent } from './pages/workflows/modal-associate-user/modal-associate-user.component';
import { ModalAddDocumentComponent } from './pages/workflows/modal-add-document/modal-add-document.component';
//import { AddWorkflowFormComponent } from './pages/workflows/add-workflow-form/add-workflow-form.component';
//import { ListComponent } from './pages/workflows/list/list.component';


@NgModule({
  imports: [
    NgxExtendedPdfViewerModule,
    // NgxDocViewerModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ModalAssociateUserComponent,
    ModalAddDocumentComponent,
    //AddWorkflowFormComponent,
    //ListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
