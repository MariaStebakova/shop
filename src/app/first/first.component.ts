import { Component } from '@angular/core';
import { Category } from '../shared/enums/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  name: string = "Name";
  description: string = "Description";
  price: number = 1;
  category: Category = Category.Home;
  isAvailable: boolean = true;
  items: number[] = [1,2,3];
}
