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
            nazwaFigury: this.nazwa,
            iloscBokow: this.iloscBokow
        }
    }
}

class Trojkat extends FiguraGeometryczna{
    constructor (nazwa, iloscBokow, a, h) {
        super(nazwa, iloscBokow);
        this.podstawa = a;
        this.wysokosc = h;
        this.wzorNaPole = "a*h*1/2";
        this.pole = a*h*1/2;
    }

    static pole (a,h){
        return a*h*1/2;
    }

    poleTrojkata (){
        return a*h*1/2;
    }

    WyswietlWlasnosci (){
        return {
            nazwaFigury: this.nazwa,
            iloscBokow: this.iloscBokow,
            podstawa: this.podstawa,
            wysokosc: this.wysokosc,
            wzorNaPole: this.wzorNaPole,
            pole: this.pole
        }
    }

}

class Prostokat extends FiguraGeometryczna{
    constructor (nazwa, iloscBokow, a, b){
        super (nazwa, iloscBokow);
        this.bok1 = a;
        this.bok2 = b;
        this.wzorNaPole = "a*b";
        this.pole = a*b;
    }

    static pole (a, b){
        return a*b;
    }

    poleProstokata(){
        return a*b;
    }

    WyswietlWlasnosci (){
        return {
            nazwaFigury: this.nazwa,
            iloscBokow: this.iloscBokow,
            bok1: this.bok1,
            bok2: this.bok2,
            wzorNaPole: this.wzorNaPole,
            pole: this.pole
        }
    }
}

// Trójkąt testowy

let trojkatTest = new Trojkat ("trójkąt testowy", 3, 4, 5);
console.log(trojkatTest);

// Prostokąt testowy

let prostokatTest = new Prostokat ("prostokąt testowy", 4, 4, 5);
console.log(prostokatTest);



// funkcja pobierająca dane z przeglądarki i tworząda z nich w tabeli bazę figór

function dodajTrojkat(){
    let nazwaTrojkata = document.getElementById("nazwaTrojkata").value;
    let podstawaTrojkata = document.getElementById("podstawa").value;
    let wysokoscTrojkata = document.getElementById("wysokosc").value;

    let nowyTrojkat = new Trojkat (nazwaTrojkata, 3, podstawaTrojkata, wysokoscTrojkata);
    
    let wlasnosciTrojkata = nowyTrojkat.WyswietlWlasnosci();
    

    // tworzenie tabeli na trójkąty
   
    let tabelaNaTrojkaty = document.getElementById("tabelaNaTrojkaty"); 

    let nowyWiersz = tabelaNaTrojkaty.insertRow(-1);
    let nazwaT = nowyWiersz.insertCell(0);
    let iloscBokowT = nowyWiersz.insertCell(1);
    let podstawaT = nowyWiersz.insertCell(2);
    let wysokoscT = nowyWiersz.insertCell(3);
    let wzorNaPoleT = nowyWiersz.insertCell(4);
    let poleT = nowyWiersz.insertCell(5);

    // wypełnianie tabeli
    nazwaT.innerHTML = wlasnosciTrojkata.nazwaFigury;
    iloscBokowT.innerHTML = wlasnosciTrojkata.iloscBokow;
    podstawaT.innerHTML = wlasnosciTrojkata.podstawa;
    wysokoscT.innerHTML = wlasnosciTrojkata.wysokosc;
    wzorNaPoleT.innerHTML = wlasnosciTrojkata.wzorNaPole;
    poleT. innerHTML = wlasnosciTrojkata.pole;
        



        // wyświetlanie danych potrzebnych do tabeli - test
        // document.getElementById("tabelaNaTrojkaty").innerHTML = [nowyTrojkat.WyswietlWlasnosci().nazwaFigury,
        //                                                 nowyTrojkat.WyswietlWlasnosci().iloscBokow,
        //                                                 nowyTrojkat.WyswietlWlasnosci().podstawa,
        //                                                 nowyTrojkat.WyswietlWlasnosci().wysokosc,
        //                                                 nowyTrojkat.WyswietlWlasnosci().wzorNaPole,
        //                                                 nowyTrojkat.WyswietlWlasnosci().pole];

    
    
}