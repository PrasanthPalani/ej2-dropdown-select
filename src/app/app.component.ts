import { Component } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { Query, DataManager, ODataAdaptor } from '@syncfusion/ej2-data'

@Component({
    selector: 'my-app',
    // specifies the template string for the DropDownList component with change event
    template: `<ej-dropdownlist id='ddlelement' [value]='value' #samples [dataSource]='data' [fields]='fields' [placeholder]='text' [query]='query' [sortOrder]='sorting'></ej-dropdownlist>`
})
export class AppComponent {
    constructor() {
    }
    //bind the DataManager instance to dataSource property
    public data: DataManager = new DataManager({
        url: 'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc',
        adaptor: new ODataAdaptor,
        crossDomain: true
    });
    // maps the appropriate column to fields property
    public fields: Object = { text: 'CustomerID', value: 'OrderID' };
    //bind the Query instance to query property
    public query: Query = new Query().from('Orders').select(['CustomerID', 'OrderID']).take(850);
    //set the placeholder to DropDownList input
    public text: string = "Select a customer";
    //sort the result items
    public sorting: string = 'Ascending';
    // set value with number type
    public value: number = 10344;
}
