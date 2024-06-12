import { JetView } from "webix-jet";

export default class HeaderView extends JetView {
  config() {
    return {
      height: 60,
      template: "Header"
    }
  }
}