function countdown(targetTime, targetDivId, title, msg) {
    const targetDiv = document.getElementById(targetDivId);
    
    // Iniezione dinamica di CSS per rendere il layout responsive
    if (!document.getElementById('countdown-style')) {
        const style = document.createElement('style');
        style.id = 'countdown-style';
        style.textContent = `
            #${targetDivId} {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                width: 100%;
                padding: 20px;
                box-sizing: border-box;
                font-family: sans-serif;
            }
            .countdown-text {
                font-size: clamp(1.5rem, 5vw, 3rem);
                margin-bottom: 1rem;
            }
            .countdown-time {
                font-size: clamp(2rem, 10vw, 6rem);
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
    }

    // Creazione di elementi per la stringa di testo e per l'ora del conto alla rovescia
    const textElement = document.createElement('div');
    const timeElement = document.createElement('div');
    
    // Aggiunta delle classi CSS ai nuovi elementi
    textElement.classList.add('countdown-text');
    // Correzione: Imposta il titolo visibile sopra il timer
    textElement.textContent = title;
    timeElement.classList.add('countdown-time');
    
    // Aggiunta dei nuovi elementi al div del conto alla rovescia
    targetDiv.innerHTML = ''; // Pulisce il div per evitare duplicati in caso di riavvio
    targetDiv.appendChild(textElement);
    targetDiv.appendChild(timeElement);
    
    function updateCountdown() {
        const currentTime = new Date();
        const difference = targetTime.getTime() - currentTime.getTime();

        if (difference <= 0) {
            timeElement.innerHTML = msg;
            clearInterval(interval);
            return;
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const formattedTime = hours.toString().padStart(2, '0') + ":" +
                            minutes.toString().padStart(2, '0') + ":" +
                            seconds.toString().padStart(2, '0');

        timeElement.innerHTML = formattedTime;

        // Aggiorna il titolo della pagina con l'ora del conto alla rovescia
        document.title = title + " " + formattedTime;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}



window.onload = function() {
    // Effettua una richiesta HTTP per recuperare le impostazioni dall'esterno
    fetch('settings.json')
        .then(response => response.json())
        .then(settings => {
            // Crea una nuova data basata sulle impostazioni ottenute dal file JSON
            const targetTime = new Date(settings.year, settings.month - 1, settings.day, settings.hour, settings.minute, settings.second);
            // Chiama la funzione countdown con l'orario di destinazione, l'ID del div, il titolo e il messaggio
            countdown(targetTime, 'countdownDiv', settings.title, settings.msg);
        })
        .catch(error => console.error('Errore nel recupero delle impostazioni:', error));
};
