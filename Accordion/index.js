document.addEventListener("DOMContentLoaded", function() {
    var accordionHeaders = document.querySelectorAll(".accordion-header");
    
    accordionHeaders.forEach(function(header) {
      header.addEventListener("click", function() {
        var accordionItem = this.parentElement;
        var content = accordionItem.querySelector(".accordion-content");
        
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
  