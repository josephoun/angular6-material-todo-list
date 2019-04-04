import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter || !filter.hasOwnProperty('name') || !filter.hasOwnProperty('id') || !filter.hasOwnProperty('dueDate')) {
      return items;
    }

    if (filter.dueDate) {
      items = items.filter(item => ((filter.dueDate >= new Date(item.dueDate))));
    }

    if (filter.name) {
      items = items.filter(item => (item.title.toString().indexOf(filter.name) !== -1));
    }

    if (filter.id) {
      items = items.filter(item => (item.id.toString().indexOf(filter.id) !== -1));
    }
    //converting ID and title toString to prevent calling indexOf on integer in some cases
    return items
  }
}
