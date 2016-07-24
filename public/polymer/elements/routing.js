'use strict';

window.addEventListener('WebComponentsReady', function () {

  // We use Page.js for routing. This is a Micro
  // client-side router inspired by the Express router
  // More info: https://visionmedia.github.io/page.js/

  // Removes end / from app.baseUrl which page.base requires for production
  if (window.location.port === '') {
    // if production
    page.base(app.baseUrl.replace(/\/$/, ''));
  }

  // Middleware
  function scrollToTop(ctx, next) {
    app.scrollPageToTop();
    next();
  }

  function closeDrawer(ctx, next) {
    app.closeDrawer();
    next();
  }

  function setFocus(selected) {
    document.querySelector('section[data-route="' + selected + '"] .page-title').focus();
  }

  // Routes
  page('*', scrollToTop, closeDrawer, function (ctx, next) {
    next();
  });

  page(app.baseUrl, function () {
    app.route = 'home';
    setFocus(app.route);
  });

  page(app.baseUrl + 'home', function () {
    app.route = 'home';
    setFocus(app.route);
  });

  page(app.baseUrl + 'order', function () {
    app.route = 'order';
    setFocus(app.route);
  });

  page(app.baseUrl + 'sales', function () {
    app.route = 'sales';
    setFocus(app.route);
  });

  // 404
  page(app.baseUrl + '*', function () {
    app.$.toast.text = 'Can\'t find: ' + window.location.href + '. Redirected you to Home Page';
    app.$.toast.show();
    page.redirect(app.baseUrl + 'home');
  });

  // add #! before urls
  page({
    hashbang: true
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3JvdXRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLGdCQUFQLENBQXdCLG9CQUF4QixFQUE4QyxZQUFXOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFJLE9BQU8sUUFBUCxDQUFnQixJQUFoQixLQUF5QixFQUE3QixFQUFpQztBQUFHO0FBQ2xDLFNBQUssSUFBTCxDQUFVLElBQUksT0FBSixDQUFZLE9BQVosQ0FBb0IsS0FBcEIsRUFBMkIsRUFBM0IsQ0FBVjtBQUNEOztBQUVEO0FBQ0EsV0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCLElBQTFCLEVBQWdDO0FBQzlCLFFBQUksZUFBSjtBQUNBO0FBQ0Q7O0FBRUQsV0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCLElBQTFCLEVBQWdDO0FBQzlCLFFBQUksV0FBSjtBQUNBO0FBQ0Q7O0FBRUQsV0FBUyxRQUFULENBQWtCLFFBQWxCLEVBQTJCO0FBQ3pCLGFBQVMsYUFBVCxDQUF1Qix5QkFBeUIsUUFBekIsR0FBb0MsZ0JBQTNELEVBQTZFLEtBQTdFO0FBQ0Q7O0FBRUQ7QUFDQSxPQUFLLEdBQUwsRUFBVSxXQUFWLEVBQXVCLFdBQXZCLEVBQW9DLFVBQVMsR0FBVCxFQUFjLElBQWQsRUFBb0I7QUFDdEQ7QUFDRCxHQUZEOztBQUlBLE9BQUssSUFBSSxPQUFULEVBQWtCLFlBQVc7QUFDM0IsUUFBSSxLQUFKLEdBQVksTUFBWjtBQUNBLGFBQVMsSUFBSSxLQUFiO0FBQ0QsR0FIRDs7QUFLQSxPQUFLLElBQUksT0FBSixHQUFjLE1BQW5CLEVBQTJCLFlBQVc7QUFDcEMsUUFBSSxLQUFKLEdBQVksTUFBWjtBQUNBLGFBQVMsSUFBSSxLQUFiO0FBQ0QsR0FIRDs7QUFLQSxPQUFLLElBQUksT0FBSixHQUFjLE9BQW5CLEVBQTRCLFlBQVc7QUFDckMsUUFBSSxLQUFKLEdBQVksT0FBWjtBQUNBLGFBQVMsSUFBSSxLQUFiO0FBQ0QsR0FIRDs7QUFLQSxPQUFLLElBQUksT0FBSixHQUFjLE9BQW5CLEVBQTRCLFlBQVc7QUFDckMsUUFBSSxLQUFKLEdBQVksT0FBWjtBQUNBLGFBQVMsSUFBSSxLQUFiO0FBQ0QsR0FIRDs7QUFLQTtBQUNBLE9BQUssSUFBSSxPQUFKLEdBQWMsR0FBbkIsRUFBd0IsWUFBVztBQUNqQyxRQUFJLENBQUosQ0FBTSxLQUFOLENBQVksSUFBWixHQUFtQixrQkFBa0IsT0FBTyxRQUFQLENBQWdCLElBQWxDLEdBQTBDLCtCQUE3RDtBQUNBLFFBQUksQ0FBSixDQUFNLEtBQU4sQ0FBWSxJQUFaO0FBQ0EsU0FBSyxRQUFMLENBQWMsSUFBSSxPQUFKLEdBQVksTUFBMUI7QUFDRCxHQUpEOztBQU1BO0FBQ0EsT0FBSztBQUNILGNBQVU7QUFEUCxHQUFMO0FBSUQsQ0EvREgiLCJmaWxlIjoiZWxlbWVudHMvcm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdXZWJDb21wb25lbnRzUmVhZHknLCBmdW5jdGlvbigpIHtcblxuICAgIC8vIFdlIHVzZSBQYWdlLmpzIGZvciByb3V0aW5nLiBUaGlzIGlzIGEgTWljcm9cbiAgICAvLyBjbGllbnQtc2lkZSByb3V0ZXIgaW5zcGlyZWQgYnkgdGhlIEV4cHJlc3Mgcm91dGVyXG4gICAgLy8gTW9yZSBpbmZvOiBodHRwczovL3Zpc2lvbm1lZGlhLmdpdGh1Yi5pby9wYWdlLmpzL1xuXG4gICAgLy8gUmVtb3ZlcyBlbmQgLyBmcm9tIGFwcC5iYXNlVXJsIHdoaWNoIHBhZ2UuYmFzZSByZXF1aXJlcyBmb3IgcHJvZHVjdGlvblxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucG9ydCA9PT0gJycpIHsgIC8vIGlmIHByb2R1Y3Rpb25cbiAgICAgIHBhZ2UuYmFzZShhcHAuYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpKTtcbiAgICB9XG5cbiAgICAvLyBNaWRkbGV3YXJlXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoY3R4LCBuZXh0KSB7XG4gICAgICBhcHAuc2Nyb2xsUGFnZVRvVG9wKCk7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VEcmF3ZXIoY3R4LCBuZXh0KSB7XG4gICAgICBhcHAuY2xvc2VEcmF3ZXIoKTtcbiAgICAgIG5leHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRGb2N1cyhzZWxlY3RlZCl7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uW2RhdGEtcm91dGU9XCInICsgc2VsZWN0ZWQgKyAnXCJdIC5wYWdlLXRpdGxlJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBSb3V0ZXNcbiAgICBwYWdlKCcqJywgc2Nyb2xsVG9Ub3AsIGNsb3NlRHJhd2VyLCBmdW5jdGlvbihjdHgsIG5leHQpIHtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcblxuICAgIHBhZ2UoYXBwLmJhc2VVcmwsIGZ1bmN0aW9uKCkge1xuICAgICAgYXBwLnJvdXRlID0gJ2hvbWUnO1xuICAgICAgc2V0Rm9jdXMoYXBwLnJvdXRlKTtcbiAgICB9KTtcblxuICAgIHBhZ2UoYXBwLmJhc2VVcmwgKyAnaG9tZScsIGZ1bmN0aW9uKCkge1xuICAgICAgYXBwLnJvdXRlID0gJ2hvbWUnO1xuICAgICAgc2V0Rm9jdXMoYXBwLnJvdXRlKTtcbiAgICB9KTtcblxuICAgIHBhZ2UoYXBwLmJhc2VVcmwgKyAnb3JkZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIGFwcC5yb3V0ZSA9ICdvcmRlcic7XG4gICAgICBzZXRGb2N1cyhhcHAucm91dGUpO1xuICAgIH0pO1xuXG4gICAgcGFnZShhcHAuYmFzZVVybCArICdzYWxlcycsIGZ1bmN0aW9uKCkge1xuICAgICAgYXBwLnJvdXRlID0gJ3NhbGVzJztcbiAgICAgIHNldEZvY3VzKGFwcC5yb3V0ZSk7XG4gICAgfSk7XG5cbiAgICAvLyA0MDRcbiAgICBwYWdlKGFwcC5iYXNlVXJsICsgJyonLCBmdW5jdGlvbigpIHtcbiAgICAgIGFwcC4kLnRvYXN0LnRleHQgPSAnQ2FuXFwndCBmaW5kOiAnICsgd2luZG93LmxvY2F0aW9uLmhyZWYgICsgJy4gUmVkaXJlY3RlZCB5b3UgdG8gSG9tZSBQYWdlJztcbiAgICAgIGFwcC4kLnRvYXN0LnNob3coKTtcbiAgICAgIHBhZ2UucmVkaXJlY3QoYXBwLmJhc2VVcmwrJ2hvbWUnKTtcbiAgICB9KTtcblxuICAgIC8vIGFkZCAjISBiZWZvcmUgdXJsc1xuICAgIHBhZ2Uoe1xuICAgICAgaGFzaGJhbmc6IHRydWVcbiAgICB9KTtcblxuICB9KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
