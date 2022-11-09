stisknuto = false;

magic_osa_pocet_hostu = [2048,1024,512,256,128,64,32,16,8,4,2,1];
magic_osa_prefix = ["/21","/22","/23","/24","/25","/26","/27","/28","/29","/30","/31","/32"];
magic_osa_maska = [".248.0",".252.0",".254.0",".0",".128",".192",".224",".240",".248",".252",".254",".255"];

function ukaz_magic_osu()
{
    if(stisknuto)
    {
        stisknuto = false
        document.getElementById("tabulka_magic_osa").innerHTML = ""
        document.getElementById("tlacitko_magic_osa").textContent = "Zobrazit Magic osu"
    }
    else
    {
        text = "<h2 class =\"magic_osa_nadpis\">Magic Osa</h2>";
        text += "<p class =\"magic_osa_pocet_clenu\">Počet reálných hostů: X-2</p>";
        text += "<div class=\"row\"><table class=\"tabulka_pro_magic_osu\">"
        stisknuto = true;
        text += "<tr>"
        for (let i = 0; i < magic_osa_pocet_hostu.length; i++)
        {
            text += "<td>"+magic_osa_pocet_hostu[i]+"</td>";
        }
        text += "</tr>"
        text += "<tr>"
        for (let i = 0; i < magic_osa_pocet_hostu.length; i++)
        {
            text += "<td>"+magic_osa_prefix[i]+"</td>";
        }
        text += "</tr>"
        text += "<tr>"
        for (let i = 0; i < magic_osa_pocet_hostu.length; i++)
        {
            text += "<td>"+magic_osa_maska[i]+"</td>";
        }
        text += "</tr></table>";
        text += "</div>"
        document.getElementById("tabulka_magic_osa").innerHTML = text
        document.getElementById("tlacitko_magic_osa").textContent = "Skrýt Magic osu"
    }

}