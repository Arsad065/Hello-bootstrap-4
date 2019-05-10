(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict';

    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('user');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            validate();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  //login
  // Below function Executes on click of login button.
  function validate() {
    var username = document.getElementById("exampleInputEmail").value;
    var password = document.getElementById("exampleInputPassword").value;
    if (username == "admin@nw.com" && password == "1234567") {
      alert("Login successfully");
      window.location = "index.html"; // Redirecting to other page.
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      if (username == "admin@nw.com") {
        alert("Password incorrect");
      } else {
        alert("Email incorrect");
      }
    }
  }

  //total No. index page
  $(function () {
    $.get("data/products.json", function (data, status) {
      if (status == 'success') {
        var count = Object.keys(data).length;
        $('#prodlist').append(count);
      }
    });
    $.get("data/customers.json", function (data, status) {
      if (status == 'success') {
        var count = Object.keys(data).length;
        $('#custlist').append(count);
      }
    });
    $.get("data/suppliers.json", function (data, status) {
      if (status == 'success') {
        var count = Object.keys(data).length;
        $('#supplist').append(count);
      }
    });
    $.get("data/orders.json", function (data, status) {
      if (status == 'success') {
        var count = Object.keys(data).length;
        $('#orderlist').append(count);
      }
    });

  });

  $(function () {
    $.get("data/customers.json", function (data, status) {
      if (status == 'success') {
        var Searchs = data;
        // var tableHead = '<thead><tr><th>ID</th><th>Name</th><th>Contact Name</th><th>Contact Title</th></tr></thead>'

        // $('#datalist').append(tableHead);
        for (var index in Searchs) {
          var Search = Searchs[index];
          var tableRow = '<tbody><tr><td><a href="custdetail.html">' + Search.customerID + '</a></td><td>' + Search.companyName + '</td><td>' + Search.contactName + '</td><td>' + Search.contactTitle + '</td></tr></tbody>'
          $('#datalist').append(tableRow);
        }
      }
    });
  });

  // $(document).ready(function () {
  //   $('#datalist').DataTable();
  // });

})(jQuery); // End of use strict
