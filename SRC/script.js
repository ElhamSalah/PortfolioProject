document.addEventListener('DOMContentLoaded', function () {
	const hamb = document.querySelector('.custom-hamburger');
	const nav = document.getElementById('navbarNav');
	if (!hamb || !nav) return;

	hamb.addEventListener('click', function () {
		hamb.classList.toggle('open');
		nav.classList.toggle('show');
		const expanded = hamb.getAttribute('aria-expanded') === 'true';
		hamb.setAttribute('aria-expanded', (!expanded).toString());
	});

	
	document.addEventListener('click', function (e) {
		if (!nav.classList.contains('show')) return;
		if (hamb.contains(e.target) || nav.contains(e.target)) return;
		hamb.classList.remove('open');
		nav.classList.remove('show');
		hamb.setAttribute('aria-expanded', 'false');
	});
});

  // Light Mode
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const htmlTag = document.documentElement;
const profileImages = document.querySelectorAll('#profile-image img, .about-img');
themeBtn.addEventListener('click', () => {
  const currentTheme = htmlTag.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  

  htmlTag.setAttribute('data-bs-theme', newTheme);
  

  themeIcon.className = newTheme === 'dark' ? 'bx bx-moon fs-4' : 'bx bx-sun fs-4';
  

  profileImages.forEach(img => {
    img.src = newTheme === 'dark' ? 'Images/profile1.jpg' : 'Images/profile-light.png';
  });
  
 
  localStorage.setItem('theme', newTheme);
});


const savedTheme = localStorage.getItem('theme') || 'dark';
htmlTag.setAttribute('data-bs-theme', savedTheme);
themeIcon.className = savedTheme === 'dark' ? 'bx bx-moon fs-4' : 'bx bx-sun fs-4';


profileImages.forEach(img => {
  img.src = savedTheme === 'dark' ? 'Images/profile1.jpg' : 'Images/profile.jpg';
});
