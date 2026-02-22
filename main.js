document.getElementById('generate').addEventListener('click', function() {
    const container = document.getElementById('numbers');
    container.innerHTML = '';
    
    let numbers = [];
    while(numbers.length < 6) {
        let r = Math.floor(Math.random() * 45) + 1;
        if(numbers.indexOf(r) === -1) numbers.push(r);
    }
    
    // Sort numbers for better presentation
    numbers.sort((a, b) => a - b);
    
    numbers.forEach((num, index) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'number';
            div.textContent = num;
            container.appendChild(div);
        }, index * 150); // Staggered animation effect
    });
});