window.addEventListener("scroll", reveal);
      window.addEventListener("load", page);

      function reveal() {
        var reveals = document.querySelectorAll(".card");

        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      function page() {
        var pages = document.querySelectorAll(".page");

        for (var i = 0; i < pages.length; i++) {
          var windowheight = window.innerHeight;
          var pagetop = pages[i].getBoundingClientRect().top;
          var pagepoint = 150;

          if (pagetop < windowheight - pagepoint) {
            pages[i].classList.add("active");
          } else {
            pages[i].classList.remove("active");
          }
        }
      }