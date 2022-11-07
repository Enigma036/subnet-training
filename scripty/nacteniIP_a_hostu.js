var abeceda = ["A","B","C","D","E","F","G","H","I","J"];
var ro = [1,1,1,1,1,1,1,1,1,1];
var rd = [500,500,500,500,500,500,500,500,500,500];
var hodnoty_hostu = [];
var posledni_pocet_hostu = 0;

var hlavni_ip = [];
var prefix = 24;
var delitelne_cislo = 1;


function vypsani_hostu()
{
    kontrola_prefixu();
    vypis_kontrolni_tabulky()
    pocet_hostu = zjisti_hosty();
    if(pocet_hostu <= 5)
    {
        text = "<div class=\"column\"><table class=\"tabulka_pro_hosty\"><tr><th>Jméno</th><th>Počet</th><th>rozsah</th><th>od</th><th>do</th></tr>";
        for (let i = 0; i < pocet_hostu; i++)
        {
            text +="<tr><td>"+abeceda[i]+"</td>" + "<td>"+hodnoty_hostu[i]+"</td>" + "<td>......</td>";
            text += "<td><input class = \"hoste_rozsah_css\" type=\"number\" id=\"ro"+ i +"\" name=\"pocet_hostu\" min=\"1\" max=\"1000\" value=\""+ro[i]+"\" onkeyup=hlavni_kontrola(this)></td>";
            text += "<td><input class = \"hoste_rozsah_css\" type=\"number\" id=\"rd"+ i +"\" name=\"pocet_hostu\" min=\"1\" max=\"1000\" value=\""+rd[i]+"\" onkeyup=hlavni_kontrola(this)></td>";
            text += "</td><tr>";
        }
        text += "</table></div>";
    }
    else
    {   
        text = "<div class=\"column\"><table class=\"tabulka_pro_hosty\"><tr><th>Jméno</th><th>Počet</th><th>rozsah</th><th>od</th><th>do</th></tr>";
        if(pocet_hostu == 10){
            pomocna = 5;
        }
        else
        {
            pomocna = pocet_hostu % 5;
        }
        for (let i = 0; i < pocet_hostu - pomocna; i++)
        {

            text +="<tr><td>"+abeceda[i]+"</td>" + "<td>"+hodnoty_hostu[i]+"</td>" + "<td>......</td>";
            text += "<td><input class = \"hoste_rozsah_css\" type=\"number\" id=\"ro"+ i +"\" name=\"pocet_hostu\" min=\"1\" max=\"1000\" value=\""+ro[i]+"\" onkeyup=hlavni_kontrola(this)></td>";
            text += "<td><input class = \"hoste_rozsah_css\" type=\"number\" id=\"rd"+ i +"\" name=\"pocet_hostu\" min=\"1\" max=\"1000\" value=\""+rd[i]+"\" onkeyup=hlavni_kontrola(this)></td>";
            text += "</td><tr>";
        }
        text += "</table></div>";

        text += "<div class=\"column\"><table class=\"tabulka_pro_hosty\"><tr><th>Jméno</th><th>Počet</th><th>rozsah</th><th>od</th><th>do</th></tr>";
        for (let i = 5; i < pocet_hostu; i++)
        {
            text +="<tr><td>"+abeceda[i]+"</td>" + "<td>"+hodnoty_hostu[i]+"</td>" + "<td>......</td>";
            text += "<td><input class = \"hoste_rozsah_css\" type=\"number\" id=\"ro"+ i +"\" name=\"pocet_hostu\" min=\"1\" max=\"1000\" value=\""+ro[i]+"\" onkeyup=hlavni_kontrola(this)></td>";
            text += "<td><input class = \"hoste_rozsah_css\" type=\"number\" id=\"rd"+ i +"\" name=\"pocet_hostu\" min=\"1\" max=\"1000\" value=\""+rd[i]+"\" onkeyup=hlavni_kontrola(this)></td>";
            text += "</td><tr>";
        }
        text += "</table></div>";
    }
    
    document.getElementById("tabulka_pro_hosty").innerHTML = text;

}

