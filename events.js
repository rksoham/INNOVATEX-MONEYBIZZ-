// Example of an interactive message notification alert
document.addEventListener("DOMContentLoaded", function () {
    const notificationIcon = document.querySelector('.nav-icons a[href="#notifications"]');
    const notificationPopup = document.createElement('div');

    notificationPopup.className = "notification-popup";
    notificationPopup.innerHTML = `
      <h4>New Notifications</h4>
      <p>You have 3 new messages.</p>
    `;
    notificationPopup.style.position = 'absolute';
    notificationPopup.style.backgroundColor = '#fff';
    notificationPopup.style.border = '1px solid #ccc';
    notificationPopup.style.padding = '10px';
    notificationPopup.style.borderRadius = '5px';
    notificationPopup.style.display = 'none';
    notificationPopup.style.zIndex = '1000';

    document.body.appendChild(notificationPopup);

    notificationIcon.addEventListener('mouseenter', () => {
        const rect = notificationIcon.getBoundingClientRect();
        notificationPopup.style.top = `${rect.bottom + 5}px`;
        notificationPopup.style.left = `${rect.left}px`;

        notificationPopup.style.display = 'block';
    });

    notificationIcon.addEventListener('mouseleave', () => {
        notificationPopup.style.display = 'none';
    });
});