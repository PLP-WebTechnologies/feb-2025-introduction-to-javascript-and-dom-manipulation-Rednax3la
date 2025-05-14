// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const textChangerBtn = document.getElementById('text-changer');
    const changeableText = document.getElementById('changeable-text');
    
    textChangerBtn.addEventListener('click', function() {
        const messages = [
            "Text successfully changed!",
            "You clicked the button!",
            "JavaScript is working!",
            "DOM manipulation in action!",
            "New content loaded dynamically."
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        changeableText.textContent = randomMessage;
    });

    // 2. Modify CSS styles via JavaScript
    const styleChangerBtn = document.getElementById('style-changer');
    const contentBox = document.getElementById('content-box');
    
    let isStyled = false;
    styleChangerBtn.addEventListener('click', function() {
        if (isStyled) {
            contentBox.style.backgroundColor = 'white';
            contentBox.style.color = '#333';
            contentBox.style.border = 'none';
            styleChangerBtn.textContent = 'Change Style';
        } else {
            contentBox.style.backgroundColor = '#e3f2fd';
            contentBox.style.color = '#0d47a1';
            contentBox.style.border = '2px solid #2196f3';
            styleChangerBtn.textContent = 'Reset Style';
        }
        isStyled = !isStyled;
    });

    // 3. Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element');
    const dynamicSection = document.getElementById('dynamic-section');
    
    toggleElementBtn.addEventListener('click', function() {
        const existingMessage = document.querySelector('.special-message');
        
        if (existingMessage) {
            existingMessage.remove();
            toggleElementBtn.textContent = 'Show Special Message';
        } else {
            const newMessage = document.createElement('div');
            newMessage.className = 'special-message highlight';
            newMessage.innerHTML = `
                <h3>✨ Special Message ✨</h3>
                <p>This element was added dynamically using JavaScript!</p>
                <p>Click the button again to remove me.</p>
            `;
            dynamicSection.appendChild(newMessage);
            toggleElementBtn.textContent = 'Remove Special Message';
        }
    });
});
