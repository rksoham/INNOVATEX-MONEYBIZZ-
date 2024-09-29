const eventForm = document.getElementById('event-form');

eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const eventTitle = document.getElementById('event-title').value;
    const eventDescription = document.getElementById('event-description').value;
    const eventDate = document.getElementById('event-date').value;
    const sponsorsNeeded = document.getElementById('sponsors-needed').value;

    // Simple alert for demonstration (you can send data to backend later)
    alert(`Event Posted!\nTitle: ${eventTitle}\nDescription: ${eventDescription}\nDate: ${eventDate}\nSponsors Needed: ${sponsorsNeeded}`);
});
