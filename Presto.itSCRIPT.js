



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
  }setInterval(Countdown, 1000);
  
  Countdown();