import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FileExplorerComponent} from './file-explorer/file-explorer.component';
import {HttpModule} from '@angular/http';
import {FileService} from './file.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SortByPipe } from './sort-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FileExplorerComponent,
    FilterPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
