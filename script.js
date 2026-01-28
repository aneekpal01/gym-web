window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Simple mobile menu toggle (optional, if you want to expand later)
const hamburger = document.querySelector('.hamburger');
/* 
hamburger.addEventListener('click', () => {
    // Toggle mobile menu logic here
}); 
*/

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultValue = document.getElementById('bmi-value');
    const resultCategory = document.getElementById('bmi-category');

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        resultValue.innerText = bmi;

        if (bmi < 18.5) {
            resultCategory.innerText = "UNDERWEIGHT - EAT MORE";
            resultCategory.style.color = "#00ffff";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultCategory.innerText = "NORMAL - KEEP GRINDING";
            resultCategory.style.color = "#ccff00";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultCategory.innerText = "OVERWEIGHT - HIT THE CARDIO";
            resultCategory.style.color = "#ffaa00";
        } else {
            resultCategory.innerText = "OBESE - TIME TO CHANGE";
            resultCategory.style.color = "#ff0000";
        }
    } else {
        alert("Please enter both weight and height!");
    }
}

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('TRANSMISSION SENT. WE WILL CONTACT YOU.');
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Modal Logic
const modal = document.getElementById('trialModal');
const closeModal = document.querySelector('.close-modal');
const trialForm = document.getElementById('trialForm');

// Show modal after 5 seconds
setTimeout(() => {
    if (modal) modal.style.display = 'flex';
}, 5000);

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('3-DAY PASS ACTIVATED! CHECK YOUR SMS.');
        modal.style.display = 'none';
    });
}
