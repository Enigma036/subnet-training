function zjisti_hosty() // Pro zjištění počtu hostů
{ 
    pocet_hostu = document.getElementById("pocet_hostu").value;
    return parseInt(pocet_hostu);
}

function zjisti_rozsah1(a) // Pro zjištění počtu hostů
{ 
    rozsah1 = document.getElementById("ro"+ a).value;
    return parseInt(rozsah1);
}

function zjisti_rozsah2(a) // Pro zjištění počtu hostů
{ 
    rozsah2 = document.getElementById("rd"+ a).value;
    return parseInt(rozsah2);
}

function zjisti_soucet()
{   
    pocet_hostu = zjisti_hosty();
    soucet = 0;
    for (let i = 0; i < pocet_hostu; i++)
    {
        soucet += zjisti_prefix_nebo_hodnoty(hodnoty_hostu[i],true); 
    }

    return soucet;
}



function zjisti_prefix_pro_sit(soucet){
    if (soucet <= 2){
        real_velikost_sitova.push(2);
        prefix_sitovy.push("/30");
        maska_sitova.push("255.255.255.252");
    }
    else if(soucet <= 6){
        real_velikost_sitova.push(6);
        prefix_sitovy.push("/29");
        maska_sitova.push("255.255.255.248");
    }
    else if(soucet <= 14){
        real_velikost_sitova.push(14);
        prefix_sitovy.push("/28");
        maska_sitova.push("255.255.255.240");
    }
    else if(soucet <= 30){
        real_velikost_sitova.push(30);
        prefix_sitovy.push("/27");
        maska_sitova.push("255.255.255.224");
    }
    else if(soucet <= 62){
        real_velikost_sitova.push(62);
        prefix_sitovy.push("/26");
        maska_sitova.push("255.255.255.192");
    }
    else if(soucet <= 126){
        real_velikost_sitova.push(126);
        prefix_sitovy.push("/25");
        maska_sitova.push("255.255.255.128");
    }
    else if(soucet <= 254){
        real_velikost_sitova.push(254);
        prefix_sitovy.push("/24");
        maska_sitova.push("255.255.255.0");
    }
    else if(soucet <= 510){
        real_velikost_sitova.push(510);
        prefix_sitovy.push("/23");
        maska_sitova.push("255.255.254.0");
    }
    else if(soucet <= 1022){
        real_velikost_sitova.push(1022);
        prefix_sitovy.push("/22");
        maska_sitova.push("255.255.252.0");
    }
    else if(soucet <= 2046){
        real_velikost_sitova.push(2046);
        prefix_sitovy.push("/21");
        maska_sitova.push("255.255.248.0");
    }
    else if(soucet <= 4094){
        real_velikost_sitova.push(4094);
        prefix_sitovy.push("/20");
        maska_sitova.push("255.255.240.0");
    }
    else if(soucet <= 8190){
        real_velikost_sitova.push(8190);
        prefix_sitovy.push("/19");
        maska_sitova.push("255.255.224.0");
    }
    else if(soucet <= 16382){
        real_velikost_sitova.push(16382);
        prefix_sitovy.push("/18");
        maska_sitova.push("255.255.192.0");
    }
}


function zjisti_prefix_nebo_hodnoty(soucet,pravda){
    if (soucet <= 2){
        if(pravda)
        {
            return 2;
        }
        else
        {
            return 30;
        }
    }
    else if(soucet <= 6){
        if(pravda)
        {
            return 6;
        }
        else
        {
            return 29;
        }
    }
    else if(soucet <= 14){
        if(pravda)
        {
            return 14;
        }
        else
        {
            return 28;
        }
    }
    else if(soucet <= 30){
        if(pravda)
        {
            return 30;
        }
        else
        {
            return 27;
        }
    }
    else if(soucet <= 62){
        if(pravda)
        {
            return 62;
        }
        else
        {
            return 26;
        }
    }
    else if(soucet <= 126){
        if(pravda)
        {
            return 126;
        }
        else
        {
            return 25;
        }
    }
    else if(soucet <= 254){
        if(pravda)
        {
            return 254;
        }
        else
        {
            return 24;
        }
    }
    else if(soucet <= 510){
        delitelne_cislo = 2;
        if(pravda)
        {
            return 510;
        }
        else
        {
            return 23;
        }
    }
    else if(soucet <= 1022){
        delitelne_cislo = 4;
        if(pravda)
        {
            return 1022;
        }
        else
        {
            return 22;
        }
    }
    else if(soucet <= 2046){
        delitelne_cislo = 8;
        if(pravda)
        {
            return 8;
        }
        else
        {
            return 21;
        }
    }
    else if(soucet <= 4094){
        delitelne_cislo = 16;
        if(pravda)
        {
            return 4094;
        }
        else
        {
            return 20;
        }
    }
    else if(soucet <= 8190){
        delitelne_cislo = 32;
        if(pravda)
        {
            return 8190;
        }
        else
        {
            return 19;
        }
    }
    else if(soucet <= 16382){
        delitelne_cislo = 62;
        if(pravda)
        {
            return 16382;
        }
        else
        {
            return 19;
        }
    }
}



