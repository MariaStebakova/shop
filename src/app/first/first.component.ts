import { Component, Inject, OnInit, Optional } from '@angular/core';

import { Category } from '../shared/enums/category.enum';
import { LocalStorageService } from '../core/services/local-storage.service';
import { APPINFO, AppInfoConfig } from '../core/services/constants.service';
import { GeneratorToken5 } from '../core/services/generator.factory';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { ConfigModel } from '../core/models/config.model';

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
