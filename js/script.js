const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode')
});

// Select all anchor links with a hash (#)
const navLinks =document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();    //Stop the default jump behavior

        //Get the target element to scroll to 
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement){
            //Scroll to the target element smoothly
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            //optional: stop observing once it's visible to save performance
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 //Triggers when 10% of the element is visible
});

hiddenElements.forEach(el => observer.observe(el));