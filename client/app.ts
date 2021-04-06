import { JetApp, EmptyRouter, HashRouter } from "webix-jet";

declare const APPNAME;
declare const VERSION;
declare const PRODUCTION;
declare const BUILD_AS_MODULE;

export default class App extends JetApp{
    constructor(config = {}){
        const defaults = {
            router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
            debug: !PRODUCTION,
            start: "/start"
        };

        super({ ...defaults, ...config });
    }
}

if (!BUILD_AS_MODULE){
    webix.ready(() => new App().render() );
}