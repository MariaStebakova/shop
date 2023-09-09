import { Component, Inject, OnInit, Optional } from '@angular/core';
import { APPINFO, AppInfoConfig, ConfigModel, ConfigOptionsService, GeneratorToken5, LocalStorageService } from '../core';
import { Category } from '../shared';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string = "Name";
  description: string = "Description";
  price: number = 1;
  category: Category = Category.Home;
  isAvailable: boolean = true;
  items: number[] = [1, 2, 3];

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Inject(APPINFO) private appInfo: AppInfoConfig,
    @Inject(GeneratorToken5) private generator: string,
    private configService: ConfigOptionsService
  ) { }

  ngOnInit(): void {
    console.log(`${this.appInfo.App} - ${this.appInfo.Ver} - ${this.appInfo.APP_URL}`);
    console.log(this.generator);

    this.configService.setConfig(new ConfigModel(1, "login"));
    console.log(this.configService.getConfig());

    this.localStorageService.setItem("key1", { value: "value"});
    console.log(this.localStorageService.getItem("key1"));
    this.localStorageService.clear();
  }
}
