import {JetApp} from "webix-jet";

declare const APPNAME;
declare const VERSION;
declare const PRODUCTION;
declare const BUILD_AS_MODULE;

export default class App extends JetApp {
    constructor(config = {}) {
        const defaults = {
            id: APPNAME,
            version: VERSION,
            debug: !PRODUCTION,
            start: "/top/start"
        };

        super({...defaults, ...config});
    }
}

if(!BUILD_AS_MODULE) {
    webix.ready(() => new App().render());
}
