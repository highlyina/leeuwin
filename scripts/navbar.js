var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-6rem";
	}
	prevScrollpos = currentScrollPos;
}

/* Open */
function openNav() {
  document.getElementById("nav__overlay").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("nav__overlay").style.height = "0%";
}

function scrollToProjects() {
	document.getElementById("nav__overlay").style.height = "0%";
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
	document.getElementById("nav__overlay").style.height = "0%";
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
}