const supplyContainer = document.getElementById('supplyContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

const supplyItems = ['firstSupply', 'secondSupply', 'thirdSupply', 'fourthSupply', 'fifthSupply'];

supplyItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('supply-item');
    div.innerHTML = item;

    // Create three nested divs inside each supply-item div
    for (let i = 1; i <= 3; i++) {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add(`innerDiv${i}`);
        innerDiv.textContent = `Inner Div ${i}`;
        div.appendChild(innerDiv);
    }

    supplyContainer.appendChild(div);
});

let currentSlide = 0;

// Function to show current slide
const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });

    // Update active dot
    const dots = document.querySelectorAll('.dots button');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
};

// Next slide
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Previous slide
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Create dots for each slide
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        showSlide(i);
        currentSlide = i;
    });
    dotsContainer.appendChild(dot);
});