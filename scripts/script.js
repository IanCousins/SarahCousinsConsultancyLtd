window.addEventListener('scroll', function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 800);
  });


function changeNavColor(){
    alert("hello");
    // $('nav').toggleClass('scrolled', $(this).scrollTop() > 800);
};

// $(window).scroll(function(){
// $('nav').toggleClass('scrolled', $(this).scrollTop() > 800);
// });