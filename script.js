document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const navigation = document.getElementById('navigation');
    const menuLinks = document.querySelectorAll('#navigation a');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const backToTop = document.getElementById('backToTop');


    burger.addEventListener('click', function () {
        navigation.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const targetPosition = targetSection.offsetTop - headerHeight + 10;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            navigation.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function () {
        header.style.boxShadow = window.scrollY > 50 ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : '0px 5px 5px rgba(0, 0, 0, 0.1)';

        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
        nextArrow: '<button type="button" class="slick-next">&gt;</button>',
        responsive: [
            {
                breakpoint: 992, // Tablet
                settings: {
                    // Nasconde le frecce nei tablet
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 576, // Smartphone
                settings: {
                    // Nasconde le frecce nei telefoni
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});


