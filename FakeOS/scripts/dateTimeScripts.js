function updateDateTime() {
    const now = new Date();

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };
    const dateOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}


updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);