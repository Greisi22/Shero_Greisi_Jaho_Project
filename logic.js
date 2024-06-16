const supplyContainer = document.getElementById('supplyContainer');


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.carousel-dots-container .dot');

const supplyItems = [
    { name: 'Apple Watch seria 7', image: 'https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/watchos-10/Apple-WWDC23-watchOS-10-Maps-place-card-230605_inline.jpg.large.jpg' },
    { name: 'Apple Watch seria 10', image: 'https://regen.pk/cdn/shop/files/REGEN-AppleWatchSeries6-Blue.jpg?v=1690977620' },
    { name: 'Apple Watch seria 7', image: 'https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-silver-aluminum-Solo-Loop-olive-230912_inline.jpg.large.jpg' },
    { name: 'Apple Watch seria 10', image: 'https://molla.al/wp-content/uploads/2023/02/czcs_watchse_gps_q422_40mm_starlight_aluminum_starlight_sport_band_pdp_image_position-1_1_1.jpg' },
    { name: 'Apple Watch seria 9', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTkhS8p_A9LleHjSJf9fDlDHd7gSv9M8jawbcq8ARzSamoIU49JslZ2CzHNL8cNDaO6o&usqp=CAU' }
];

supplyItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('supply-item');
    

    const innerDiv1 = document.createElement('div');
    innerDiv1.classList.add('innerDiv1');
    innerDiv1.textContent = item.name;
    
   
    const innerDiv2 = document.createElement('div');
    innerDiv2.classList.add('innerDiv2');
    const img = document.createElement('img');
    img.src = item.image; 
    img.alt = `${item.name} Image`;
    innerDiv2.appendChild(img);
    
    
    const innerDiv3 = document.createElement('div');
    innerDiv3.classList.add('innerDiv3');
    const shopNowBtn = document.createElement('button');
    shopNowBtn.textContent = 'Shop Now';
    shopNowBtn.style.backgroundColor = 'violet'; 
    shopNowBtn.style.color = 'white'; 
    shopNowBtn.style.padding = '8px 15px'; 
    shopNowBtn.style.fontSize = '15px'; 
    shopNowBtn.style.border = 'none'; 
    shopNowBtn.style.cursor = 'pointer'; 
    shopNowBtn.classList.add('btn-hover-effect');

    shopNowBtn.addEventListener('click', () => {
        console.log(`Shop now clicked for ${item}`);
    });
    
    innerDiv3.appendChild(shopNowBtn);
  
    div.appendChild(innerDiv1);
    div.appendChild(innerDiv2);
    div.appendChild(innerDiv3);
    
    supplyContainer.appendChild(div);
});

let currentIndex = 0;

function updateCarousel(index) {
    const carouselSlider = document.querySelector('.carousel-slider');
    const slideWidth = slides[0].clientWidth;
    carouselSlider.style.transform = `translateX(-${index * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateCarousel(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});
