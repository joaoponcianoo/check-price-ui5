sap.ui.define([
    "sap/ui/core/mvc/Controller",

    //Filters
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("pricetable.controller.View1", {
            onInit: function () {

            },

            onCheckPrice: function(oEvent) {
                let inputSearchValue = oEvent.getSource().getValue();
                let oTable = this.byId("mainTable");
                let oItems = oTable.getBinding("items");
                let oFilters = new Filter("ProductName", FilterOperator.Contains, inputSearchValue);

                oItems.filter(oFilters);
            },

            onResetFilters: function(oEvent) {
                let oTable = this.byId("mainTable");
                let oItems = oTable.getBinding("items");
                let oInputSearch = this.byId("inputSearch");

                oItems.filter();
                oInputSearch.setValue();
            }
        });
    });
