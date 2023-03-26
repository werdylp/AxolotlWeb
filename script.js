function myCas(){
    let datum = new Date();
    let hodina = datum.getHours();
    let minuty = datum.getMinutes();
    let sekundy = datum.getSeconds();


    if(hodina < 10) {
        hodina = "0" + hodina
    } 
    if(minuty < 10) {
        minuty = "0" + minuty
    }
    if(sekundy < 10) {
        sekundy = "0" + sekundy
    }

    return hodina + ":" + minuty + ":" + sekundy;

}

function aktCas(){
    setInterval("hodiny()", 1000);
}



function hodiny(){
    document.getElementById("hodiny").innerHTML = myCas();
}

function myDatum(){
    let datum = new Date();
    let denTyden = datum.getDay();
    let den = datum.getDate();
    let mesic = datum.getMonth();
    let rok = datum.getFullYear();

    let nazevDen = new Array("neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota");
    let nazevMesice = new Array("ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince");

    return "Dnes je " + nazevDen[denTyden] + ", " + den + " " + nazevMesice[mesic] + " " + rok;


}

function dnes(){
    document.getElementById("datum").innerHTML = myDatum();
}


function mySvatky(){
    let datum = new Date();
    let den = datum.getDate();
    let mesic = datum.getMonth();

    let svatky = new Array(12);
    svatky[0] = new Array("Nový rok","Karina","Radmila","Diana","Dalimil","Tři králové","Vilma","Čestmír","Vladan","Břetislav","Bohdana","Pravoslav","Edita","Radovan","Alice","Ctirad","Drahoslav","Vladislav","Doubravka","Ilona","Běla","Slavomír","Zdeněk","Milena","Miloš","Zora","Ingrid","Otýlie","Zdislava","Robin","Marika");
    svatky[1] = new Array("Hynek","Nela","Blažej","Jarmila","Dobromila","Vanda","Veronika","Milada","Apolena","Mojmír","Božena","Slavěna","Věnceslav","Valentýn","Jiřina","Ljuba","Miloslava","Gizela","Patrik","Oldřich","Lenka","Petr","Svatopluk","Matěj","Liliana","Dorota","Alexandr","Lumír","Horymír");
    svatky[2] = new Array("Bedřich","Anežka","Kamil","Stela","Kazimir","Miroslav","Tomáš","Gabriela","Františka","Viktorie","Anděla","Řehoř","Růžena","Růt a matylda","Ida","Elena a herbert","Vlastimil","Eduard","Josef","Světlana","Radek","Leona","Ivona","Gabriel","Marian","Emanuel","Dita","Soňa","Taťána","Arnošt","Kvido");
    svatky[3] = new Array("Hugo","Erika","Richard","Ivana","Miroslava","Vendula","Heřman a Hermína","Ema","Dušan","Darja","Izabela","Julius","Aleš","Vincenc","Anastázie","Irena","Rudolf","Valérie","Rostislav","Marcela","Alexandra","Evženie","Vojtěch","Jiří","Marek","Oto","Jaroslav","Vlastislav","Robert","Blahoslav");
    svatky[4] = new Array("Svátek práce ","Zikmund","Alexej","Květoslav","Klaudie","Radoslav","Stanislav","Den vítězství ","Ctibor","Blažena","Svatava","Pankrác","Servác","Bonifác","Žofie","Přemysl","Aneta","Nataša","Ivo","Zbyšek","Monika","Emil","Vladimír","Jana","Viola","Filip","Valdemar","Vilém","Maxmilián","Ferdinand","Kamila");
    svatky[5] = new Array("Laura","Jarmil","Tamara","Dalibor","Dobroslav","Norbert","Iveta a Slavoj","Medard","Stanislava","Gita","Bruno","Antonie","Antonín","Roland","Vít","Zbyněk","Adolf","Milan","Leoš","Květa","Alois","Pavla","Zdeňka","Jan","Ivan","Adriana","Ladislav","Lubomír","Petr a Pavel","Šárka");
    svatky[6] = new Array("Jaroslava","Patricie","Radomír","Prokop","Den věrozvěstů","Den upálení mistra Jana Husa","Bohuslava","Nora","Drahoslava","Libuše a Amálie","Olga","Bořek","Markéta","Karolína","Jindřich","Luboš","Martina","Drahomíra","Čeněk","Ilja","Vítězslav","Magdaléna","Libor","Kristýna","Jakub","Anna","Věroslav","Viktor","Marta","Bořivoj","Ignác");
    svatky[7] = new Array("Oskar","Gustav","Miluše","Dominik","Kristian","Oldřiška","Lada","Soběslav","Roman","Vavřinec","Zuzana","Klára","Alena","Alan","Hana","Jáchym","Petra","Helena","Ludvík","Bernard","Johana","Bohuslav","Sandra","Bartoloměj","Radim","Luděk","Otakar","Augustýn","Evelína","Vladěna","Pavlína");
    svatky[8] = new Array("Linda a Samuel","Adéla","Bronislav","Jindřiška","Boris","Boleslav","Regína","Mariana","Daniela","Irma","Denisa","Marie","Lubor","Radka","Jolana","Ludmila","Naděžda","Kryštof","Zita","Oleg","Matouš","Darina","Berta","Jaromír","Zlata","Andrea","Jonáš","Václav","Michal","Jeroným");
    svatky[9] = new Array("Igor","Olivie a Oliver","Bohumil","František","Eliška","Hanuš","Justýna","Věra","Štefan a Sára","Marina","Andrej","Marcel","Renáta","Agáta","Tereza","Havel","Hedvika","Lukáš","Michaela","Vendelín","Brigita","Sabina","Teodor","Nina","Beáta","Erik","Šarlota a Zoe","Den vzniku Československa","Silvie","Tadeáš","Štěpánka");
    svatky[10] = new Array("Felix","Dušičky","Hubert","Karel","Miriam","Liběna","Saskie","Bohumír","Bohdan","Evžen","Martin","Benedikt","Tibor","Sáva","Leopold","Otmar","Mahulena","Romana","Alžběta","Nikola","Albert","Cecílie","Klement","Emílie","Kateřina","Artur","Xenie","René","Zina","Ondřej");
    svatky[11] = new Array("Iva","Blanka","Svatoslav","Barbora","Jitka","Mikuláš","Ambrož a Benjamín","Květoslava","Vratislav","Julie","Dana","Simona","Lucie","Lýdie","Radana a Radan","Albína","Daniel","Miloslav","Ester","Dagmar","Natálie","Šimon","Vlasta","Adam a Eva","1. svátek vánoční","Štěpán","Žaneta","Bohumila","Judita","David","Silvestr");




    return "Dnes má svátek " + svatky[mesic][den-1];


}

function svatek(){
    document.getElementById("svatek").innerHTML = mySvatky();
}


