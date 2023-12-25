



// Funzione countdown che si resetta a mezzanotte
function Countdown() {
  // Ottieni l'ora attuale
  let ora_attuale = new Date().getTime();

  let mezzanotte = new Date();
  mezzanotte.setDate(mezzanotte.getDate() + 1);
  mezzanotte.setHours(0, 0, 0, 0);
  let ora_reset = mezzanotte.getTime();

  let differenza = ora_reset - ora_attuale;

  let ore = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuti = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
  let secondi = Math.floor((differenza % (1000 * 60)) / 1000);

  document.getElementById('div_countdown').innerHTML = ore + 'H  ' + minuti + 'M  ' + secondi + 'S ';
} setInterval(Countdown, 1000);

Countdown();

// Funzione che permette a bottoni filtro di aprire le varie voci categoria




document.addEventListener("click", function (event) {
  let bottone_categoria = document.getElementById("button_categoria");
  let voci_menu_categoria = document.getElementById("filtrocategoriascomparsa");
  let div_filtro_categoria = document.getElementById("div_filtro_categoria");
  let click_interno_categoria = div_filtro_categoria.contains(event.target);
  let click_sul_bottone_categoria = event.target === bottone_categoria;

  if (click_sul_bottone_categoria && voci_menu_categoria.style.display === "none") {
    voci_menu_categoria.style.display = "block";
    div_filtro_categoria.style.height = "42vh";
    bottone_categoria.style.display = "none";
  } else if (!click_interno_categoria) {
    voci_menu_categoria.style.display = "none";
    div_filtro_categoria.style.height = "10vh";
    bottone_categoria.style.display = "block";
  }

  if (voci_menu_categoria.style.display === "block") {
    if (event.target.id === "tab_categoria_1") {
      document.getElementById("button_categoria").innerText = "Elettronica";
      voci_menu_categoria.style.display = "none";
      div_filtro_categoria.style.height = "10vh";
      bottone_categoria.style.display = "block";
    } else if (event.target.id === "tab_categoria_2") {
      document.getElementById("button_categoria").innerText = "Gioielli";
      voci_menu_categoria.style.display = "none";
      div_filtro_categoria.style.height = "10vh";
      bottone_categoria.style.display = "block";
    } else if (event.target.id === "tab_categoria_3") {
      document.getElementById("button_categoria").innerText = "Abbigliamento Uomo";
      voci_menu_categoria.style.display = "none";
      div_filtro_categoria.style.height = "10vh";
      bottone_categoria.style.display = "block";
    } else if (event.target.id === "tab_categoria_4") {
      document.getElementById("button_categoria").innerText = "Abbigliamento Donna";
      voci_menu_categoria.style.display = "none";
      div_filtro_categoria.style.height = "10vh";
      bottone_categoria.style.display = "block";
    }
  }
});

// Funzione che permette a bottoni filtro di aprire le varie voci prezzo

document.addEventListener("click", function (event) {
  let bottone_prezzo = document.getElementById("button_prezzo");
  let voci_menu_prezzo = document.getElementById("filtroprezzoscomparsa");
  let div_filtro_prezzo = document.getElementById("div_filtro_prezzo");
  let click_interno_prezzo = div_filtro_prezzo.contains(event.target);
  let click_sul_bottone_prezzo = event.target === bottone_prezzo;

  if (click_sul_bottone_prezzo && voci_menu_prezzo.style.display === "none") {
    voci_menu_prezzo.style.display = "block";
    div_filtro_prezzo.style.height = "42vh";
    bottone_prezzo.style.display = "none";

  } else if (!click_interno_prezzo) {
    voci_menu_prezzo.style.display = "none";
    div_filtro_prezzo.style.height = "10vh";
    bottone_prezzo.style.display = "block";
  }


  if (voci_menu_prezzo.style.display === "block") {
    if (event.target.id == "tab_prezzo_1") {
      document.getElementById("button_prezzo").innerText = "0€ - 100€";
      voci_menu_prezzo.style.display = "none";
      div_filtro_prezzo.style.height = "10vh";
      bottone_prezzo.style.display = "block";
    } else if (event.target.id == "tab_prezzo_2") {
      document.getElementById("button_prezzo").innerText = "101€ - 250€";
      voci_menu_prezzo.style.display = "none";
      div_filtro_prezzo.style.height = "10vh";
      bottone_prezzo.style.display = "block";
    } else if (event.target.id == "tab_prezzo_3") {
      document.getElementById("button_prezzo").innerText = "251€ - 500€";
      voci_menu_prezzo.style.display = "none";
      div_filtro_prezzo.style.height = "10vh";
      bottone_prezzo.style.display = "block";
    } else if (event.target.id == "tab_prezzo_4") {
      document.getElementById("button_prezzo").innerText = "+501€";
      voci_menu_prezzo.style.display = "none";
      div_filtro_prezzo.style.height = "10vh";
      bottone_prezzo.style.display = "block";
    }
  }

});