function countdown(targetTime, targetDivId) {
    var targetDiv = document.getElementById(targetDivId);
    
    function updateCountdown() {
        var currentTime = new Date();
        var difference = targetTime.getTime() - currentTime.getTime();

        if (difference <= 0) {
            targetDiv.innerHTML = "Tempo scaduto";
            clearInterval(interval);
            return;
        }

        var hours = Math.floor(difference / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        var formattedTime = hours.toString().padStart(2, '0') + ":" +
                            minutes.toString().padStart(2, '0') + ":" +
                            seconds.toString().padStart(2, '0');

        targetDiv.innerHTML = formattedTime;
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
        })
        .catch(error => console.error('Errore nel recupero delle impostazioni:', error));
};
