(function(n){function u(t){n.readyState==="complete"?t():n.addEventListener("DOMContentLoaded",t)}function f(){t=[].slice.call(n.querySelectorAll("[aos]"));e();r();n.addEventListener("scroll",r)}function e(){t.forEach(function(n){n.style.visibility="hidden"})}function r(){t.forEach(function(n){if(n.style.visibility==="hidden"&&n.getBoundingClientRect().top-window.innerHeight*.8<=0){var t=n.getAttribute("aos");n.style.visibility="visible";n.classList.add("animated",t==="random"?i[Math.floor(Math.random()*i.length)]:t)}})}var t,i=["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","flip","flipInX","flipInY","lightSpeedIn","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","slideInUp","slideInDown","slideInLeft","slideInRight","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","hinge","rollIn"];u(f)})(document);
