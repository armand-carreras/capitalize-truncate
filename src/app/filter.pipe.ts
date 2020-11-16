import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: [], property: string, trim: string): any[] {
    if (!property) {
      return items;
    }
    return items.filter(element => {
      element.property.toLowerCase().includes(trim);
    });
  }
}
