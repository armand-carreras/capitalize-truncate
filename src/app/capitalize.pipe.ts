import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
  transform(value: String, args?: any): String {
    return value.split(" ").map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
}
