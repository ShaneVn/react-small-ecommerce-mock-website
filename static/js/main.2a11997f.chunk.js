(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),i=c(18),a=c.n(i),s=(c(25),c(9)),o=c(17),l=c(20),j=c(7),u=c(1),b=n.a.createContext();function m(e){var t=e.children,c=Object(r.useState)([]),n=Object(j.a)(c,2),i=n[0],a=n[1],s=Object(r.useState)([]),m=Object(j.a)(s,2),O=m[0],d=m[1];return Object(r.useEffect)((function(){if(null===localStorage.getItem("allPhotos"))fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return a(e)}));else{var e=JSON.parse(localStorage.getItem("allPhotos"));a(e)}if(null===localStorage.getItem("cartItems"))localStorage.setItem("cartItems",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("cartItems"));d(t)}}),[]),Object(r.useEffect)((function(){localStorage.setItem("cartItems",JSON.stringify(O))}),[O]),Object(r.useEffect)((function(){localStorage.setItem("allPhotos",JSON.stringify(i))}),[i]),Object(u.jsx)(b.Provider,{value:{allPhotos:i,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{isFavorite:!t.isFavorite}):t}));a(t)},addToCart:function(e){d((function(t){return[].concat(Object(l.a)(t),[e])}))},cartItems:O,setCartItems:d,removeFromCart:function(e){d((function(t){return t.filter((function(t){return t.id!==e}))}))}},children:t})}var O=function(){var e=Object(r.useContext)(b).cartItems;return Object(u.jsxs)("header",{children:[Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("h2",{children:"Pic Some"})}),Object(u.jsx)(s.b,{to:"/cart",children:Object(u.jsx)("i",{className:e.length>0?"ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x"})})]})},d=c(2);var f=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(r.useRef)(null);function a(){n(!0)}function s(){n(!1)}return Object(r.useEffect)((function(){i.current.addEventListener("mouseenter",a),i.current.addEventListener("mouseleave",s)}),[]),[c,i]};var h=function(e){var t=e.className,c=e.img,n=Object(r.useContext)(b),i=n.toggleFavorite,a=n.addToCart,s=n.cartItems,o=n.removeFromCart,l=f(),m=Object(j.a)(l,2),O=m[0],d=m[1];return Object(u.jsxs)("div",{ref:d,className:"".concat(t," image-container"),children:[Object(u.jsx)("img",{src:c.url,className:"image-grid"}),c.isFavorite?Object(u.jsx)("i",{onClick:function(){return i(c.id)},className:"ri-heart-fill favorite"}):O?Object(u.jsx)("i",{onClick:function(){return i(c.id)},className:"ri-heart-line favorite"}):void 0,s.some((function(e){return e.id===c.id}))?Object(u.jsx)("i",{onClick:function(){return o(c.id)},className:"ri-shopping-cart-fill cart"}):O?Object(u.jsx)("i",{onClick:function(){return a(c)},className:"ri-add-circle-line cart"}):void 0]})};var x=function(e){var t=Object(r.useContext)(b).allPhotos.map((function(e,t){return Object(u.jsx)(h,{img:e,className:(c=t,c%5===0?"big":c%6===0?"wide":void 0)},e.id);var c}));return Object(u.jsx)("main",{className:"photos",children:t})};var v=function(e){var t=e.item,c=f(),n=Object(j.a)(c,2),i=n[0],a=n[1],s=Object(r.useContext)(b).removeFromCart;return Object(u.jsxs)("div",{className:"cart-item",children:[Object(u.jsx)("i",{ref:a,onClick:function(){return s(t.id)},className:i?"ri-delete-bin-fill":"ri-delete-bin-line"}),Object(u.jsx)("img",{src:t.url,width:"130px"}),Object(u.jsx)("p",{children:"$2.99"})]})};var g=function(){var e=Object(r.useContext)(b),t=e.cartItems,c=e.setCartItems,n=Object(r.useState)(!1),i=Object(j.a)(n,2),a=i[0],s=i[1],o=t.map((function(e){return Object(u.jsx)(v,{item:e},e.id)})),l=(2.99*t.length).toLocaleString("en-US",{style:"currency",currency:"USD"});return Object(u.jsxs)("main",{className:"cart-page",children:[Object(u.jsx)("h1",{children:"Check out"}),o,Object(u.jsxs)("p",{className:"total-cost",children:["Total: ",l," "]}),t.length>0?Object(u.jsx)("div",{className:"order-button",children:Object(u.jsx)("button",{onClick:function(){s(!0),setTimeout((function(){s(!1),console.log("Order placed!"),c([])}),3e3)},children:a?"Ordering....":"Place Order"})}):Object(u.jsx)("p",{children:"You have no items in the cart"})]})};var p=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",children:Object(u.jsx)(x,{})}),Object(u.jsx)(d.a,{path:"/cart",children:Object(u.jsx)(g,{})})]})]})};a.a.render(Object(u.jsx)(m,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(p,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2a11997f.chunk.js.map