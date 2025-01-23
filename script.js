const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        
    });
},
{
    rootMargin: '0px 0px -20% 0px',
    threshold: 0.2,
}
);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

