import { InjectionToken } from '@angular/core';
import { AppConfig } from './IAppConfig';

export let APP_CONFIG = new InjectionToken<AppConfig>('appconfig');
// constants configurable per application on startup use value providers
//also known as non class based services
export const API_CONFIG : AppConfig ={
    apiEndpoint:'https://jsonplaceholder.typicode.com/posts'
}

export const API_URL: string = 'api/url';