'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SalesView = function () {
  function SalesView() {
    _classCallCheck(this, SalesView);
  }

  _createClass(SalesView, [{
    key: 'beforeRegister',
    value: function beforeRegister() {
      this.is = 'sales-view';
      this.isAttached = false;
      this.properties = {
        data: {
          type: Object
        },
        sizeList: {
          type: Array
        },
        selectedType: {
          type: String,
          value: "all",
          observer: 'handleTypeChange'
        },
        selectedSize: {
          type: String,
          value: "all",
          observer: 'handleSizeChange'
        },
        isRequesting: {
          type: Boolean,
          value: false
        },
        isNoRecord: {
          type: Boolean,
          computed: 'computeIsNoRecord(data)'
        }
      };
    }
  }, {
    key: 'computeIsNoRecord',
    value: function computeIsNoRecord(data) {
      return data.rows.length === 0;
    }
  }, {
    key: 'attached',
    value: function attached() {
      this.triggerRequest();
      this.isAttached = true;
    }
  }, {
    key: 'triggerRequest',
    value: function triggerRequest() {
      this.$.xhr.generateRequest();
    }
  }, {
    key: 'responseHandler',
    value: function responseHandler(e) {
      var _e$detail$response = e.detail.response;
      var SUM = _e$detail$response.SUM;
      var rows = _e$detail$response.rows;
      var sizes = _e$detail$response.sizes;

      this.sizeList = sizes;
      this.data = {
        SUM: SUM,
        rows: rows.map(function (r) {
          return _extends({}, r, {
            PurchaseDate: new Date(r.PurchaseDate).toString()
          });
        })
      };
    }
  }, {
    key: 'handleTypeSelect',
    value: function handleTypeSelect(e) {
      this.selectedType = e.target.selectedItem.getAttribute("value");
    }
  }, {
    key: 'handleSizeSelect',
    value: function handleSizeSelect(e) {
      this.selectedSize = e.target.selectedItem.getAttribute("value");
    }
  }, {
    key: 'handleTypeChange',
    value: function handleTypeChange(newValue, oldValue) {
      if (this.isAttached && newValue != oldValue) this.triggerRequest();
    }
  }, {
    key: 'handleSizeChange',
    value: function handleSizeChange(newValue, oldValue) {
      if (this.isAttached && newValue != oldValue) this.triggerRequest();
    }
  }]);

  return SalesView;
}();

