'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SizeSorting = ['Tall', 'Grande', 'Venti'];
var TypeSorting = ['Coffee', 'Tea'];

function sortSize(array) {
  var key = arguments.length <= 1 || arguments[1] === undefined ? 'Name' : arguments[1];
  var order = arguments.length <= 2 || arguments[2] === undefined ? SizeSorting : arguments[2];

  return array.sort(function (a, b) {
    return order.indexOf(a[key]) - order.indexOf(b[key]);
  });
}

var DoOrderView = function () {
  function DoOrderView() {
    _classCallCheck(this, DoOrderView);
  }

  _createClass(DoOrderView, [{
    key: 'beforeRegister',
    value: function beforeRegister() {
      this.is = 'do-order-view';
      this.properties = {
        productList: {
          type: Array
        },
        sizeList: {
          type: Array
        },
        selectedItem: {
          type: Object
        },
        isSendingOrder: {
          type: Boolean,
          value: false
        }
      };
    }
  }, {
    key: 'sendOrder',
    value: function sendOrder(id) {
      this.$.send.url = '/api/order/' + id;
      return this.$.send.generateRequest().completes;
    }
  }, {
    key: 'handleConfirmation',
    value: function handleConfirmation(e) {
      var _this = this;

      var _e$detail = e.detail;
      var canceled = _e$detail.canceled;
      var confirmed = _e$detail.confirmed;

      if (confirmed === true) {
        (function () {
          var _selectedItem = _this.selectedItem;
          var SizeName = _selectedItem.SizeName;
          var ProductName = _selectedItem.ProductName;
          var Price = _selectedItem.Price;
          var Id = _selectedItem.Id;

          var productTitle = SizeName + ' ' + ProductName + ' (' + Price + '$)';
          app.$.toast.text = 'Sending order ' + productTitle;
          var request = _this.sendOrder(Id);
          request.then(function () {
            app.$.toast.text = 'You have just purchased ' + productTitle;
          });
          _this.selectedItem = {};
        })();
      } else {
        app.$.toast.text = 'You have canceled the order';
      }
      app.$.toast.show();
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(e) {
      var item = e.model.item;
      this.selectedItem = item;
      console.debug('handleSelection', item);
      this.$.confirm.open();
    }
  }, {
    key: 'handleResponse',
    value: function handleResponse(data) {
      var _this2 = this;

      try {
        (function () {
          var _data$detail$response = data.detail.response;
          var products = _data$detail$response.products;
          var sizes = _data$detail$response.sizes;
          var variants = _data$detail$response.variants;


          _this2.sizeList = sortSize(sizes, 'Name');
          _this2.productList = products.map(function (product) {
            var id = product.Id;
            return _extends({}, product, {
              sizeList: sortSize(variants.filter(function (_ref) {
                var ProductId = _ref.ProductId;
                return ProductId === id;
              }), 'SizeName')
            });
          }).sort(function (a, b) {
            var typeCheck = TypeSorting.indexOf(a.Type) - TypeSorting.indexOf(b.Type); // sort by type
            if (typeCheck !== 0) return typeCheck;else return a.Id - b.Id; // if same type, sort by id
          });
          console.log(_this2.productList);
        })();
      } catch (e) {
        console.error(e);
        console.log("Sorry! An error has occured");
      }
    }
  }]);

  return DoOrderView;
}();

Polymer(DoOrderView);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RvLW9yZGVyLXZpZXcvZG8tb3JkZXItdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU0sY0FBYyxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE9BQW5CLENBQXBCO0FBQ0ksSUFBTSxjQUFjLENBQUMsUUFBRCxFQUFXLEtBQVgsQ0FBcEI7O0FBRUEsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQTJEO0FBQUEsTUFBbEMsR0FBa0MseURBQTVCLE1BQTRCO0FBQUEsTUFBcEIsS0FBb0IseURBQVosV0FBWTs7QUFDekQsU0FBTyxNQUFNLElBQU4sQ0FBWSxVQUFDLENBQUQsRUFBSSxDQUFKO0FBQUEsV0FBVSxNQUFNLE9BQU4sQ0FBYyxFQUFFLEdBQUYsQ0FBZCxJQUF3QixNQUFNLE9BQU4sQ0FBYyxFQUFFLEdBQUYsQ0FBZCxDQUFsQztBQUFBLEdBQVosQ0FBUDtBQUNEOztJQUVLLFc7Ozs7Ozs7cUNBQ2E7QUFDZixXQUFLLEVBQUwsR0FBVSxlQUFWO0FBQ0EsV0FBSyxVQUFMLEdBQWtCO0FBQ2hCLHFCQUFhO0FBQ1gsZ0JBQU07QUFESyxTQURHO0FBSWhCLGtCQUFVO0FBQ1IsZ0JBQU07QUFERSxTQUpNO0FBT2hCLHNCQUFjO0FBQ1osZ0JBQU07QUFETSxTQVBFO0FBVWhCLHdCQUFnQjtBQUNkLGdCQUFNLE9BRFE7QUFFZCxpQkFBTztBQUZPO0FBVkEsT0FBbEI7QUFlRDs7OzhCQUVTLEUsRUFBSTtBQUNaLFdBQUssQ0FBTCxDQUFPLElBQVAsQ0FBWSxHQUFaLG1CQUFnQyxFQUFoQztBQUNBLGFBQU8sS0FBSyxDQUFMLENBQU8sSUFBUCxDQUFZLGVBQVosR0FBOEIsU0FBckM7QUFDRDs7O3VDQUVrQixDLEVBQUU7QUFBQTs7QUFBQSxzQkFDYSxFQUFFLE1BRGY7QUFBQSxVQUNYLFFBRFcsYUFDWCxRQURXO0FBQUEsVUFDRCxTQURDLGFBQ0QsU0FEQzs7QUFFbkIsVUFBRyxjQUFjLElBQWpCLEVBQXVCO0FBQUE7QUFBQSw4QkFDd0IsTUFBSyxZQUQ3QjtBQUFBLGNBQ2IsUUFEYSxpQkFDYixRQURhO0FBQUEsY0FDSCxXQURHLGlCQUNILFdBREc7QUFBQSxjQUNVLEtBRFYsaUJBQ1UsS0FEVjtBQUFBLGNBQ2lCLEVBRGpCLGlCQUNpQixFQURqQjs7QUFFckIsY0FBTSxlQUFrQixRQUFsQixTQUE4QixXQUE5QixVQUE4QyxLQUE5QyxPQUFOO0FBQ0EsY0FBSSxDQUFKLENBQU0sS0FBTixDQUFZLElBQVosc0JBQW9DLFlBQXBDO0FBQ0EsY0FBTSxVQUFVLE1BQUssU0FBTCxDQUFlLEVBQWYsQ0FBaEI7QUFDQSxrQkFBUSxJQUFSLENBQWEsWUFBTTtBQUNqQixnQkFBSSxDQUFKLENBQU0sS0FBTixDQUFZLElBQVosZ0NBQThDLFlBQTlDO0FBQ0QsV0FGRDtBQUdBLGdCQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFScUI7QUFTdEIsT0FURCxNQVNPO0FBQ0wsWUFBSSxDQUFKLENBQU0sS0FBTixDQUFZLElBQVosR0FBbUIsNkJBQW5CO0FBQ0Q7QUFDRCxVQUFJLENBQUosQ0FBTSxLQUFOLENBQVksSUFBWjtBQUNEOzs7b0NBRWUsQyxFQUFFO0FBQ2hCLFVBQU0sT0FBTyxFQUFFLEtBQUYsQ0FBUSxJQUFyQjtBQUNBLFdBQUssWUFBTCxHQUFvQixJQUFwQjtBQUNBLGNBQVEsS0FBUixDQUFjLGlCQUFkLEVBQWlDLElBQWpDO0FBQ0EsV0FBSyxDQUFMLENBQU8sT0FBUCxDQUFlLElBQWY7QUFDRDs7O21DQUVjLEksRUFBTTtBQUFBOztBQUNuQixVQUFHO0FBQUE7QUFBQSxzQ0FDcUMsS0FBSyxNQUFMLENBQVksUUFEakQ7QUFBQSxjQUNPLFFBRFAseUJBQ08sUUFEUDtBQUFBLGNBQ2lCLEtBRGpCLHlCQUNpQixLQURqQjtBQUFBLGNBQ3dCLFFBRHhCLHlCQUN3QixRQUR4Qjs7O0FBR0QsaUJBQUssUUFBTCxHQUFnQixTQUFTLEtBQVQsRUFBZ0IsTUFBaEIsQ0FBaEI7QUFDQSxpQkFBSyxXQUFMLEdBQW1CLFNBQ2hCLEdBRGdCLENBQ1gsbUJBQVc7QUFDZixnQkFBTSxLQUFLLFFBQVEsRUFBbkI7QUFDQSxnQ0FDSyxPQURMO0FBRUUsd0JBQVUsU0FBUyxTQUFTLE1BQVQsQ0FBaUI7QUFBQSxvQkFBRyxTQUFILFFBQUcsU0FBSDtBQUFBLHVCQUFtQixjQUFjLEVBQWpDO0FBQUEsZUFBakIsQ0FBVCxFQUFpRSxVQUFqRTtBQUZaO0FBSUQsV0FQZ0IsRUFRaEIsSUFSZ0IsQ0FRVixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFDZixnQkFBTSxZQUFZLFlBQVksT0FBWixDQUFvQixFQUFFLElBQXRCLElBQThCLFlBQVksT0FBWixDQUFvQixFQUFFLElBQXRCLENBQWhELENBRGUsQ0FDOEQ7QUFDN0UsZ0JBQUcsY0FBYyxDQUFqQixFQUFvQixPQUFPLFNBQVAsQ0FBcEIsS0FDSyxPQUFPLEVBQUUsRUFBRixHQUFPLEVBQUUsRUFBaEIsQ0FIVSxDQUdTO0FBQ3pCLFdBWmdCLENBQW5CO0FBYUEsa0JBQVEsR0FBUixDQUFZLE9BQUssV0FBakI7QUFqQkM7QUFrQkYsT0FsQkQsQ0FrQkMsT0FBTSxDQUFOLEVBQVE7QUFDUCxnQkFBUSxLQUFSLENBQWMsQ0FBZDtBQUNBLGdCQUFRLEdBQVIsQ0FBWSw2QkFBWjtBQUNEO0FBQ0Y7Ozs7OztBQUVILFFBQVEsV0FBUiIsImZpbGUiOiJlbGVtZW50cy9kby1vcmRlci12aWV3L2RvLW9yZGVyLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaXplU29ydGluZyA9IFsnVGFsbCcsICdHcmFuZGUnLCAnVmVudGknXTtcbiAgICBjb25zdCBUeXBlU29ydGluZyA9IFsnQ29mZmVlJywgJ1RlYSddXG5cbiAgICBmdW5jdGlvbiBzb3J0U2l6ZShhcnJheSwga2V5ID0gJ05hbWUnLCBvcmRlciA9IFNpemVTb3J0aW5nKXtcbiAgICAgIHJldHVybiBhcnJheS5zb3J0KCAoYSwgYikgPT4gb3JkZXIuaW5kZXhPZihhW2tleV0pIC0gb3JkZXIuaW5kZXhPZihiW2tleV0pKTtcbiAgICB9XG5cbiAgICBjbGFzcyBEb09yZGVyVmlldyB7XG4gICAgICBiZWZvcmVSZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5pcyA9ICdkby1vcmRlci12aWV3JztcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0ge1xuICAgICAgICAgIHByb2R1Y3RMaXN0OiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemVMaXN0OiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkSXRlbToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTZW5kaW5nT3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbmRPcmRlcihpZCkge1xuICAgICAgICB0aGlzLiQuc2VuZC51cmwgPSBgL2FwaS9vcmRlci8ke2lkfWA7XG4gICAgICAgIHJldHVybiB0aGlzLiQuc2VuZC5nZW5lcmF0ZVJlcXVlc3QoKS5jb21wbGV0ZXM7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZUNvbmZpcm1hdGlvbihlKXtcbiAgICAgICAgY29uc3QgeyBjYW5jZWxlZCwgY29uZmlybWVkIH0gPSBlLmRldGFpbDtcbiAgICAgICAgaWYoY29uZmlybWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgeyBTaXplTmFtZSwgUHJvZHVjdE5hbWUsIFByaWNlLCBJZCB9ID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgICAgICAgY29uc3QgcHJvZHVjdFRpdGxlID0gYCR7U2l6ZU5hbWV9ICR7UHJvZHVjdE5hbWV9ICgke1ByaWNlfVxcJClgO1xuICAgICAgICAgIGFwcC4kLnRvYXN0LnRleHQgPSBgU2VuZGluZyBvcmRlciAke3Byb2R1Y3RUaXRsZX1gO1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLnNlbmRPcmRlcihJZCk7XG4gICAgICAgICAgcmVxdWVzdC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGFwcC4kLnRvYXN0LnRleHQgPSBgWW91IGhhdmUganVzdCBwdXJjaGFzZWQgJHtwcm9kdWN0VGl0bGV9YDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0ge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXBwLiQudG9hc3QudGV4dCA9ICdZb3UgaGF2ZSBjYW5jZWxlZCB0aGUgb3JkZXInO1xuICAgICAgICB9XG4gICAgICAgIGFwcC4kLnRvYXN0LnNob3coKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlU2VsZWN0aW9uKGUpe1xuICAgICAgICBjb25zdCBpdGVtID0gZS5tb2RlbC5pdGVtO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2hhbmRsZVNlbGVjdGlvbicsIGl0ZW0pO1xuICAgICAgICB0aGlzLiQuY29uZmlybS5vcGVuKCk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZVJlc3BvbnNlKGRhdGEpIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IHsgcHJvZHVjdHMsIHNpemVzLCB2YXJpYW50cyB9ID0gZGF0YS5kZXRhaWwucmVzcG9uc2U7XG5cbiAgICAgICAgICB0aGlzLnNpemVMaXN0ID0gc29ydFNpemUoc2l6ZXMsICdOYW1lJyk7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0TGlzdCA9IHByb2R1Y3RzXG4gICAgICAgICAgICAubWFwKCBwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWQgPSBwcm9kdWN0LklkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgc2l6ZUxpc3Q6IHNvcnRTaXplKHZhcmlhbnRzLmZpbHRlciggKHsgUHJvZHVjdElkIH0pID0+IFByb2R1Y3RJZCA9PT0gaWQpICwgJ1NpemVOYW1lJyksXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoIChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVDaGVjayA9IFR5cGVTb3J0aW5nLmluZGV4T2YoYS5UeXBlKSAtIFR5cGVTb3J0aW5nLmluZGV4T2YoYi5UeXBlKTsgLy8gc29ydCBieSB0eXBlXG4gICAgICAgICAgICAgIGlmKHR5cGVDaGVjayAhPT0gMCkgcmV0dXJuIHR5cGVDaGVjaztcbiAgICAgICAgICAgICAgZWxzZSByZXR1cm4gYS5JZCAtIGIuSWQgLy8gaWYgc2FtZSB0eXBlLCBzb3J0IGJ5IGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RMaXN0KTtcbiAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTb3JyeSEgQW4gZXJyb3IgaGFzIG9jY3VyZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgUG9seW1lcihEb09yZGVyVmlldyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
