abstract class LavoratoreAutonomo {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }

    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
}
class LavoratoreSpecifico extends LavoratoreAutonomo {

    getUtileTasse(): number {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }

    getTasseInps(): number {
        return this.redditoannuolordo * this.tasseinps / 100;
    }

    getTasseIrpef(): number {
        return this.redditoannuolordo * this.tasseirpef / 100;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lavoratoreForm') as HTMLFormElement;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const codredd = parseInt((document.getElementById('codredd') as HTMLInputElement).value, 10);
        const redditoannuolordo = parseFloat((document.getElementById('redditoannuolordo') as HTMLInputElement).value);
        const tasseinps = parseFloat((document.getElementById('tasseinps') as HTMLInputElement).value);
        const tasseirpef = parseFloat((document.getElementById('tasseirpef') as HTMLInputElement).value);

        const lavoratore = new LavoratoreSpecifico(codredd, redditoannuolordo, tasseinps, tasseirpef);
        const utileTasse = lavoratore.getUtileTasse();


        const risultatoElement = document.getElementById('risultato');
        if (risultatoElement) {
            risultatoElement.innerHTML = `Reddito Annuo Netto: €${utileTasse.toFixed(2)}`;
        }
    });
});


