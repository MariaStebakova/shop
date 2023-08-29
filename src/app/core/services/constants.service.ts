import { InjectionToken } from '@angular/core';

export interface AppInfoConfig {
  App: string,
  Ver: string,
  APP_URL: string
};

export const APPINFO = new InjectionToken<AppInfoConfig>("appInfo");