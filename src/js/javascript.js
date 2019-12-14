function namedefine(){
    event.preventDefault();
    // buat variable ingambar yang isinya untu mengambil class gambar pada view postingan.html
    var ingambar = document.getElementsByClassName('inputgambar');

      // jika ingambar ada isinya
    if(ingambar[0].value.length){

      // File Reader() itu library untuk membaca gambar yang telah dimasukkan
        var oFReader = new FileReader();

        // onload untuk load data
        oFReader.onload = function(oFREvent) {
          // meletakkan gambar yang di load ke yang ada id gambarpreview
            document.getElementById("gambarpreview").src = oFREvent.target.result;
        };

          oFReader.readAsDataURL(ingambar[0].files[0]);
        }
        else{
          // misal gaada gambar gk menampikan apa2
        console.log('cancelled');
        }
    }
    $("#ingambar").change(function() {
    namedefine();
});

function validateForm() {
  // my form merupakan name yang ada di form
  var username = document.forms["myForm"]["username"].value;
  var password = document.forms["myForm"]["password"].value;
  // inisiasi variable dua dengan default 0
  var a =0;
  var b = 0;


  if (username == "" || password == "") {
    if(a == 0){
      // display block berfungsi menampilkan popup
        document.getElementById("popup-danger").style.display="block";
        a = 1;
    }

// supaya popup tidak hilang secara otomatis
    return false;

  }else if (username != "" && password != ""){
    if(a == 0){
        document.getElementById("popup-success").style.display="block";
        a = 1;

    }
    return false;
  }
}

function lanjut(){
  window.location = "index.html";
}

function gagal(){
  // display none untuk menghilangkan popup
    document.getElementById("popup-danger").style.display="none";
    a = 0;
}
