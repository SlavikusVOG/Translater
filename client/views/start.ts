import {JetView} from "webix-jet";

export default class Start extends JetView{
    config(){
        const ui ={
            view: "form",
            elements:[
                { view:"text", label:"Login" },
                { view:"text", type:"password", label:"Password" },
                {cols: [
                    { view:"button", value:"Login", css:"webix_primary" }
                    ]}
            ]
        };
        return ui
    }
}