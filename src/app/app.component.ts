import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'shop';

  @ViewChild("appTitle") appTitle!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = "Shop App";
  }
}
