var jmena_sitova = [];
var potr_velikost_sitova = [];
var real_velikost_sitova = [];
var ip_adresa_sitova1 = [];
var ip_adresa_sitova2 = [];
var prefix_sitovy = [];
var maska_sitova = [];
var rozsah_sitovy1 = [];
var rozsah_sitovy2 = [];
var rozsah_sitovy3 = [];
var rozsah_sitovy4 = [];
var broadcast_sitovy = [];

var ip_adresa_sitova = [];
var rozsah_sitovy_od = [];
var rozsah_sitovy_do = [];

var kopie_abeceda = [];
var kopie_hodnoty_hostu = [];

function hlavni_vypocet()
{
    jmena_sitova = [];
    potr_velikost_sitova = [];
    real_velikost_sitova = [];
    ip_adresa_sitova1 = [];
    ip_adresa_sitova2 = [];
    prefix_sitovy = [];
    maska_sitova = [];
    rozsah_sitovy1 = [];
    rozsah_sitovy2 = [];
    rozsah_sitovy3 = [];
    rozsah_sitovy4 = [];
    broadcast_sitovy = [];

    kopie_abeceda = [];
    kopie_hodnoty_hostu = [];

    ip_adresa_sitova = [];
    rozsah_sitovy_od = [];
    rozsah_sitovy_do = [];

    pocet_hostu = zjisti_hosty();

    for (let i = 0; i < pocet_hostu; i++)
    {
        kopie_abeceda.push(abeceda[i]);
        kopie_hodnoty_hostu.push(hodnoty_hostu[i]);
    }

    for (let i = 0; i < pocet_hostu; i++)
    {
        index = kopie_hodnoty_hostu.indexOf(Math.max(...kopie_hodnoty_hostu));
        jmena_sitova.push(kopie_abeceda[index]);
        potr_velikost_sitova.push(kopie_hodnoty_hostu[index]);
        kopie_abeceda.splice(index,1);
        kopie_hodnoty_hostu.splice(index,1);
    }

    for (let i = 0; i < pocet_hostu; i++)
    {
        zjisti_prefix_pro_sit(potr_velikost_sitova[i]);
    }

    for (let i = 0; i < pocet_hostu; i++)
    {
        if(i == 0)
        {
            ip_adresa_sitova1.push(hlavni_ip[2]);
            ip_adresa_sitova2.push(hlavni_ip[3]);
            rozsah_sitovy1.push(ip_adresa_sitova1[i]);
            rozsah_sitovy2.push(ip_adresa_sitova2[i]+1);

            var mezisoucet = Math.floor(parseInt(real_velikost_sitova[i]+2)/256);
            if(mezisoucet >= 1)
            {
                rozsah_sitovy3.push(ip_adresa_sitova1[i]+mezisoucet-1);
                rozsah_sitovy4.push(254);
            }
            else
            {
                rozsah_sitovy3.push(ip_adresa_sitova1[i]);
                rozsah_sitovy4.push(ip_adresa_sitova2[i]+real_velikost_sitova[i]);
            }
            broadcast_sitovy.push(rozsah_sitovy4[i]+1);
        }
        else
        {
            if(broadcast_sitovy[i-1] + real_velikost_sitova[i] + 1 <= 254)
            {
                ip_adresa_sitova1.push(rozsah_sitovy3[i-1]);
                ip_adresa_sitova2.push(broadcast_sitovy[i-1]+1);
                rozsah_sitovy1.push(ip_adresa_sitova1[i]);
                rozsah_sitovy2.push(ip_adresa_sitova2[i]+1);
                rozsah_sitovy3.push(ip_adresa_sitova1[i]);
                rozsah_sitovy4.push(ip_adresa_sitova2[i]+ real_velikost_sitova[i]);
                broadcast_sitovy.push(rozsah_sitovy4[i]+1);
            }
            else{
                var mezisoucet = Math.floor(parseInt(real_velikost_sitova[i]+2)/256);
                ip_adresa_sitova1.push(rozsah_sitovy3[i-1]+1);
                ip_adresa_sitova2.push(0);
                rozsah_sitovy1.push(ip_adresa_sitova1[i]);
                rozsah_sitovy2.push(ip_adresa_sitova2[i]+1);
                if(mezisoucet < 1)
                {
                    rozsah_sitovy3.push(ip_adresa_sitova1[i]);  
                }
                else
                {
                    rozsah_sitovy3.push(ip_adresa_sitova1[i] + mezisoucet-1);
                }
                if(parseInt(real_velikost_sitova[i]) > 254)
                {
                    rozsah_sitovy4.push(254);
                }
                else
                {
                    rozsah_sitovy4.push(ip_adresa_sitova2[i] + parseInt(real_velikost_sitova[i]));
                }
                broadcast_sitovy.push(rozsah_sitovy4[i]+1);
              }
        }

    }

    for (let i = 0; i < pocet_hostu; i++)
    {
        ip_adresa_sitova.push(hlavni_ip[0] + "." + hlavni_ip[1] + "." + ip_adresa_sitova1[i] + "." + ip_adresa_sitova2[i]);
        rozsah_sitovy_od.push(hlavni_ip[0] + "." + hlavni_ip[1] + "." + rozsah_sitovy1[i] + "." + rozsah_sitovy2[i]);
        rozsah_sitovy_do.push(hlavni_ip[0] + "." + hlavni_ip[1] + "." + rozsah_sitovy3[i] + "." + rozsah_sitovy4[i]);
        broadcast_sitovy[i] = (hlavni_ip[0] + "." + hlavni_ip[1] + "." + rozsah_sitovy3[i] + "." + broadcast_sitovy[i]);
    }
    
}

