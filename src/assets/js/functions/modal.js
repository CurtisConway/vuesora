export default (function(){
    const modalTriggers = document.querySelectorAll('[data-open-modal]');
    const modalDialogs = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Add event listeners to every trigger button
    Array.from(modalTriggers).forEach(trigger => {
        trigger.addEventListener('click', openModal)
    });

    // Add Event Listeners to every close button
    Array.from(closeButtons).forEach(button => {
        button.addEventListener('click', closeModal);
    });

    function openModal(event){
        const buttonClicked = event.target;
        const modalId = buttonClicked.dataset['openModal'];
        const modalToOpen = document.getElementById(modalId);

        event.stopPropagation();

        if(modalToOpen){
            appendBackgroundOverlay();

            modalToOpen.classList.add('active');
        }
        else {
            console.error('Modal Error - Could not find modal with the ID: "' + modalId +  '"');
        }
    }

    function closeModal(){
        const modalOverlay = document.getElementById('modalOverlay');

        // Remove the event listeners from the overlay and remove it from the DOM
        modalOverlay.removeEventListener('click', closeModal);
        document.body.removeChild(modalOverlay);

        // Remove the active class from all Modals (easier than finding the specific one open)
        Array.from(modalDialogs).forEach(dialog => {
            dialog.classList.remove('active');
        });
    }

    function appendBackgroundOverlay(){
        const modalOverlay = document.createElement('div');

        // Add ID to overlay
        modalOverlay.setAttribute('id', 'modalOverlay');

        // Append to the DOM
        document.body.appendChild(modalOverlay);

        // Add active class to fade in
        modalOverlay.classList.add('active');

        // Add an event listener
        modalOverlay.addEventListener('click', closeModal);
    }
})();