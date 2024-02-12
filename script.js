heart.addEventListener('click', () => {
    // Create note element
    const note = document.createElement('div');
    note.classList.add('note');

    // Create a paragraph element
    const message = document.createElement('p');
    message.textContent = 'a gift for Khanh_Linh !!!';
    message.style.textAlign = 'center';
    message.style.marginTop = '50%';

    // Append the message to the note
    note.appendChild(message);

    // Append the note to the body
    document.body.appendChild(note);

    // Move the heart to the bottom center of the page
    const pageHeight = document.documentElement.scrollHeight;
    const heartRect = heart.getBoundingClientRect();
    const heartClone = heart.cloneNode(true);
    heartClone.style.position = 'absolute';
    heartClone.style.bottom = '-40px'; 
    heartClone.style.left = '50%';
    heartClone.style.transform = 'translateX(-50%)';
    note.appendChild(heartClone); 

    note.addEventListener('animationend', () => {
        note.style.animation = 'none';
    });
});