function zmena_poctu_hostu()
{
    pocet_hostu = zjisti_hosty();
    if(pocet_hostu > posledni_pocet_hostu)
    {
        for (let i = 0; i < pocet_hostu-posledni_pocet_hostu; i++)
        {

            nahodne_cislo = nahoda(ro[posledni_pocet_hostu+i],rd[posledni_pocet_hostu+i]);
            hodnoty_hostu.push(nahodne_cislo);
        }
    }
    else{
        for (let i = 0; i < posledni_pocet_hostu-pocet_hostu; i++)
        {
            hodnoty_hostu.pop();
            //ro[posledni_pocet_hostu-pocet_hostu] = 1;
            //rd[posledni_pocet_hostu-pocet_hostu] = 500;
        }
    }

    posledni_pocet_hostu = pocet_hostu;
    vypsani_hostu();

}

function zmena_rozsahu_hostu()
{
    hodnoty_hostu = [];
    pocet_hostu = zjisti_hosty();
    for (let i = 0; i < pocet_hostu; i++)
    {
        hodnota1 = zjisti_rozsah1(i);
        hodnota2 = zjisti_rozsah2(i);
        ro[i] = hodnota1;
        rd[i] = hodnota2;

        hodnoty_hostu.push(nahoda(hodnota1,hodnota2));
    }

}


function nova_ip()
{
    hlavni_ip = [];
    for (let i = 0; i < 3; i++)
    {
        hlavni_ip.push(nahoda(20,200));
    }
    hlavni_ip.push(0);

    prefix =  zjisti_prefix_nebo_hodnoty(zjisti_soucet(),false);
    kontrola_prefixu();
    document.getElementById("hlavni_ip").innerHTML = hlavni_ip[0] + "." + hlavni_ip[1] + "." + hlavni_ip[2] + "." + hlavni_ip[3] + "/" + prefix;
}

function vypis_kontrolni_tabulky()
{
    pocet_hostu = zjisti_hosty();
    text = "<table class=\"tabulka_pro_kontrolu\"> <tr> <th style=\"width: 10%;\">Jméno sítě</th> <th style=\"width: 12%;\">Potřebná velikost</th> <th style=\"width: 12%;\">Reálná velikost</th> <th style=\"width: 12%;\">Adresa</th> <th style=\"width: 5%;\">Prefix</th> <th style=\"width: 12%;\">Maska</th> <th style=\"width: 12%;\">Rozsah od</th> <th style=\"width: 12%;\">Rozsah do</th> <th style=\"width: 12%;\">Broadcast</th> </tr>";
    for (let i = 0; i < pocet_hostu; i++)
    {
        text += "<td id=\"ta" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"jmeno"+i+"\" maxlength=\"1\" name=\"jmeno"+i+"\"></td>";
        text += "<td id=\"tb" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"pot_velikost"+i+"\" maxlength=\"5\" name=\"pot_velikost" + i +"\" value=\"\"></td>";
        text += "<td id=\"tc" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"real_velikost"+i+"\" maxlength=\"5\" name=\"real_velikost" + i +"\" value=\"\"></td>";
        text += "<td id=\"td" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"sit_adresa"+i+"\" maxlength=\"16\" name=\"sit_adresa" + i +"\" value=\"\"></td>";
        text += "<td id=\"te" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"prefix"+i+"\" maxlength=\"3\" name=\"prefix" + i +"\" value=\"\"></td>";
        text += "<td id=\"tf" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"maska"+i+"\" maxlength=\"16\" name=\"maska" + i +"\" value=\"\"></td>";
        text += "<td id=\"tg" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"rozsah_od"+i+"\" maxlength=\"16\" name=\"rozsah_od" + i +"\" value=\"\"></td>";
        text += "<td id=\"th" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"rozsah_do"+i+"\" maxlength=\"16\" name=\"rozsah_do" + i +"\" value=\"\"></td>";
        text += "<td id=\"ti" + i + "\"><input class = \"kontrolni_tabulka\" type=\"text\" id=\"broadcast"+i+"\" maxlength=\"16\" name=\"broadcast" + i +"\" value=\"\"></td>";
        text += "</tr>";
    }   

    text += "</table>";
    document.getElementById("tabulka_pro_kontrolu").innerHTML = text;
    

}



function po_startu()
{
    zmena_poctu_hostu();
    vypsani_hostu();
    nova_ip();
}


function po_kliku_novi_hoste()
{
    zmena_rozsahu_hostu();
    vypsani_hostu();
}




