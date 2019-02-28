<script>

var link = document.querySelector(".booking-search");
var popup = document.querySelector(".popup-modal");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toogle("popup-modal");
});
</script>
