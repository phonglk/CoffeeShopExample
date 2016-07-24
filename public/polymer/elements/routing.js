'use strict';

window.addEventListener('WebComponentsReady', function () {

  // We use Page.js for routing. This is a Micro
  // client-side router inspired by the Express router
  // More info: https://visionmedia.github.io/page.js/

  // Removes end / from app.baseUrl which page.base requires for production
  // if (window.location.port === '') {  // if production
  // page.base(app.baseUrl.replace(/\/$/, ''));
  // }

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
    hashbang: false
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3JvdXRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLGdCQUFQLENBQXdCLG9CQUF4QixFQUE4QyxZQUFXOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNFO0FBQ0Y7O0FBRUE7QUFDQSxXQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsSUFBMUIsRUFBZ0M7QUFDOUIsUUFBSSxlQUFKO0FBQ0E7QUFDRDs7QUFFRCxXQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsSUFBMUIsRUFBZ0M7QUFDOUIsUUFBSSxXQUFKO0FBQ0E7QUFDRDs7QUFFRCxXQUFTLFFBQVQsQ0FBa0IsUUFBbEIsRUFBMkI7QUFDekIsYUFBUyxhQUFULENBQXVCLHlCQUF5QixRQUF6QixHQUFvQyxnQkFBM0QsRUFBNkUsS0FBN0U7QUFDRDs7QUFFRDtBQUNBLE9BQUssR0FBTCxFQUFVLFdBQVYsRUFBdUIsV0FBdkIsRUFBb0MsVUFBUyxHQUFULEVBQWMsSUFBZCxFQUFvQjtBQUN0RDtBQUNELEdBRkQ7O0FBSUEsT0FBSyxJQUFJLE9BQVQsRUFBa0IsWUFBVztBQUMzQixRQUFJLEtBQUosR0FBWSxNQUFaO0FBQ0EsYUFBUyxJQUFJLEtBQWI7QUFDRCxHQUhEOztBQUtBLE9BQUssSUFBSSxPQUFKLEdBQWMsTUFBbkIsRUFBMkIsWUFBVztBQUNwQyxRQUFJLEtBQUosR0FBWSxNQUFaO0FBQ0EsYUFBUyxJQUFJLEtBQWI7QUFDRCxHQUhEOztBQUtBLE9BQUssSUFBSSxPQUFKLEdBQWMsT0FBbkIsRUFBNEIsWUFBVztBQUNyQyxRQUFJLEtBQUosR0FBWSxPQUFaO0FBQ0EsYUFBUyxJQUFJLEtBQWI7QUFDRCxHQUhEOztBQUtBLE9BQUssSUFBSSxPQUFKLEdBQWMsT0FBbkIsRUFBNEIsWUFBVztBQUNyQyxRQUFJLEtBQUosR0FBWSxPQUFaO0FBQ0EsYUFBUyxJQUFJLEtBQWI7QUFDRCxHQUhEOztBQUtBO0FBQ0EsT0FBSyxJQUFJLE9BQUosR0FBYyxHQUFuQixFQUF3QixZQUFXO0FBQ2pDLFFBQUksQ0FBSixDQUFNLEtBQU4sQ0FBWSxJQUFaLEdBQW1CLGtCQUFrQixPQUFPLFFBQVAsQ0FBZ0IsSUFBbEMsR0FBMEMsK0JBQTdEO0FBQ0EsUUFBSSxDQUFKLENBQU0sS0FBTixDQUFZLElBQVo7QUFDQSxTQUFLLFFBQUwsQ0FBYyxJQUFJLE9BQUosR0FBWSxNQUExQjtBQUNELEdBSkQ7O0FBTUE7QUFDQSxPQUFLO0FBQ0gsY0FBVTtBQURQLEdBQUw7QUFJRCxDQS9ESCIsImZpbGUiOiJlbGVtZW50cy9yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ1dlYkNvbXBvbmVudHNSZWFkeScsIGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gV2UgdXNlIFBhZ2UuanMgZm9yIHJvdXRpbmcuIFRoaXMgaXMgYSBNaWNyb1xuICAgIC8vIGNsaWVudC1zaWRlIHJvdXRlciBpbnNwaXJlZCBieSB0aGUgRXhwcmVzcyByb3V0ZXJcbiAgICAvLyBNb3JlIGluZm86IGh0dHBzOi8vdmlzaW9ubWVkaWEuZ2l0aHViLmlvL3BhZ2UuanMvXG5cbiAgICAvLyBSZW1vdmVzIGVuZCAvIGZyb20gYXBwLmJhc2VVcmwgd2hpY2ggcGFnZS5iYXNlIHJlcXVpcmVzIGZvciBwcm9kdWN0aW9uXG4gICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID09PSAnJykgeyAgLy8gaWYgcHJvZHVjdGlvblxuICAgICAgLy8gcGFnZS5iYXNlKGFwcC5iYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykpO1xuICAgIC8vIH1cblxuICAgIC8vIE1pZGRsZXdhcmVcbiAgICBmdW5jdGlvbiBzY3JvbGxUb1RvcChjdHgsIG5leHQpIHtcbiAgICAgIGFwcC5zY3JvbGxQYWdlVG9Ub3AoKTtcbiAgICAgIG5leHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZURyYXdlcihjdHgsIG5leHQpIHtcbiAgICAgIGFwcC5jbG9zZURyYXdlcigpO1xuICAgICAgbmV4dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEZvY3VzKHNlbGVjdGVkKXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb25bZGF0YS1yb3V0ZT1cIicgKyBzZWxlY3RlZCArICdcIl0gLnBhZ2UtdGl0bGUnKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFJvdXRlc1xuICAgIHBhZ2UoJyonLCBzY3JvbGxUb1RvcCwgY2xvc2VEcmF3ZXIsIGZ1bmN0aW9uKGN0eCwgbmV4dCkge1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuXG4gICAgcGFnZShhcHAuYmFzZVVybCwgZnVuY3Rpb24oKSB7XG4gICAgICBhcHAucm91dGUgPSAnaG9tZSc7XG4gICAgICBzZXRGb2N1cyhhcHAucm91dGUpO1xuICAgIH0pO1xuXG4gICAgcGFnZShhcHAuYmFzZVVybCArICdob21lJywgZnVuY3Rpb24oKSB7XG4gICAgICBhcHAucm91dGUgPSAnaG9tZSc7XG4gICAgICBzZXRGb2N1cyhhcHAucm91dGUpO1xuICAgIH0pO1xuXG4gICAgcGFnZShhcHAuYmFzZVVybCArICdvcmRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgYXBwLnJvdXRlID0gJ29yZGVyJztcbiAgICAgIHNldEZvY3VzKGFwcC5yb3V0ZSk7XG4gICAgfSk7XG5cbiAgICBwYWdlKGFwcC5iYXNlVXJsICsgJ3NhbGVzJywgZnVuY3Rpb24oKSB7XG4gICAgICBhcHAucm91dGUgPSAnc2FsZXMnO1xuICAgICAgc2V0Rm9jdXMoYXBwLnJvdXRlKTtcbiAgICB9KTtcblxuICAgIC8vIDQwNFxuICAgIHBhZ2UoYXBwLmJhc2VVcmwgKyAnKicsIGZ1bmN0aW9uKCkge1xuICAgICAgYXBwLiQudG9hc3QudGV4dCA9ICdDYW5cXCd0IGZpbmQ6ICcgKyB3aW5kb3cubG9jYXRpb24uaHJlZiAgKyAnLiBSZWRpcmVjdGVkIHlvdSB0byBIb21lIFBhZ2UnO1xuICAgICAgYXBwLiQudG9hc3Quc2hvdygpO1xuICAgICAgcGFnZS5yZWRpcmVjdChhcHAuYmFzZVVybCsnaG9tZScpO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkICMhIGJlZm9yZSB1cmxzXG4gICAgcGFnZSh7XG4gICAgICBoYXNoYmFuZzogZmFsc2VcbiAgICB9KTtcblxuICB9KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