Polymer(SalesView);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NhbGVzLXZpZXcvc2FsZXMtdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNLFM7Ozs7Ozs7cUNBQ2lCO0FBQ2YsV0FBSyxFQUFMLEdBQVUsWUFBVjtBQUNBLFdBQUssVUFBTCxHQUFrQixLQUFsQjtBQUNBLFdBQUssVUFBTCxHQUFrQjtBQUNoQixjQUFNO0FBQ0osZ0JBQU07QUFERixTQURVO0FBSWhCLGtCQUFVO0FBQ1IsZ0JBQU07QUFERSxTQUpNO0FBT2hCLHNCQUFjO0FBQ1osZ0JBQU0sTUFETTtBQUVaLGlCQUFPLEtBRks7QUFHWixvQkFBVTtBQUhFLFNBUEU7QUFZaEIsc0JBQWM7QUFDWixnQkFBTSxNQURNO0FBRVosaUJBQU8sS0FGSztBQUdaLG9CQUFVO0FBSEUsU0FaRTtBQWlCaEIsc0JBQWM7QUFDWixnQkFBTSxPQURNO0FBRVosaUJBQU87QUFGSyxTQWpCRTtBQXFCaEIsb0JBQVk7QUFDVixnQkFBTSxPQURJO0FBRVYsb0JBQVU7QUFGQTtBQXJCSSxPQUFsQjtBQTBCRDs7O3NDQUVpQixJLEVBQU07QUFDdEIsYUFBTyxLQUFLLElBQUwsQ0FBVSxNQUFWLEtBQXFCLENBQTVCO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUssY0FBTDtBQUNBLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBSyxDQUFMLENBQU8sR0FBUCxDQUFXLGVBQVg7QUFDRDs7O29DQUVlLEMsRUFBRztBQUFBLCtCQUNZLEVBQUUsTUFBRixDQUFTLFFBRHJCO0FBQUEsVUFDVCxHQURTLHNCQUNULEdBRFM7QUFBQSxVQUNKLElBREksc0JBQ0osSUFESTtBQUFBLFVBQ0UsS0FERixzQkFDRSxLQURGOztBQUVqQixXQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxXQUFLLElBQUwsR0FBWTtBQUNWLGdCQURVO0FBRVYsY0FBTSxLQUFLLEdBQUwsQ0FBVTtBQUFBLDhCQUNYLENBRFc7QUFFZCwwQkFBYyxJQUFJLElBQUosQ0FBUyxFQUFFLFlBQVgsRUFBeUIsUUFBekI7QUFGQTtBQUFBLFNBQVY7QUFGSSxPQUFaO0FBT0Q7OztxQ0FFZ0IsQyxFQUFHO0FBQ2xCLFdBQUssWUFBTCxHQUFvQixFQUFFLE1BQUYsQ0FBUyxZQUFULENBQXNCLFlBQXRCLENBQW1DLE9BQW5DLENBQXBCO0FBQ0Q7OztxQ0FFZ0IsQyxFQUFHO0FBQ2xCLFdBQUssWUFBTCxHQUFvQixFQUFFLE1BQUYsQ0FBUyxZQUFULENBQXNCLFlBQXRCLENBQW1DLE9BQW5DLENBQXBCO0FBQ0Q7OztxQ0FFZ0IsUSxFQUFVLFEsRUFBVTtBQUNuQyxVQUFHLEtBQUssVUFBTCxJQUFtQixZQUFZLFFBQWxDLEVBQTRDLEtBQUssY0FBTDtBQUM3Qzs7O3FDQUVnQixRLEVBQVUsUSxFQUFVO0FBQ25DLFVBQUcsS0FBSyxVQUFMLElBQW1CLFlBQVksUUFBbEMsRUFBNEMsS0FBSyxjQUFMO0FBQzdDOzs7Ozs7QUFFSCxRQUFRLFNBQVIiLCJmaWxlIjoiZWxlbWVudHMvc2FsZXMtdmlldy9zYWxlcy12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2FsZXNWaWV3IHtcbiAgICAgIGJlZm9yZVJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLmlzID0gJ3NhbGVzLXZpZXcnO1xuICAgICAgICB0aGlzLmlzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0ge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemVMaXN0OiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkVHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IFwiYWxsXCIsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ2hhbmRsZVR5cGVDaGFuZ2UnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0ZWRTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogXCJhbGxcIixcbiAgICAgICAgICAgIG9ic2VydmVyOiAnaGFuZGxlU2l6ZUNoYW5nZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1JlcXVlc3Rpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc05vUmVjb3JkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlSXNOb1JlY29yZChkYXRhKScsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXB1dGVJc05vUmVjb3JkKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEucm93cy5sZW5ndGggPT09IDA7XG4gICAgICB9XG5cbiAgICAgIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJSZXF1ZXN0KCk7XG4gICAgICAgIHRoaXMuaXNBdHRhY2hlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRyaWdnZXJSZXF1ZXN0KCkge1xuICAgICAgICB0aGlzLiQueGhyLmdlbmVyYXRlUmVxdWVzdCgpO1xuICAgICAgfVxuXG4gICAgICByZXNwb25zZUhhbmRsZXIoZSkge1xuICAgICAgICBjb25zdCB7IFNVTSwgcm93cywgc2l6ZXMgfSA9IGUuZGV0YWlsLnJlc3BvbnNlO1xuICAgICAgICB0aGlzLnNpemVMaXN0ID0gc2l6ZXM7XG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICBTVU0sXG4gICAgICAgICAgcm93czogcm93cy5tYXAoIHIgPT4gKHtcbiAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICBQdXJjaGFzZURhdGU6IG5ldyBEYXRlKHIuUHVyY2hhc2VEYXRlKS50b1N0cmluZygpLFxuICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZVR5cGVTZWxlY3QoZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVHlwZSA9IGUudGFyZ2V0LnNlbGVjdGVkSXRlbS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlU2l6ZVNlbGVjdChlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTaXplID0gZS50YXJnZXQuc2VsZWN0ZWRJdGVtLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVUeXBlQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZih0aGlzLmlzQXR0YWNoZWQgJiYgbmV3VmFsdWUgIT0gb2xkVmFsdWUpIHRoaXMudHJpZ2dlclJlcXVlc3QoKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlU2l6ZUNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYodGhpcy5pc0F0dGFjaGVkICYmIG5ld1ZhbHVlICE9IG9sZFZhbHVlKSB0aGlzLnRyaWdnZXJSZXF1ZXN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIFBvbHltZXIoU2FsZXNWaWV3KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
