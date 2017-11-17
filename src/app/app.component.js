"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ej2_data_1 = require("@syncfusion/ej2-data");
var AppComponent = (function () {
    function AppComponent() {
        //bind the DataManager instance to dataSource property
        this.data = new ej2_data_1.DataManager({
            url: 'http://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ej2_data_1.ODataV4Adaptor,
            crossDomain: true
        });
        // maps the appropriate column to fields property
        this.fields = { text: 'CustomerID', value: 'OrderID' };
        //bind the Query instance to query property
        this.query = new ej2_data_1.Query().from('Orders').select(['CustomerID', 'OrderID']).take(100);
        //set the placeholder to DropDownList input
        this.text = "Select a customer";
        //sort the result items
        this.sorting = 'Ascending';
        // set value with number type
        this.value = 10344;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // specifies the template string for the DropDownList component with change event
        template: "<ej-dropdownlist id='ddlelement' [value]='value' #samples [dataSource]='data' [fields]='fields' [placeholder]='text' [query]='query' [sortOrder]='sorting'></ej-dropdownlist>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map