function hlavni_kontrola(el){
    if(el.value != ""){
      if(parseInt(el.value) < parseInt(el.min)){
        el.value = el.min;
      }
      if(parseInt(el.value) > parseInt(el.max)){
        el.value = el.max;
      }
    }
  }


function kontrola_prefixu(){
    if(prefix != zjisti_prefix_nebo_hodnoty(zjisti_soucet(),false))
    {
        prefix =  zjisti_prefix_nebo_hodnoty(zjisti_soucet(),false);
        document.getElementById("hlavni_ip").innerHTML = hlavni_ip[0] + "." + hlavni_ip[1] + "." + hlavni_ip[2] + "." + hlavni_ip[3] + "/" + prefix;
    }
    if(hlavni_ip[2]%delitelne_cislo != 0){
      while(true)
      { 
        cislo = nahoda(20,200);
        if(cislo%delitelne_cislo == 0){
          hlavni_ip[2] = cislo; 
          document.getElementById("hlavni_ip").innerHTML = hlavni_ip[0] + "." + hlavni_ip[1] + "." + hlavni_ip[2] + "." + hlavni_ip[3] + "/" + prefix;
          break;
        }
      }
    }

}
