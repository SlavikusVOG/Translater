import {JetView} from "webix-jet";
import start from "./start";

export default class TopView extends JetView {
    config() {
        return {
            cols: [
                {view: "menu"},
                start
            ]
        }
    }
}