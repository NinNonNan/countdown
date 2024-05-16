function countdown(targetTime, targetDivId) {
    var targetDiv = document.getElementById(targetDivId);
    
    // Creazione di elementi per la stringa di testo e per l'ora del conto alla rovescia
    var textElement = document.createElement('div');
    var timeElement = document.createElement('div');
    
    // Aggiunta delle classi CSS ai nuovi elementi
    textElement.classList.add('countdown-text');
    timeElement.classList.add('countdown-time');
    
    // Aggiunta dei nuovi elementi al div del conto alla rovescia
    targetDiv.appendChild(textElement);
    targetDiv.appendChild(timeElement);
    
    function updateCountdown() {
        var currentTime = new Date();
        var difference = targetTime.getTime() - currentTime.getTime();

        if (difference <= 0) {
            timeElement.innerHTML = "Tempo scaduto";
            clearInterval(interval);
            return;
        }

        var hours = Math.floor(difference / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        var formattedTime = hours.toString().padStart(2, '0') + ":" +
                            minutes.toString().padStart(2, '0') + ":" +
                            seconds.toString().padStart(2, '0');

        timeElement.innerHTML = formattedTime;

        // Aggiorna il titolo della pagina con l'ora del conto alla rovescia
        document.title = "La live comincia tra: " + formattedTime;
    }

    var interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

window.onload = function() {
    // Effettua una richiesta HTTP per recuperare le impostazioni dall'esterno
    fetch('settings.json')
        .then(response => response.json())
        .then(settings => {
            // Crea una nuova data basata sulle impostazioni ottenute dal file JSON
            var targetTime = new Date(settings.year, settings.month - 1, settings.day, settings.hour, settings.minute, settings.second);
            // Chiama la funzione countdown con l'orario di destinazione e l'ID del div
            countdown(targetTime, 'countdownDiv');

            // Imposta il titolo della pagina e il messaggio di scadenza basati sulle variabili ottenute dal file JSON
            document.title = settings.title;
            timeElement.innerHTML = settings.msg;
        })
        .catch(error => console.error('Errore nel recupero delle impostazioni:', error));
};

