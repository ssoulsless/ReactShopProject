(this.webpackJsonpsimpleshop=this.webpackJsonpsimpleshop||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),r=c.n(i),s=(c(13),c(0));function o(){return Object(s.jsx)("footer",{className:"page-footer deep-purple accent-5",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 2021 Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/ssoulsless/ReactShopProject",target:"blank",children:"Repo"})]})})})}function l(){return Object(s.jsx)("nav",{className:"deep-purple accent-4",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"/",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/ssoulsless/ReactShopProject",target:"blank",children:"Repo"})})})]})})}var d=c(8),j=c(2),u=c(3);function p(){return Object(s.jsx)("div",{className:"preloader-wrapper big active",children:Object(s.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(s.jsx)("div",{className:"circle-clipper left",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"gap-patch",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"circle-clipper right",children:Object(s.jsx)("div",{className:"circle"})})]})})}function m(e){var t=e.displayAssets,c=e.displayDescription,n=e.displayName,a=e.mainId,i=e.price,r=e.addToCart,o=void 0===r?Function.prototype:r;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"card-image",children:[Object(s.jsx)("img",{src:t[0].url,alt:n,style:{background:"url(".concat(t[0].background,")"),backgroundSize:"cover"}}),Object(s.jsx)("span",{className:"card-title",children:n})]}),Object(s.jsx)("div",{className:"card-content",children:Object(s.jsx)("p",{children:c})}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn deep-purple accent-3",onClick:function(){return o({mainId:a,displayName:n,price:i})},children:"Buy"}),Object(s.jsxs)("span",{className:"right",children:[i.regularPrice," $"]})]})]})}function b(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToCart,a=void 0===n?Function.prototype:n;return c.length?Object(s.jsx)("div",{className:"goods",children:c.map((function(e){return Object(s.jsx)(m,Object(j.a)(Object(j.a)({},e),{},{addToCart:a}),e.mainId)}))}):Object(s.jsx)("h3",{children:"Nothing There"})}function h(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleCartOpen,a=void 0===n?Function.prototype:n;return Object(s.jsxs)("div",{className:"cart purple lighten-2 white-text",onClick:a,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(s.jsx)("span",{className:"cart-quantity",children:c}):null]})}function O(e){var t=e.mainId,c=e.displayName,n=e.price,a=e.quantity,i=e.removeFromCart,r=void 0===i?Function.prototype:i,o=e.decrementQuantity,l=void 0===o?Function.prototype:o,d=e.incrementQuantity,j=void 0===d?Function.prototype:d;return Object(s.jsx)("div",{children:Object(s.jsxs)("li",{className:"collection-item",children:[c,Object(s.jsx)("i",{className:"small material-icons cart-item--icons",onClick:function(){return l(t)},children:"remove"})," ","x",a," ",Object(s.jsx)("i",{className:"small material-icons cart-item--icons",onClick:function(){return j(t)},children:"add"})," ","= ",n.regularPrice*a," $",Object(s.jsx)("span",{className:"secondary-content",children:Object(s.jsx)("i",{className:"material-icons cart-item--delete",onClick:function(){return r(t)},children:"close"})})]})})}function v(e){var t=e.order,c=void 0===t?[]:t,n=e.handleCartOpen,a=void 0===n?Function.prototype:n,i=e.removeFromCart,r=void 0===i?Function.prototype:i,o=e.decrementQuantity,l=void 0===o?Function.prototype:o,d=e.incrementQuantity,u=void 0===d?Function.prototype:d,p=c.reduce((function(e,t){return e+t.price.regularPrice*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection cart-list",children:[Object(s.jsx)("li",{className:"collection-item active  deep-purple darken-1",children:"Shopping Cart"}),c.length?c.map((function(e){return Object(s.jsx)(O,Object(j.a)(Object(j.a)({},e),{},{removeFromCart:r,decrementQuantity:l,incrementQuantity:u}),e.mainId)})):Object(s.jsx)("li",{className:"collection-item",children:"Shopping cart is empty"}),Object(s.jsx)("button",{className:"secondary-content btn  deep-purple darken-2",children:"Buy"}),Object(s.jsxs)("li",{className:"collection-item active  deep-purple darken-1",children:["Total price: ",p," $"]}),Object(s.jsx)("i",{className:"material-icons cart-close",onClick:a,children:"close"})]})}function x(e){var t=e.name,c=void 0===t?"":t,a=e.closeAlert,i=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[c," added to cart"]})})}function f(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),r=Object(u.a)(i,2),o=r[0],l=r[1],m=Object(n.useState)([]),O=Object(u.a)(m,2),f=O[0],y=O[1],N=Object(n.useState)(!1),g=Object(u.a)(N,2),C=g[0],k=g[1],F=Object(n.useState)(""),q=Object(u.a)(F,2),I=q[0],S=q[1],T=function(){k(!C)};Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=en",{headers:{Authorization:"87d614c9-2ee1754f-8cb7006d-c3d5d89b"}}).then((function(e){return e.json()})).then((function(e){e.shop&&a(e.shop),l(!1)}))}),[]);return Object(s.jsxs)("main",{className:"content container",children:[Object(s.jsx)(h,{quantity:f.length,handleCartOpen:T}),o?Object(s.jsx)(p,{}):Object(s.jsx)(b,{goods:c,addToCart:function(e){var t=f.findIndex((function(t){return t.mainId===e.mainId}));if(t<0){var c=Object(j.a)(Object(j.a)({},e),{},{quantity:1});y([].concat(Object(d.a)(f),[c]))}else{var n=f.map((function(e,c){return c===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));y(n)}S(e.displayName)}}),C&&Object(s.jsx)(v,{order:f,handleCartOpen:T,removeFromCart:function(e){var t=f.filter((function(t){return e!==t.mainId}));y(t)},decrementQuantity:function(e){var t=f.map((function(t){var c=t.quantity-1;return e===t.mainId?Object(j.a)(Object(j.a)({},t),{},{quantity:c}):t}));y(t.filter((function(e){return 0!==e.quantity})))},incrementQuantity:function(e){var t=f.map((function(t){if(e===t.mainId){var c=t.quantity+1;return Object(j.a)(Object(j.a)({},t),{},{quantity:c})}return t}));y(t)}}),I&&Object(s.jsx)(x,{name:I,closeAlert:function(){S("")}})]})}var y=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{}),Object(s.jsx)(f,{}),Object(s.jsx)(o,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.484f9a1d.chunk.js.map