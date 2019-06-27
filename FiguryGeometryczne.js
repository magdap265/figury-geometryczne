class FiguraGeometryczna {
    constructor (nazwa, iloscBokow){
        this.nazwa = nazwa;
        this.iloscBokow = iloscBokow;
    }

    nadajNazwe (nazwa) {
        this.nazwa = nazwa;
    }

    podajIloscBokow (iloscBokow){
        this.iloscBokow = iloscBokow;
    }

    WyswietlWlasnosci (){
        return {
            nazwaFigury = this.nazwa,
            iloscBokowFigury = this.iloscBokow
        }
    }
}

class Trojkat extends FiguraGeometryczna{
    constructor (nazwa, iloscBokow, a, h, pole) {
        super(nazwa, iloscBokow);
        this.wzorNaPole = "a*h*1/2";
        this.podstawa = a;
        this.wysokosc = h;
        this.pole = pole;
    }

    static pole (a,h){
        return a*h*1/2;
    }

    poleTrojkata (){
        return a*h*1/2;
    }

    WyswietlWlasnosci (){
        return {
            nazwaFigury = this.nazwa,
            iloscBokow = this.iloscBokow,
            wzorNaPole = this.wzorNaPole,
            podstawa = this.podstawa,
            wysokosc = this.wysokosc,
            pole = poleTrojkata()
        }
    }

}

class Prostokat extends FiguraGeometryczna{
    constructor (nazwa, iloscBokow, a, b, pole){
        super (nazwa, iloscBokow);
        this.wzorNaPole = "a*b";
        this.bok1 = a;
        this.bok2 = b;
        this.pole = pole;
    }

    static pole (a, b){
        return a*b;
    }

    poleProstokata(){
        return a*b;
    }

    WyswietlWlasnosci (){
        return {
            nazwaFigury = this.nazwa,
            iloscBokow = this.iloscBokow,
            wzorNaPole = this.wzorNaPole,
            bok1 = this.bok1,
            bok2 = this.bok2,
            pole = this.poleProstokata()
        }
    }
}