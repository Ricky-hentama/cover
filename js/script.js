const initiGaleri = document.querySelector(".inti-galeri");
const jumbo = document.querySelector(".jumbo");

initiGaleri.addEventListener("click", function(e) {
  if (e.target.className == "mini") {
    console.log((jumbo.src = e.target.src));
  }
});

$(".about").mouseenter(function() {
  $("section div .lorem").fadeIn(750);
});
$(".about").mouseleave(function() {
  $("section div .lorem").fadeOut(1000);
});
