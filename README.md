# Countdown Widget

[Read in English 🇬🇧](README.en.md)

<a href="https://ninonononano.github.io/countdown/" target="_blank">Vai al conto alla rovescia (Demo)</a>

### Descrizione del Progetto

Questo progetto è un widget web leggero e configurabile che visualizza un conto alla rovescia (countdown) verso una data specifica. È realizzato in **JavaScript puro (Vanilla JS)** senza dipendenze esterne.

#### Caratteristiche Principali

1.  **Configurazione Esterna (`settings.json`)**:
    *   La logica è completamente disaccoppiata dai dati. Non è necessario modificare il codice JavaScript per cambiare la data dell'evento.
    *   Il file JSON controlla: la data/ora di scadenza, il titolo visualizzato e il messaggio finale di completamento.

2.  **Stile Dinamico e Responsive**:
    *   Il CSS non è in un file separato ma viene iniettato dinamicamente via JavaScript. Questo rende lo script "portabile" e facile da integrare in altre pagine.
    *   Utilizza moderne funzioni CSS come `clamp()` per adattare fluidamente la dimensione del testo (sia del titolo che del timer) in base alla larghezza del dispositivo (viewport), garantendo leggibilità su mobile e desktop.

3.  **Visualizzazione del Tempo**:
    *   Il timer calcola la differenza tra l'ora attuale e quella target.
    *   Il formato visualizzato è **HH:MM:SS** (Ore:Minuti:Secondi). Nota: le ore mostrano il totale cumulativo (es. 48 ore invece di 2 giorni), ideale per eventi a breve termine.

4.  **Feedback Utente**:
    *   **Titolo Pagina**: Il `document.title` (la scritta nella scheda del browser) si aggiorna ogni secondo con il tempo rimanente, permettendo all'utente di monitorare il countdown anche cambiando scheda.
    *   **Fine Evento**: Allo scadere del tempo, il timer si ferma automaticamente e viene mostrato il messaggio di "fine" configurato nel JSON.
