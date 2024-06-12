import { JetView } from "webix-jet";
import header from "../../header/view/index";
import main from "../../main/view/index";
import footer from "../../footer/view/index";

export default class TopView extends JetView {
  config() {
    return {
      rows: [
        header,
        main,
        footer,
      ]
    }
  }

  init() {}

  ready() {}

  urlChange() {}
}