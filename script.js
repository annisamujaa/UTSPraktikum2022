function inputdata() {
  var nama = document.getElementById("nama").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  if (nama != "" && username!= "" && email!="" && pass !="") {
    return true;
  }else{
    alert('Anda harus mengisi data dengan lengkap !');
  }

  document.getElementById("nama").innerHTML = localStorage.getItem("nama");
  document.getElementById("username").innerHTML = localStorage.getItem("username");
  document.getElementById("email").innerHTML = localStorage.getItem("email");
  document.getElementById("pass").innerHTML = localStorage.getItem("pass");
}

function search(){
	var input = document.getElementById("cariproduk");
	var filter = input.value.toLowerCase();
	var div = document.getElementById("daftarCatalog");
	var h5 = document.querySelectorAll("h5")
	console.log(h5)
	for(var i = 0; i<li.length; i++){
		var h5 = document.querySelectorAll("h5")[i];
		if(ahref.innerHTML.toLowerCase().indexOf(filter) > -1){
			li[i].style.display = "";
		}else{
			li[i].style.display = "Produk tidak tersedia";
		}
	}
}
