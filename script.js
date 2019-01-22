  // on crée une fonction displayInformations que l'on va déclencher au clic pour recuperer et afficher la valeur de nos "inputs"
function displayInformations(){
  // dans le document HTML (document) tu recupere l'element grace à son ID =>(getElementById) ('ex :lastname)
  // ici on ne recupere que la valeur de l'element grace à .value
  // on stocke la valeur recuperée dans une variable (avec var etc ...)
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;

  alert('Nom : ' + lastname + '\nPrénom : ' + firstname + '\nVille : ' + city);
}
