import {SortByPipe} from './sort-by.pipe';

describe('SortByPipe', () => {
  beforeEach(() => {
    this.pipe = new SortByPipe();

    this.fileArray = [{
      'type': 'pdf',
      'name': 'Employee Handbook',
      'added': '2017-01-06'
    },{
      'type': 'pdf',
      'name': 'Public Holiday policy',
      'added': '2016-12-06'
    },{
      'type': 'folder',
      'name': 'Expenses',
      'added': '2014-12-06',
      'files':[{
        'type': 'doc',
        'name': 'Expenses claim form',
        'added': '2017-05-02'
      },{
        'type': 'doc',
        'name': 'Fuel allowances',
        'added': '2017-05-03'
      }]
    },{
      'type': 'csv',
      'name': 'Cost centres',
      'added': '2016-08-12'
    },{
      'type': 'folder',
      'name': 'Misc',
      'added': '2014-12-06',
      'files':[{
        'type': 'doc',
        'name': 'Christmas party',
        'added': '2017-12-01'
      }, {
        'type': 'mov',
        'name': 'Welcome to the company!',
        'added': '2015-04-24'
      }]
    }];
  });

  it('create an instance', () => {
    expect(this.pipe).toBeTruthy();
  });

  it('should sort an array of items by type', () => {
    const sortedFiles = this.pipe.transform(this.fileArray, 'type');
    expect(sortedFiles[0].type).toBe('csv');
  });

  it('should sort an array of items by name', () => {
    const sortedFiles = this.pipe.transform(this.fileArray, 'name');
    expect(sortedFiles[0].name).toBe('Cost centres');
  });

  it('should sort an array of items by date', () => {
    const sortedFiles = this.pipe.transform(this.fileArray, 'added');
    expect(sortedFiles[0].added).toBe('2014-12-06');
  });
});
