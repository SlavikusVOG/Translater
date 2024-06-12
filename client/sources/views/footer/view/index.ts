import {JetView} from "webix-jet"

export default class FooterView extends JetView {
  config() {
    const template: webix.ui.templateConfig = {
      view: "template",
      css: "main-template",
      autoheight: true,
      borderless: true,
    };
    return {
      css: "main-content",
      height: 60,
      rows: [
        template,
        {css: "main-bottom-spacer"}
      ]
    };
  }

  urlChange() {
    
  }
}