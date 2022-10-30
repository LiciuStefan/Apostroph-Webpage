var nr_produse = 10;
var inp;   
var lista_produse = ["Face Primer", "Concealer", "Setting Powder", "Blush", "Contour", "Highlighter", "Eyeshadow Palette", "Eyeliner", "Eyebrow Pencil", "Lipstick"];
var fonturi=["Times New Roman","Comic Sans MS","Impact","Arial Black","Courier New","Lucida Console","Trebuchet MS"];
window.onload = function(){
   var ind = localStorage.getItem("selectate");
   var tabel = document.getElementById("tabel_produse");
   var randuri = tabel.getElementsByTagName("tr");
   ultim_selectat();
   //alert(randuri.length);
   if(ind != null){
   for(let i = 0; i < ind.length; i++)
   {   
       if(ind[i] == 0);
       else if(ind[i] == 1 && ind[i + 1] == 0)
       {
         randuri[10].classList.add("selectat");
       }
       else
        randuri[ind[i]].classList.add("selectat");
   }
}
   //alert(randuri.length); 
   for(let i = 1; i < randuri.length; i++)
   {
       randuri[i].onclick = function(e){
       e.stopPropagation();
       this.classList.add("selectat");
       let indici_selectati = localStorage.getItem("selectate");
     
       indici_selectati += i;
       localStorage.setItem("selectate", indici_selectati);
       localStorage.setItem("ultim_selectat", this.querySelectorAll("td")[1].innerHTML);

       ultim_selectat();

       };
   }

   document.getElementById("deselectare").onclick = function(e){
    e.stopPropagation();

    for(let i = 0; i < randuri.length; i++)
    {
       if(randuri[i].classList.contains("selectat"))
       {
           randuri[i].classList.remove("selectat");
       }
       localStorage.setItem("selectate", "");
    }

   }

   document.getElementById("add_sfarsit").onclick = function(e){
    e.stopPropagation();

       var rand_nou = document.createElement("tr");
       var col1 = document.createElement("td");
       var col2 = document.createElement("td");
       var col3 = document.createElement("td");
       var col4 = document.createElement("td");
       nr_produse += 1;
       col1.innerHTML = nr_produse;

       col2.innerHTML = lista_produse[get_random(0, lista_produse.length)];

       col3.innerHTML = get_random(0, 200);

       col4.innerHTML = get_random(0, 200);

       rand_nou.appendChild(col1);
     

       rand_nou.appendChild(col2);
      

       rand_nou.appendChild(col3);
      
       rand_nou.appendChild(col4);

       var tbl = document.getElementById("tabel_produse");
       var rand = tbl.getElementsByTagName("tr");
       tbl.appendChild(rand_nou);
        rand_nou.onclick = function(e){
        e.stopPropagation();

        this.classList.add("selectat");

        let indici_selectati = localStorage.getItem("selectate");
        //indici_selectati += nr_produse;
        //localStorage.setItem("selectate", indici_selectati);
        localStorage.setItem("ultim_selectat", this.querySelectorAll("td")[1].innerHTML);
       
        ultim_selectat();

       }

   }
   document.getElementById("sterge").onclick = function(e)
   {
    e.stopPropagation();
 
    var choice = prompt("Dupa ce doriti sa stergeti?");
       if(choice.toLowerCase() == "id")
       {
           var id = prompt("Introduceti id-ul:");
           if(id > nr_produse)
             {alert("Id invalid"); return;}
           else{
            var tbl = document.getElementById("tabel_produse");
            var rand = tbl.getElementsByTagName("tr");
            for(let i = 1; i < rand.length; i++)
            {
                let id_r = rand[i].querySelectorAll("td")[0];
                if(id_r.innerHTML == id)
                {
                    rand[i].remove();
                }
            }
           }
           }
        else if(choice.toLowerCase() == "nume")
           {
               var nume= prompt("Introduceti numele:");
                var tbl = document.getElementById("tabel_produse");
                var rand = tbl.getElementsByTagName("tr");
                for(let i = 1; i < rand.length; i++)
                {
                    let id_r = rand[i].querySelectorAll("td")[1];
                    if(id_r.innerHTML.toLowerCase() == nume)
                    {
                        rand[i].remove();
                    }
               }
               }
        else if(choice.toLowerCase() == "pret")
               {
                var pret= prompt("Introduceti pretul:");
                var tbl = document.getElementById("tabel_produse");
                var rand = tbl.getElementsByTagName("tr");
                for(let i = 1; i < rand.length; i++)
                {
                    let id_r = rand[i].querySelectorAll("td")[2];
                    if(id_r.innerHTML == pret)
                    {
                        rand[i].remove();
                    }
                }
                }
        else if(choice.toLowerCase() == "gramaj")
            {
                var gramaj= prompt("Introduceti gramajul:");
                var tbl = document.getElementById("tabel_produse");
                var rand = tbl.getElementsByTagName("tr");
                for(let i = 1; i < rand.length; i++)
                {
                    let id_r = rand[i].querySelectorAll("td")[3];
                    if(id_r.innerHTML == gramaj)
                        {
                            rand[i].remove();
                        }
                }
            }
       }

       document.getElementById("gaseste_produs").onclick = function(e){
        e.stopPropagation();

           var nume = prompt("Introduceti numele produsul cautat: ");
           var tbl = document.getElementById("tabel_produse");
           var rand = tbl.getElementsByTagName("tr");
           for(let i = 1; i < rand.length; i++)
           {
               if(rand[i].querySelectorAll("td")[1].innerHTML.toLowerCase() == nume)
               {
                rand[i].style.backgroundColor = get_random_color();
               }
           }


       }
       document.getElementById("goleste_tabel").onclick = function(e){
        e.stopPropagation();
   
        var tbl = document.getElementById("tabel_produse");
        var rand = tbl.getElementsByTagName("tr");
        nr_produse = 0;
        //for(let i = 1; i < rand.length; i++)
        while(rand.length > 1)
        {
            rand[1].remove();
        }

       }
       //document.body.onclick = function(){
           //this.style.backgroundColor = "red";
       //}
      document.getElementById("sorteaza_pret").onclick = function(e){
        e.stopPropagation();
 
        var tbl = document.getElementById("tabel_produse");
        var rand = tbl.getElementsByTagName("tr");
        var arr_randuri = Array.from(rand); 
        arr_randuri.sort(function(a,b){
              let pret_a = parseInt(a.children[2].innerHTML);
              let pret_b = parseInt(b.children[2].innerHTML);
              if(pret_a == NaN || pret_b == NaN)
               return 0;
              //alert(pret_a);
              //alert(pret_b);
              //let rez = pret_a.localeCompare(pret_b);
              //alert(rez);
              if(pret_a < pret_b) return -1;
              else if(pret_a > pret_b) return 1;
              else return 0;
          });
          for(let r of arr_randuri)
             {   if(r.children[2].innerHTML != "Pret")
                   arr_randuri[0].parentNode.appendChild(r);
            }
      }

      document.getElementById("sorteaza_gramaj").onclick = function(e){
        e.stopPropagation();

        var tbl = document.getElementById("tabel_produse");
        var rand = tbl.getElementsByTagName("tr");
        var arr_randuri = Array.from(rand); 
        arr_randuri.sort(function(a,b){
            let pret_a = parseInt(a.children[3].innerHTML);
            let pret_b = parseInt(b.children[3].innerHTML);
            if(pret_a === NaN || pret_b === NaN)
             return 0;
            //alert(pret_a);
            //alert(pret_b);
            //let rez = pret_a.localeCompare(pret_b);
            //alert(rez);
            if(pret_a < pret_b) return -1;
            else if(pret_a > pret_b) return 1;
            else return 0;
        });
        for(let r of arr_randuri)
           {   if(r.children[3].innerHTML != "Gramaj (ml)")
                arr_randuri[0].parentNode.appendChild(r);
           }
        }
       
        document.getElementById("inverseaza_coloane").onclick = function(e){
            e.stopPropagation();
            
            var tbl = document.getElementById("tabel_produse");
            var rand = tbl.getElementsByTagName("tr");
            if(e.target == e.currentTarget)
            {
                for(let r of rand){
                r.insertBefore(r.children[3], r.children[2]);
            }
         }
             
        }
        
       document.getElementById("ultimul_selectat").onclick = function(e){
        e.stopPropagation();  
       }

    document.addEventListener("keypress", function(e){
    if(e.key == "e")
        {
        inp = setInterval(function(){
                   //un element random din lista isi ia un font random:
                   var tbl = document.getElementById("tabel_produse");
                   var rand = tbl.getElementsByTagName("tr");
                   rand_random = rand[get_random(0, rand.length)];
                   font_random = fonturi[get_random(0, fonturi.length)];
                   stil = getComputedStyle(rand_random);
                   //if(stil.fontFamily.toLowerCase() === "normal")
                      rand_random.style.fontFamily = font_random;
               }, 2000);
           }
        else if(e.key == "s")
        {   
           clearInterval(inp);
        }
       });
    
    document.addEventListener("keydown", function(event){
     if(event.shiftKey)
     {
         startTime();
     }
     else if(event.ctrlKey)
     {
         clearTimeout(timeout);
     }
    });



    document.getElementById("container_butoane").onclick = function()
    {
        this.style.backgroundColor = get_random_color();
    }
   }


function schimba_culoare(){
    this.style.backgroundColor = "red";
}

function get_random(a, b){
    return Math.floor(a + (b - a)*Math.random());
}

function get_random_color(){
    return "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}


function update_value(arg){
    document.getElementById("see_nr_bucati").value = arg;
}

function ultim_selectat(){
   var ultim_nume = localStorage.getItem("ultim_selectat");
   document.getElementById("text_selectat").value = ultim_nume;
  }

function startTime(){
    var date = new Date();
    document.getElementById("text").value += date.toLocaleTimeString() + "\n";    
    timeout = setTimeout(startTime, 1000);
    
    }