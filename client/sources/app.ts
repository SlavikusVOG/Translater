import {JetApp} from "webix-jet";
import mainView from "views/view";
import footerView from "./views/footer/view";
import headerView from "./views/header/view";

declare const APPNAME: any;
declare const VERSION: any;
declare const PRODUCTION: any;
declare const BUILD_AS_MODULE: any;

export default class App extends JetApp {
  constructor(config = {}) {
    const defaults = {
      id: APPNAME,
      version: VERSION,
      debug: !PRODUCTION,
      views: [
        
      ],
      start: "/top/start"
    };
    super({...defaults, ...config});
  }
}

if(!BUILD_AS_MODULE) {
    webix.ready(() => new App().render());
}
