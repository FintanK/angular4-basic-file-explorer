import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerComponent } from './file-explorer.component';
import {SortByPipe} from '../sort-by.pipe';
import {FilterPipe} from '../filter.pipe';
import {FormsModule} from '@angular/forms';
import {FileService} from '../file.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

describe('FileExplorerComponent', () => {
  let component: FileExplorerComponent;
  let fixture: ComponentFixture<FileExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
