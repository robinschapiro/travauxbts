function calcul_moyenne(){
    var n1= prompt ("Donner la premiere note:");
    var n2= prompt ("Donner la deuxieme note:");
    var n3= prompt ("Donner la troisieme note:");

    var somme = Number (n1) + Number (n2) + Number (n3);

    document.write ("Voici la somme: " +somme+ "<br>");
    var moyenne= somme/3;

    document.write("voici la moyenne: "+moyenne+ "<br>");

    if (moyenne<10)
    document.write("vous etes redoublant");
    else if (moyenne<14)
    document.write("admis passable");
    else 
    document.write("vous etes Admis");
 }

 function test_age(){
    let age = prompt('quelle est votre age');
    if(age < 18){
        document.write("vous etes mineur")
        document.bgColor="green";

    }

 }

 function test_age(){
    let age = prompt('quelle est votre age');
    if(age < 18){
        document.write("<font size='8em' color='pink'>"+"vous etes mineur"+"</font>");
        document.bgColor="red";

    }
    else{
        document.write("vous etes majeur");
        document.bgColor="green";
    }

 }

 function simple_affichage(){
    let name = prompt('donner votre prénom')

    let familyname = prompt('donner votre nom')

    document.write('<div style="margin:auto; width:50%;text-align:center; border:6px solid red; ">')
   
        document.write("bonjour "+ name +"    " +familyname);
        document.write("</div>")
    
 }

  function test_couleur(){
    let c = prompt("donner une couleur");
    if(c == "rouge" || c == "rouge" ){
       
        document.body.style.background = "red";
        
    }
        else if (c == "bleu" || c == "bleu" ){      
        
        document.body.style.background = "blue";

        }
        


  }
