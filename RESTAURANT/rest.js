// DOM Elements
const donateTodayBtn = document.getElementById('donateTodayBtn');
const initView = document.getElementById('initView');
const mapView = document.getElementById('mapView');

const popupOverlay = document.getElementById('popupOverlay');
const closeFormBtn = document.getElementById('closeFormBtn');
const donationForm = document.getElementById('donationForm');

const mapContainer = document.getElementById('myMapContainer');
const mapFullscreenBtn = document.getElementById('mapFullscreenBtn');
const fullscreenIcon = document.getElementById('fullscreenIcon');
const displayPickup = document.getElementById('displayPickup');

// Workflow 1: Click "Donate today!" to show pop-up
donateTodayBtn.addEventListener('click', () => {
    // Reset form fields
    document.getElementById('foodType').value = '';
    document.getElementById('approxWeight').value = '';
    document.getElementById('address').value = '';
    popupOverlay.classList.add('active');
});

// Close Pop-up
closeFormBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
});

// Workflow 2: Fill form, click Confirm -> Show Map and Driver details below
donationForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    // Get the address to display in the driver details below
    const addressInput = document.getElementById('address').value;
    displayPickup.innerText = addressInput;

    // Hide Overlay
    popupOverlay.classList.remove('active');

    // Switch Views
    initView.classList.add('view-hidden');
    mapView.classList.remove('view-hidden');
    
    // In a real app, you would make an API call here to assign a driver
    console.log("Donation submitted. Showing map and assigned driver.");
});

// Workflow 3: Fullscreen Map Button Functionality
mapFullscreenBtn.addEventListener('click', () => {
    mapContainer.classList.toggle('is-fullscreen');

    if (mapContainer.classList.contains('is-fullscreen')) {
        fullscreenIcon.innerText = "fullscreen_exit";
        // To prevent scrolling of the background while map is full screen
        document.body.style.overflow = "hidden"; 
    } else {
        fullscreenIcon.innerText = "fullscreen";
        document.body.style.overflow = "auto";
    }
});

