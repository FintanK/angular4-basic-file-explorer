import {Component, OnInit} from '@angular/core';
import {FileService} from '../file.service';
import {SortByPipe} from '../sort-by.pipe';
import {FilterPipe} from '../filter.pipe';
import {File} from '../../types/File';


@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css'],
  providers: [ SortByPipe, FilterPipe ]
})
export class FileExplorerComponent implements OnInit {

  sortedByField: string;
  term: string;
  rootFiles: File[];
  files: File[];
  subFolder: boolean;

  constructor(private fileService: FileService, private sortByPipe: SortByPipe) {}

  ngOnInit() {

    this.subFolder = false;

    this.sortedByField = 'name';

    this.fileService.fetchData().subscribe(
      (data) => {
        this.files = data;
        this.rootFiles = data;
      }
    );
  };

  loadSubFolderContents(files: any) {
    this.subFolder = true;
    this.files = files;
  }

  loadRootFiles() {
    this.files = this.rootFiles;
    this.subFolder = false;
  }

  sortBy(field: string) {
    switch(field) {
      case 'added':
        this.files = this.sortByPipe.transform(this.files, 'added');
        this.sortedByField = 'added';
        break;
      case 'type':
        this.files = this.sortByPipe.transform(this.files, 'type');
        this.sortedByField = 'type';
        break;
      case 'name':
        this.files = this.sortByPipe.transform(this.files, 'name');
        this.sortedByField = 'name';
        break;
      default:
        this.files = this.sortByPipe.transform(this.files, 'added');
        this.sortedByField = 'added';
    }
  }
}
