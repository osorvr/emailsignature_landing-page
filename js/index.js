// Function used to shrink nav bar removing paddings and adding black background
$ (window).scroll (function () {
  if ($ (document).scrollTop () > 1) {
    $ ('.nav').addClass ('affix');
    console.log ('OK');
  } else {
    $ ('.nav').removeClass ('affix');
  }
});

// Navigation Bar **Has The Animations Open/Close
$ ('.menu').click (function () {
  $ (this).toggleClass ('active');
  console.log ('Clicked menu');
  $ ('#mainListDiv').toggleClass ('show_list');
  $ ('#mainListDiv').fadeIn ();
  $ ('#navBg').toggleClass ('bgColor');
});

// Nav Links On Scroll **links Stay Active As you Scroll Througth Block/Sections
const sections = document.querySelectorAll ('section');
const navLi = document.querySelectorAll ('nav .container ul li');
window.onscroll = () => {
  var current = '';

  sections.forEach (section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute ('id');
    }
  });

  navLi.forEach (li => {
    li.classList.remove ('active');
    if (li.classList.contains (current)) {
      li.classList.add ('active');
    }
  });
};
