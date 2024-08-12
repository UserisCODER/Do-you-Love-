document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const responseMessage = document.getElementById('responseMessage');
    const yesButton = document.getElementById('yesButton');

    noButton.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener('click', () => {
        responseMessage.textContent = 'Thank you for saying yes! Here are some interesting secrets about your partner: They love surprises, appreciate kindness, and have a deep sense of loyalty.';
        responseMessage.style.color = '#4CAF50';
    });

    noButton.addEventListener('click', () => {
        responseMessage.textContent = 'Oh, that’s okay! But I bet you’re curious about some interesting facts about your partner, aren’t you?';
        responseMessage.style.color = '#f44336';
    });
});
