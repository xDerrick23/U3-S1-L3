var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return LavoratoreAutonomo;
}());
var LavoratoreSpecifico = /** @class */ (function (_super) {
    __extends(LavoratoreSpecifico, _super);
    function LavoratoreSpecifico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreSpecifico.prototype.getUtileTasse = function () {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    };
    LavoratoreSpecifico.prototype.getTasseInps = function () {
        return this.redditoannuolordo * this.tasseinps / 100;
    };
    LavoratoreSpecifico.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * this.tasseirpef / 100;
    };
    return LavoratoreSpecifico;
}(LavoratoreAutonomo));
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('lavoratoreForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var codredd = parseInt(document.getElementById('codredd').value, 10);
        var redditoannuolordo = parseFloat(document.getElementById('redditoannuolordo').value);
        var tasseinps = parseFloat(document.getElementById('tasseinps').value);
        var tasseirpef = parseFloat(document.getElementById('tasseirpef').value);
        var lavoratore = new LavoratoreSpecifico(codredd, redditoannuolordo, tasseinps, tasseirpef);
        var utileTasse = lavoratore.getUtileTasse();
        var risultatoElement = document.getElementById('risultato');
        if (risultatoElement) {
            risultatoElement.innerHTML = "Reddito Annuo Netto: \u20AC".concat(utileTasse.toFixed(2));
        }
    });
});
