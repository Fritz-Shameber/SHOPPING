function createFirework() {
    let firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Random position
    firework.style.top = `${Math.random() * 100}vh`;
    firework.style.left = `${Math.random() * 100}vw`;
    
    document.body.appendChild(firework);
    
    // Remove the firework after the animation
    setTimeout(() => firework.remove(), 1000);
}

// Trigger fireworks every 0.5s (for demo purposes)
setInterval(createFirework, 500);
