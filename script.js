function set_date_time(){
        // Set default date and time to current date and time
        const dateInput = document.getElementById("date");
        const timeInput = document.getElementById("time");
    
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
    
        dateInput.value = `${year}-${month}-${day}`;
        timeInput.value = `${hours}:${minutes}`;
    
}
set_date_time();

// Path: script.js

document.getElementById('entry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const cost = document.getElementById('cost').value;
    const status = document.querySelector('input[name="status"]:checked').value;
    const note = document.getElementById('note').value;

    const entry = {
        date: date,
        time: time,
        location: location,
        cost: cost,
        status: status,
        note: note
    };

    // Fetch request to write data to calendar.json
    fetch('calendar.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    })
    .then(response => {
        if (response.ok) {
            console.log('Data saved successfully');
            // Clear the form after successful submission
            document.getElementById('entry-form').reset();
        } else {
            console.error('Failed to save data');
        }
    })
    .catch(error => console.error('Error:', error));
});
