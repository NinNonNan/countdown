# Countdown Widget

[Leggilo in italiano 🇮🇹](README.md)

<a href="https://ninonononano.github.io/countdown/" target="_blank">Go to the countdown (Demo)</a>

### Project Description

This project is a lightweight and configurable web widget that displays a countdown to a specific date. It is built in **pure JavaScript (Vanilla JS)** with no external dependencies.

#### Main Features

1.  **External Configuration (`settings.json`)**:
    *   Logic is completely decoupled from data. No need to modify JavaScript code to change the event date.
    *   The JSON file controls: the target date/time, the displayed title, and the completion message.

2.  **Dynamic and Responsive Style**:
    *   CSS is not in a separate file but injected dynamically via JavaScript. This makes the script "portable" and easy to integrate into other pages.
    *   It uses modern CSS functions like `clamp()` to fluidly adapt text size (both title and timer) based on device width (viewport), ensuring readability on mobile and desktop.

3.  **Time Display**:
    *   The timer calculates the difference between the current time and the target time.
    *   The displayed format is **HH:MM:SS** (Hours:Minutes:Seconds). Note: hours show the cumulative total (e.g., 48 hours instead of 2 days), ideal for short-term events.

4.  **User Feedback**:
    *   **Page Title**: The `document.title` (browser tab text) updates every second with the remaining time, allowing the user to monitor the countdown even when switching tabs.
    *   **Event End**: When time runs out, the timer stops automatically, and the "end" message configured in the JSON is displayed.