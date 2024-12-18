// JavaScript Document
// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });

 ScrollReveal({ 
	reset: false,
	distance: '60px',
	duration: 2500,
	delay: 400
});

window.sr = ScrollReveal();

	sr.reveal('.logo', {
		duration: 1000,
		origin: 'bottom',
		distance: '-100px'
		
	});

	sr.reveal('.jumbotron', {
		duration: 1000,
		origin: 'bottom',
		distance: '-100px'
		
	});

	sr.reveal('.jumbotron-fluid', {
		duration: 1000,
		origin: 'bottom',
		distance: '-100px'
		
	});

	sr.reveal('.mod1_intro', {
		duration: 3000,
		origin: 'right',
		distance: '100px',
		delay: 1000
	});

	sr.reveal('.mod1_intro_img', {
		duration: 3000,
		origin: 'bottom',
		distance: '100px',
		delay: 500,
	});
	
	sr.reveal('.mod2_intro', {
		duration: 3000,
		origin: 'left',
		distance: '100px',
		delay: 0
	});

	sr.reveal('.mod2_intro_img', {
		duration: 3000,
		origin: 'right',
		distance: '60px',
		delay: 500,
	});

	sr.reveal('.mod3_intro', {
		duration: 3000,
		origin: 'left',
		distance: '100px',
		delay: 0
	});

	sr.reveal('.mod3_intro_img', {
		duration: 3000,
		origin: 'bottom',
		distance: '60px',
		delay: 500,
	});

	sr.reveal('.mod4_intro', {
		duration: 3000,
		origin: 'right',
		distance: '100px',
		delay: 0
	});

	sr.reveal('.mod4_intro_img', {
		duration: 3000,
		origin: 'bottom',
		distance: '60px',
		delay: 500,
	});

	sr.reveal('.mod5_intro', {
		duration: 3000,
		origin: 'right',
		distance: '100px',
		delay: 0
	});

	sr.reveal('.mod5_intro_img', {
		duration: 3000,
		origin: 'bottom',
		distance: '60px',
		delay: 500,
	});

	sr.reveal('.navbar-container', {
		duration: 1000,
		origin: 'bottom',
		distance: '-100px'
		
	});

	sr.reveal('.subtitulo1 ', {
		duration: 1000,
		origin: 'bottom',
		distance: '-100px',
		delay: 800
		
	});

	sr.reveal('.subtitulo1_img ', {
		duration: 1000,
		origin: 'top',
		distance: '-60px',
		delay: 1000
		
	});

	sr.reveal('.intro2 ', {
		duration: 3000,
		origin: 'bottom',
		distance: '-100px',
		delay: 1000
		
	});

	sr.reveal('.intro3 ', {
		duration: 1500,
		origin: 'bottom',
		distance: '-100px',
		delay: 500
		
	});

	sr.reveal('.contenido ', {
		duration: 3000,
		origin: 'top',
		distance: '100px',
		delay: 1000
		
	});
	
	sr.reveal('.carrusel ', {
		duration: 3000,
		origin: 'left',
		distance: '100px',
		delay: 0
		
	});

	sr.reveal('.subsection1 ', {
		duration: 2000,
		origin: 'left',
		distance: '60px',
		delay: 0
		
	});

	sr.reveal('.nota ', {
		duration: 2000,
		origin: 'bottom',
		distance: '120px',
		delay: 0
		
	});

	sr.reveal('.actor1', {
		duration: 2000,
		origin: 'right',
		distance: '100px',
		delay: 500
	});

	sr.reveal('.actor2', {
		duration: 2000,
		origin: 'left',
		distance: '100px',
		delay: 1000
	});

	sr.reveal('.actor3', {
		duration: 2000,
		origin: 'bottom',
		distance: '100px',
		delay: 500
	});
	
	sr.reveal('.s1', {
		duration: 2000,
		origin: 'left',
		distance: '300px',
		delay: 500
	});

	sr.reveal('.s2', {
		duration: 2000,
		origin: 'right',
		distance: '100px',
		delay: 800
	});

	sr.reveal('.s3', {
		duration: 2000,
		origin: 'left',
		distance: '300px',
		delay: 2000
	});
	
	sr.reveal('.s4', {
		duration: 2000,
		origin: 'bottom',
		distance: '300px',
		delay: 1000
	});

	sr.reveal('.s5', {
		duration: 2000,
		origin: 'left',
		distance: '300px',
		delay: 500
	});

	sr.reveal('.s6', {
		duration: 2000,
		origin: 'bottom',
		distance: '300px',
		delay: 1000
	});

	sr.reveal('.card1', {
		duration: 2000,
		origin: 'bottom',
		distance: '200px',
		delay: 1000
	});
	
	sr.reveal('.card2', {
		duration: 2000,
		origin: 'top',
		distance: '200px',
		delay: 1000
	});

	sr.reveal('.card3', {
		duration: 2000,
		origin: 'bottom',
		distance: '200px',
		delay: 1000
	});

	sr.reveal('.card4', {
		duration: 2000,
		origin: 'top',
		distance: '200px',
		delay: 1000
	});

	sr.reveal('.anima1', {
		duration: 2000,
		origin: 'left',
		distance: '200px',
		delay: 3000
	});

	sr.reveal('.anima2', {
		duration: 2000,
		origin: 'right',
		distance: '200px',
		delay: 3000
	});
	




const choiceArray = document.querySelectorAll(".choice")

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        choiceArray.forEach((element) => {
            element.classList.remove("expand","expand2")
            element.classList.add('unset')
        })
        card.classList.remove("unset")
        card.classList.add('expand')
    });
});


const choiceah2Array = document.querySelectorAll(".choiceah2")

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        choiceArray.forEach((element) => {
            element.classList.remove("expand","expand2")
            element.classList.add('unsetah2')
        })
        card.classList.remove("unsetah2")
        card.classList.add('expand')
    });
});


function animateCard(carda) {
    carda.classList.add('hidden');
  }

var prevScrollpos = window.pageYOffset;
		 window.onscroll = function() {
  		var currentScrollPos = window.pageYOffset;
  		if (prevScrollpos > currentScrollPos) {
    	document.getElementById("menuprincipal").style.top = "0";
			document.getElementById("menuprincipal").style.opacity = "1";
  } else {
    document.getElementById("menuprincipal").style.top = "-100px";
			document.getElementById("menuprincipal").style.opacity = "1";
  }
  prevScrollpos = currentScrollPos;
}
		 
		 