function vypis_vysledky()
{
    for (let i = 0; i < pocet_hostu; i++)
    {
        document.getElementById("jmeno" + i).value = jmena_sitova[i];
        document.getElementById("pot_velikost" + i).value = potr_velikost_sitova[i];
        document.getElementById("real_velikost" + i).value = real_velikost_sitova[i];
        document.getElementById("sit_adresa" + i).value = ip_adresa_sitova[i];
        document.getElementById("prefix" + i).value = prefix_sitovy[i];
        document.getElementById("maska" + i).value = maska_sitova[i];
        document.getElementById("rozsah_od" + i).value = rozsah_sitovy_od[i];
        document.getElementById("rozsah_do" + i).value = rozsah_sitovy_do[i];
        document.getElementById("broadcast" + i).value = broadcast_sitovy[i];
    }
}

function kontrola_tabulky_s_vysledky()
{
    pocet_hostu = zjisti_hosty();
    for (let i = 0; i < pocet_hostu; i++)
    {
        if(document.getElementById("jmeno" + i).value.toUpperCase() == jmena_sitova[i])
        {
            document.getElementById("ta" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("ta" + i).style.backgroundColor = "#FF8D8F";
        }

        if(document.getElementById("pot_velikost" + i).value == potr_velikost_sitova[i])
        {
            document.getElementById("tb" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("tb" + i).style.backgroundColor = "#FF8D8F";
        }

        if(document.getElementById("real_velikost" + i).value == real_velikost_sitova[i])
        {
            document.getElementById("tc" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("tc" + i).style.backgroundColor = "#FF8D8F";
        }

        if(document.getElementById("sit_adresa" + i).value == ip_adresa_sitova[i])
        {
            document.getElementById("td" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("td" + i).style.backgroundColor = "#FF8D8F";
        }

        if(document.getElementById("prefix" + i).value == prefix_sitovy[i])
        {
            document.getElementById("te" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("te" + i).style.backgroundColor = "#FF8D8F";
        }

        if(document.getElementById("maska" + i).value == maska_sitova[i])
        {
            document.getElementById("tf" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("tf" + i).style.backgroundColor = "#FF8D8F";
        }

        if(document.getElementById("rozsah_od" + i).value == rozsah_sitovy_od[i])
        {
            document.getElementById("tg" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("tg" + i).style.backgroundColor = "#FF8D8F";
        }

        if(document.getElementById("rozsah_do" + i).value == rozsah_sitovy_do[i])
        {
            document.getElementById("th" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("th" + i).style.backgroundColor = "#FF8D8F";
        }

        if(document.getElementById("broadcast" + i).value == broadcast_sitovy[i])
        {
            document.getElementById("ti" + i).style.backgroundColor = "#A3FF8D";
        }
        else
        {
            document.getElementById("ti" + i).style.backgroundColor = "#FF8D8F";
        }

    }
}

function reset_tabulek()
{
    for (let i = 0; i < pocet_hostu; i++)
    {
        document.getElementById("ta" + i).style.backgroundColor = "white"; 
        document.getElementById("tb" + i).style.backgroundColor = "white"; 
        document.getElementById("tc" + i).style.backgroundColor = "white"; 
        document.getElementById("td" + i).style.backgroundColor = "white"; 
        document.getElementById("te" + i).style.backgroundColor = "white"; 
        document.getElementById("tf" + i).style.backgroundColor = "white"; 
        document.getElementById("tg" + i).style.backgroundColor = "white"; 
        document.getElementById("th" + i).style.backgroundColor = "white"; 
        document.getElementById("ti" + i).style.backgroundColor = "white"; 
    }

}


function zkontrolovat_vysledky()
{
    hlavni_vypocet();
    kontrola_tabulky_s_vysledky();
}



function ukazat_vysledky()
{
    reset_tabulek();
    hlavni_vypocet();
    vypis_vysledky();

}