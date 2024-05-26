
const showMoreText = document.getElementById('show-more');
const ceoSection = document.getElementById('ceo-section');
const showMoreParaButton = document.getElementById('show-more-button');
const showMore = ()=>{
    if(showMoreText.style.display === 'block'){
        showMoreText.style.display = 'none';
        ceoSection.style.height = '600px';
    }
    else{
        showMoreText.style.display = 'block';
        ceoSection.style.height = '1600px';

    }
}
showMoreParaButton.addEventListener('click',showMore);

const rightButton = document.getElementById('button-right');
const leftButton = document.getElementById('button-left');
const testimonialFirst = document.getElementById('testimonial-container1');
const testimonialSecond = document.getElementById('testimonial-container2');
const testimonialThird = document.getElementById('testimonial-container3');
const testimonialFourth = document.getElementById('testimonial-container4');
const testimonialFifth = document.getElementById('testimonial-container5');
const testimonialSixth = document.getElementById('testimonial-container6');
const testimonialSeventh = document.getElementById('testimonial-container7');
rightButton.addEventListener('click', function() {
    const testimonials = [
        testimonialFirst,
        testimonialSecond,
        testimonialThird,
        testimonialFourth,
        testimonialFifth,
        testimonialSixth,
        testimonialSeventh
    ];

    let currentIndex = testimonials.findIndex(testimonial => testimonial.style.display === 'block');
    testimonials.forEach(testimonial => testimonial.style.display = 'none');

    if (currentIndex === -1 || currentIndex === testimonials.length - 1) {
        testimonials[1].style.display = 'block'; 
    }
    else{
        testimonials[currentIndex + 1].style.display = 'block';
    }
});

leftButton.addEventListener('click', function() {
    const testimonials = [
        testimonialFirst,
        testimonialSecond,
        testimonialThird,
        testimonialFourth,
        testimonialFifth,
        testimonialSixth,
        testimonialSeventh
    ];

    let currentIndex = testimonials.findIndex(testimonial => testimonial.style.display === 'block');
    console.log('Current Index:', currentIndex); // Debugging

    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = 'none';
        console.log(`Testimonial ${index + 1} display set to none`); // Debugging
    });

    if (currentIndex === -1 || currentIndex === 0) {
        testimonials[testimonials.length - 1].style.display = 'block'; // Show the last testimonial
        console.log('Displaying last testimonial'); // Debugging
    } else {
        testimonials[currentIndex - 1].style.display = 'block'; // Show the previous testimonial
        console.log(`Displaying testimonial ${currentIndex}`); // Debugging
    }
});


const paginationButton1 = document.getElementById("pagination-button1");
const paginationButton2 = document.getElementById("pagination-button2");
const trainingImage1 = document.getElementById("training-image1");
const trainingImage2 = document.getElementById("training-image2");
const seminarImage2 = document.getElementById("seminar-image2");
paginationButton1.addEventListener('click', ()=>{

trainingImage1.style.animationName = 'scaleup';
trainingImage2.style.animationName = 'slideright';
paginationButton2.style.background = ' rgb(61, 57, 57)';
paginationButton1.style.background = 'white';

 
});

