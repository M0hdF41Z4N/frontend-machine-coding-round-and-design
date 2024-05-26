
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("rating-value");
  
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        const rating = parseInt(star.getAttribute("data-rating"));
        ratingValue.textContent = "Rating: " + rating;
        stars.forEach(function(s, index) {
          if (index < rating) {
            s.classList.add("active");
          } else {
            s.classList.remove("active");
          }
        });
      });
    });
  