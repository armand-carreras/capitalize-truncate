import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartTruncate'
})
export class SmartTruncatePipe implements PipeTransform {

  transform(value: string, charNumber?: number): string {
    
    let str = value;
    let arg1 = isNaN(charNumber) ? 1 : charNumber;
    let arr = str.split(' ');
    let truncate='';
    for(let i = 0; i<arg1;i++){
      truncate+=str[i];
    }
    let truncateArr = truncate.split(' ');
    while(truncateArr.includes('')){
      truncateArr.splice(truncateArr.indexOf(''),1);
    }
    if(arr[truncateArr.length-1] == truncateArr[truncateArr.length-1]){
      return truncate+'...';
    }
    else{
      truncateArr.pop(); 
      truncate=truncateArr.join(' ');
      return truncate+'...';
    }
  }
}