paginationButton2.addEventListener('click', ()=>{
    // trainingImage2.style.display = 'block';
    trainingImage1.style.animationName = 'scaledown';
    trainingImage2.style.animationName = 'slideleft';
    paginationButton1.style.background = ' rgb(61, 57, 57)';
    paginationButton2.style.background = 'white';
  
    });

    const mobileButton = document.getElementById("mobile-button");
    const frontendButton = document.getElementById("frontend-button");
    const backendButton = document.getElementById("backend-button");
    const databaseButton = document.getElementById("database-button");
    const logosContainersContainer1 = document.getElementById("logos-containers-container1");
    const logosContainersContainer2 = document.getElementById("logos-containers-container2");
    const logosContainersContainer3 = document.getElementById("logos-containers-container3");
    const logosContainersContainer4 = document.getElementById("logos-containers-container4");
    const toSlideLogo1 = document.getElementById('to-flex-logos1');
    const toSlideLogo2 = document.getElementById('to-flex-logos2');
    const toSlideLogo3 = document.getElementById('to-flex-logos3');
    const toSlideLogo4 = document.getElementById('to-flex-logos4');
    mobileButton.addEventListener('click', () => {
   
        logosContainersContainer1.style.display = 'block';
        logosContainersContainer2.style.display = 'none';
        logosContainersContainer3.style.display = 'none';
        logosContainersContainer4.style.display = 'none';
        mobileButton.style.color = ' rgb(3, 164, 237)';
        mobileButton.style.borderBottom = '2px solid  rgb(3, 164, 237)';
        databaseButton.style.color = 'white';
        databaseButton.style.borderBottom = 'none';
        backendButton.style.color = 'white';
        backendButton.style.borderBottom = 'none';
        frontendButton.style.color = 'white';
        frontendButton.style.borderBottom = 'none';
        if (window.getComputedStyle(logosContainersContainer2).display === 'block' ||
            window.getComputedStyle(logosContainersContainer3).display === 'block' ||
            window.getComputedStyle(logosContainersContainer4).display === 'block') {
            toSlideLogo1.style.animationName = 'nav-slide-right';
    
        } else {
            toSlideLogo1.style.animationName = 'nav-slide-left';
    
        }
    });
    
    frontendButton.addEventListener('click', () => {
        
        if (window.getComputedStyle(logosContainersContainer3).display === 'block' ||
            window.getComputedStyle(logosContainersContainer4).display === 'block') {
            toSlideLogo2.style.animationName = 'nav-slide-left';
        } else if(  logosContainersContainer1.style.display !== 'none') {
            toSlideLogo2.style.animationName = 'nav-slide-right';
        }
        logosContainersContainer1.style.display = 'none';
        logosContainersContainer2.style.display = 'block';
        logosContainersContainer3.style.display = 'none';
        logosContainersContainer4.style.display = 'none';
        mobileButton.style.color = 'white';
        mobileButton.style.borderBottom = 'none';
        databaseButton.style.color = 'white';
        databaseButton.style.borderBottom = 'none';
        backendButton.style.color = 'white';
        backendButton.style.borderBottom = 'none';
        frontendButton.style.color = ' rgb(3, 164, 237)';
        frontendButton.style.borderBottom = '2px solid  rgb(3, 164, 237)';
    });
    
    backendButton.addEventListener('click', () => {
        if (window.getComputedStyle(logosContainersContainer4).display === 'block') {
            toSlideLogo3.style.animationName = 'nav-slide-left';
        } else {
            toSlideLogo3.style.animationName = 'nav-slide-right';
        }
        logosContainersContainer1.style.display = 'none';
        logosContainersContainer2.style.display = 'none';
        logosContainersContainer3.style.display = 'block';
        logosContainersContainer4.style.display = 'none';
        mobileButton.style.color = 'white';
        mobileButton.style.borderBottom = 'none';
        frontendButton.style.color = 'white';
        frontendButton.style.borderBottom = 'none';
        databaseButton.style.color = 'white';
        databaseButton.style.borderBottom = 'none';
        backendButton.style.color = ' rgb(3, 164, 237)';
        backendButton.style.borderBottom = '2px solid  rgb(3, 164, 237)';
        
    
    });
    
    databaseButton.addEventListener('click', () => {
          
        
        logosContainersContainer1.style.display = 'none';
        logosContainersContainer2.style.display = 'none';
        logosContainersContainer3.style.display = 'none';
        logosContainersContainer4.style.display = 'block';
        toSlideLogo4.style.animationName = 'nav-slide-right';
        mobileButton.style.color = 'white';
        mobileButton.style.borderBottom = 'none';
        frontendButton.style.color = 'white';
        frontendButton.style.borderBottom = 'none';
        backendButton.style.color = 'white';
        backendButton.style.borderBottom = 'none';
        databaseButton.style.color = ' rgb(3, 164, 237)';
        databaseButton.style.borderBottom = '2px solid rgb(3, 164, 237)';
    });
    