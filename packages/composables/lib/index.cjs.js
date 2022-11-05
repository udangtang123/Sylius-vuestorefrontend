"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@vue-storefront/core"),t=require("@vue/composition-api"),r=require("date-fns"),n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function o(e,t,r,n){return new(r||(r=Promise))((function(i,o){function u(e){try{a(n.next(e))}catch(e){o(e)}}function s(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,s)}a((n=n.apply(e,t||[])).next())}))}function u(e,t){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var s={load:function(t){return o(void 0,void 0,void 0,(function(){var r,n,i,s,a;return u(this,(function(c){switch(c.label){case 0:r=t.$sylius.config.state,n=r.getCartId(),i=function(){return o(void 0,void 0,void 0,(function(){var e;return u(this,(function(n){switch(n.label){case 0:return[4,t.$sylius.api.createCart()];case 1:return e=n.sent().cartToken,r.setCartId(e),[2,e]}}))}))},c.label=1;case 1:return c.trys.push([1,7,,8]),n?[3,3]:[4,i()];case 2:n=c.sent(),c.label=3;case 3:return[4,t.$sylius.api.getCart(n)];case 4:return(s=c.sent())&&0===Object.keys(s).length?[4,i()]:[3,6];case 5:n=c.sent(),c.label=6;case 6:return[3,8];case 7:return a=c.sent(),e.Logger.error(a),[3,8];case 8:return[4,t.$sylius.api.getCart(n)];case 9:return[2,c.sent()]}}))}))},addItem:function(e,t){var r=t.product,n=t.quantity,i=t.customQuery;return o(void 0,void 0,void 0,(function(){var t,o,a,c;return u(this,(function(u){switch(u.label){case 0:return t=e.$sylius.config.state,o=r.selectedVariant.id,(a=t.getCartId())?[3,2]:[4,s.load(e,{})];case 1:u.sent(),a=t.getCartId(),u.label=2;case 2:return c=a.replace("/api/v2/shop/orders/",""),[4,e.$sylius.api.addToCart({quantity:n,variantId:o,token:c},i)];case 3:return[2,u.sent()]}}))}))},removeItem:function(e,t){var r=t.product,n=t.customQuery;return o(void 0,void 0,void 0,(function(){var t,i;return u(this,(function(o){switch(o.label){case 0:return t=e.$sylius.config.state,i=t.getCartId(),[4,e.$sylius.api.removeFromCart({cartId:i,itemId:String(r._id)},n)];case 1:return[2,o.sent()]}}))}))},updateItemQty:function(e,t){var r=t.product,n=t.quantity,i=t.customQuery;return o(void 0,void 0,void 0,(function(){var t,o;return u(this,(function(u){switch(u.label){case 0:return t=e.$sylius.config.state,o=t.getCartId(),[4,e.$sylius.api.updateCartQuantity({cartId:o,itemId:String(r._id),quantity:n},i)];case 1:return[2,u.sent()]}}))}))},clear:function(e){return o(void 0,void 0,void 0,(function(){var t,r;return u(this,(function(n){switch(n.label){case 0:return t=e.$sylius.config.state,r=t.getCartId(),[4,e.$sylius.api.clearCart({cartId:r})];case 1:return[2,n.sent()]}}))}))},applyCoupon:function(e,t){t.currentCart;var r=t.couponCode,n=t.customQuery;return o(void 0,void 0,void 0,(function(){var t,i,o,s,a,c,d,l,v,f,p,g;return u(this,(function(u){switch(u.label){case 0:t=e.$sylius.config.state,i=t.getCartId().replace("/api/v2/shop/orders/",""),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,e.$sylius.api.addCouponToCart({coupon:{orderTokenValue:i,couponCode:r}},n)];case 2:return[2,{updatedCart:u.sent(),updatedCoupon:r}];case 3:throw(o=u.sent()).message=(null===(l=null===(d=null===(c=null===(a=null===(s=null==o?void 0:o.response)||void 0===s?void 0:s.data)||void 0===a?void 0:a.graphQLErrors)||void 0===c?void 0:c[0])||void 0===d?void 0:d.extensions)||void 0===l?void 0:l.message)||o.message,(null===(g=null===(p=null===(f=null===(v=null==o?void 0:o.response)||void 0===v?void 0:v.data)||void 0===f?void 0:f.graphQLErrors)||void 0===p?void 0:p[0])||void 0===g?void 0:g.extensions)||o;case 4:return[2]}}))}))},removeCoupon:function(e,t){t.currentCart;var r=t.customQuery,n=t.couponCode;return o(void 0,void 0,void 0,(function(){var t,i;return u(this,(function(o){switch(o.label){case 0:return t=e.$sylius.config.state,i=t.getCartId().replace("/api/v2/shop/orders/",""),[4,e.$sylius.api.removeCouponFromCart({removeCouponInput:{orderTokenValue:i,couponCode:n}},r)];case 1:return[2,{updatedCart:o.sent()}]}}))}))},isInCart:function(e,t){var r=t.currentCart,n=t.product;return!!(null==r?void 0:r.items)&&r.items.filter((function(e){return n.selectedVariant.code===e.variant.code})).length>0}},a=e.useCartFactory(s),c={provide:function(){return{cart:a()}},load:function(e,t){var r=t.customQuery;return o(void 0,void 0,void 0,(function(){var t;return u(this,(function(i){switch(i.label){case 0:return(null===(t=e.cart.cart)||void 0===t?void 0:t.value)?[3,2]:[4,e.cart.load({customQuery:r})];case 1:i.sent(),i.label=2;case 2:return[2,n(n({},e.cart.cart.value?e.cart.cart.value.billingAddress:{}),{state:""})]}}))}))},save:function(e,t){return o(void 0,void 0,void 0,(function(){var r,n,i,o,s;return u(this,(function(u){switch(u.label){case 0:return r=e.$sylius.config.state,n=r.getCartId(),i=t.billingDetails,o={orderTokenValue:n.replace("/api/v2/shop/orders/",""),email:i.email,billingAddress:{firstName:i.firstName,lastName:i.lastName,countryCode:i.countryCode,street:i.street,city:i.city,postcode:i.postcode,phoneNumber:i.phoneNumber}},[4,e.$sylius.api.addAddress({addAddressInput:o})];case 1:if((s=u.sent()).graphQLErrors)throw s;return[2,s.billingAddress]}}))}))}},d=e.useBillingFactory(c),l={categorySearch:function(t,r){return o(void 0,void 0,void 0,(function(){var n,o=r.customQuery,s=i(r,["customQuery"]);return u(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,t.$sylius.api.getCategory(s,o)];case 1:return[2,r.sent()];case 2:return n=r.sent(),e.Logger.error(n),[3,3];case 3:return[2,[]]}}))}))}},v=e.useCategoryFactory(l);var f={search:function(t,r){return o(void 0,void 0,void 0,(function(){var i,o,s,a,c,d,l,v,f,p,g,m,y;return u(this,(function(u){switch(u.label){case 0:i=[],o=[],s=[],a=[],c=[],d=[],l={totalCount:0,lastPage:0,itemsPerPage:0},u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all([t.$sylius.api.getCategory(),t.$sylius.api.getProduct(r.input),t.$sylius.api.getProductNotFiltered(r.input),t.$sylius.api.getProductAttribute(r.input)])];case 2:return v=u.sent(),f=v[0].filter((function(e){return e.children.some((function(e){return e.slug===r.input.categorySlug}))})),c=f.length?f:v[0].filter((function(e){return e.slug===r.input.categorySlug})),d=c.reduce((function(e,t){return e.concat(t.children)}),c),a=d.find((function(e){return e.slug===r.input.categorySlug})),p=v[1],g=p.products,m=p.pagination,i=g,l=m,o=v[2].products,(s=v[3]).forEach((function(e){var t;if("text"!==e.type)return(null===(t=r.input.attributes)||void 0===t?void 0:t[e.id])?(e.options[0].selected=!0,void(e.range=r.input.attributes[e.id])):void(e.options[0].selected=!1);e.options=e.options.map((function(e){var t;return n(n({},e),{selected:(null===(t=r.input.attributes[e.code])||void 0===t?void 0:t.includes(e.stringValue))||!1})}))})),[3,4];case 3:return y=u.sent(),e.Logger.error(y),[3,4];case 4:return[2,{products:i,productsNotFiltered:o,category:a,categories:c,categoriesFlat:d,facets:s,page:r.input.page,total:l.totalCount,totalPages:l.lastPage,availableFilters:[],availableSortingOptions:[{type:"sort",id:"name-asc",value:"Name: a-z"},{type:"sort",id:"name-desc",value:"Name: z-a"},{type:"sort",id:"price-highest",value:"Price: highest"},{type:"sort",id:"price-lowest",value:"Price: lowest"},{type:"sort",id:"rating-highest",value:"Rating: highest"},{type:"sort",id:"rating-lowest",value:"Rating: lowest"}],perPageOptions:[10,20,50],itemsPerPage:l.itemsPerPage}]}}))}))}},p=e.useFacetFactory(f),g={resetPassword:function(e,t){var r=t.email,n=t.customQuery;return o(void 0,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,e.$sylius.api.triggerResetUserPassword({customerPassword:{email:r}},n)];case 1:return[2,t.sent()]}}))}))},setNewPassword:function(e,t){var r=t.tokenValue,n=t.newPassword,i=t.customQuery;return o(void 0,void 0,void 0,(function(){var t;return u(this,(function(o){switch(o.label){case 0:return t=n,[4,e.$sylius.api.resetUserPassword({customerPassword:{resetPasswordToken:r,newPassword:n,confirmedNewPassword:t}},i)];case 1:return[2,o.sent()]}}))}))}},m=e.useForgotPasswordFactory(g),y={provide:function(){return{cart:a()}},make:function(e,t){var r=t.customQuery;return o(void 0,void 0,void 0,(function(){var t,n,i,o;return u(this,(function(u){switch(u.label){case 0:return t=e.$sylius.config.state,n={id:"/api/v2/shop/orders/"+e.cart.cart.value.tokenValue,orderTokenValue:e.cart.cart.value.tokenValue},[4,e.$sylius.api.createOrder({order:n},r)];case 1:return i=u.sent(),t.setCartId(null),e.cart.load({customQuery:r}),[4,e.$sylius.api.createCart()];case 2:return o=u.sent().cartToken,t.setCartId(o),[2,i]}}))}))}},h=e.useMakeOrderFactory(y),w={productsSearch:function(t,r){return o(void 0,void 0,void 0,(function(){var n,o,s;return u(this,(function(u){switch(u.label){case 0:n=r.customQuery,o=i(r,["customQuery"]),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,t.$sylius.api.getProduct(o,n)];case 2:return[2,u.sent()];case 3:return s=u.sent(),e.Logger.error(s),[3,4];case 4:return[2]}}))}))}},b=e.useProductFactory(w),C={searchReviews:function(e,t){return o(void 0,void 0,void 0,(function(){return u(this,(function(r){switch(r.label){case 0:return[4,e.$sylius.api.getReviews({productId:parseInt(t.productId)})];case 1:return[2,r.sent()]}}))}))},addReview:function(e,t){return o(void 0,void 0,void 0,(function(){var r,n;return u(this,(function(i){switch(i.label){case 0:return r=t.productId,delete t.productId,n=e.$sylius.config.state,t.author=n.getCustomerId(),[4,e.$sylius.api.addReview({review:t})];case 1:return i.sent(),[2,e.$sylius.api.getReviews({productId:r})]}}))}))}},P=e.useReviewFactory(C),I={provide:function(){return{cart:a()}},load:function(e,t){var r=t.customQuery;return o(void 0,void 0,void 0,(function(){var t;return u(this,(function(i){switch(i.label){case 0:return(null===(t=e.cart.cart)||void 0===t?void 0:t.value)?[3,2]:[4,e.cart.load({customQuery:r})];case 1:i.sent(),i.label=2;case 2:return[2,n(n({},e.cart.cart.value.shippingAddress),{state:""})]}}))}))},save:function(e,t){var r=t.shippingDetails,n=t.customQuery;return o(void 0,void 0,void 0,(function(){var t,i,o;return u(this,(function(u){switch(u.label){case 0:return t=e.$sylius.config.state,i=t.getCartId(),o={orderTokenValue:i.replace("/api/v2/shop/orders/",""),email:r.email,shippingAddress:{firstName:r.firstName,lastName:r.lastName,countryCode:r.countryCode,street:r.street,city:r.city,postcode:r.postcode,phoneNumber:r.phoneNumber}},[4,e.$sylius.api.addAddress({addAddressInput:o},n)];case 1:return u.sent(),[2,r]}}))}))}},N=e.useShippingFactory(I),$={provide:function(){return{cart:a()}},load:function(e,t){return t.customQuery,o(void 0,void 0,void 0,(function(){return u(this,(function(e){return[2,{}]}))}))},save:function(e,t){var r=t.shippingMethod,n=t.customQuery;return o(void 0,void 0,void 0,(function(){var t;return u(this,(function(i){switch(i.label){case 0:return[4,e.$sylius.api.updateCartShipping({shippingMethod:r},n)];case 1:return t=i.sent(),e.cart.setCart(t),[2,t]}}))}))}},A=e.useShippingProviderFactory($),k={provide:function(){return{cart:a()}},load:function(t){return o(void 0,void 0,void 0,(function(){var r,n,i;return u(this,(function(o){switch(o.label){case 0:if(r=t.$sylius.config.state,!(n=r.getCustomerId()))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,5]),[4,t.$sylius.api.getUser(n)];case 2:return[2,o.sent()];case 3:return i=o.sent(),[4,k.logOut(t)];case 4:throw o.sent(),e.Logger.error(i),{message:"Can't authenticate, user not verified"};case 5:return[2,null]}}))}))},logOut:function(e){return o(void 0,void 0,void 0,(function(){var t,r;return u(this,(function(n){switch(n.label){case 0:return(t=e.$sylius.config.state).setCustomerToken(null),t.setCustomerRefreshToken(null),t.setCustomerId(null),t.setCartId(null),[4,e.$sylius.api.createCart()];case 1:return r=n.sent().cartToken,t.setCartId(r),[2]}}))}))},updateUser:function(e,t){t.currentUser;var r=t.updatedUserData,i=t.customQuery;return o(void 0,void 0,void 0,(function(){var t;return u(this,(function(o){switch(o.label){case 0:return t=e.$sylius.config.state,[4,e.$sylius.api.updateUserProfile({customer:n({id:t.getCustomerId()},r)},i)];case 1:return[2,o.sent()]}}))}))},register:function(e,t){var r=t.email,i=t.password,s=t.firstName,a=t.lastName;return o(void 0,void 0,void 0,(function(){var t,o,c,d,l,v,f;return u(this,(function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,e.$sylius.api.registerUser({user:{firstName:s,lastName:a,password:i,email:r}})];case 1:return[2,u.sent()];case 2:throw t=u.sent(),n(n({},null===(d=null===(c=null===(o=null==t?void 0:t.response)||void 0===o?void 0:o.data)||void 0===c?void 0:c.graphQLErrors)||void 0===d?void 0:d[0]),{message:null===(f=null===(v=null===(l=null==t?void 0:t.response)||void 0===l?void 0:l.data)||void 0===v?void 0:v.graphQLErrors)||void 0===f?void 0:f[0].debugMessage});case 3:return[2]}}))}))},logIn:function(e,t){var r=t.username,n=t.password;return o(void 0,void 0,void 0,(function(){var t,i,o,s,a;return u(this,(function(u){switch(u.label){case 0:if(t=e.$sylius.config.state,!(i=null===(a=t.getCartId())||void 0===a?void 0:a.replace("/api/v2/shop/orders/","")))throw{message:"orderTokenValue is equal to "+i};u.label=1;case 1:return u.trys.push([1,3,,4]),[4,e.$sylius.api.loginUser({login:{username:r,password:n,orderTokenValue:i}})];case 2:return o=u.sent(),t.setCustomerToken(o.token),t.setCustomerRefreshToken(o.refreshToken),t.setCustomerId(o.user.customer.id),[3,4];case 3:throw s=u.sent(),console.log(s),{message:"Can't authenticate with provided username/password."};case 4:return[2,k.load(e)]}}))}))},changePassword:function(e,t){var r=t.currentUser,i=t.currentPassword,s=t.newPassword,a=t.customQuery;return o(void 0,void 0,void 0,(function(){var t,o,c,d;return u(this,(function(u){switch(u.label){case 0:return t=e.$sylius.config.state,[4,e.$sylius.api.updateUserPassword({customerPassword:{shopUserId:t.getCustomerId().replace("/api/v2/shop/customers/",""),currentPassword:i,newPassword:s,confirmNewPassword:s}},a)];case 1:return o=u.sent(),(c=null===(d=o.graphQLErrors)||void 0===d?void 0:d[0])?[3,4]:[4,k.logOut(e,{currentUser:r})];case 2:return u.sent(),[4,k.logIn(e,{username:r.email,password:s})];case 3:return[2,u.sent()];case 4:throw n(n({},c),{message:c.debugMessage})}}))}))}},x=e.useUserFactory(k),S=e.useStoreFactory({load:function(e,t){return Promise.resolve({})},change:function(e,t){return Promise.resolve({})}}),T={addAddress:function(){return o(void 0,void 0,void 0,(function(){return u(this,(function(e){return[2]}))}))},deleteAddress:function(){return o(void 0,void 0,void 0,(function(){return u(this,(function(e){return[2]}))}))},updateAddress:function(){return o(void 0,void 0,void 0,(function(){return u(this,(function(e){return[2]}))}))},setDefaultAddress:function(){return o(void 0,void 0,void 0,(function(){return u(this,(function(e){return[2]}))}))},load:function(e,t){return o(void 0,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,e.$sylius.api.getUserAddresses()];case 1:return[2,t.sent()]}}))}))}},F=e.useUserBillingFactory(T),O={searchOrders:function(e,t){return o(void 0,void 0,void 0,(function(){var t,r;return u(this,(function(n){switch(n.label){case 0:return t=e.$sylius.config.state,[4,e.$sylius.api.getUserOrders(t.getCustomerId())];case 1:return[2,{results:r=n.sent(),total:r.length}]}}))}))}},Q=e.useUserOrderFactory(O),U={addAddress:function(e,t){var r=t.address,n=t.customQuery;return o(void 0,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,e.$sylius.api.addUserAddress({address:r},n)];case 1:return t.sent(),[4,e.$sylius.api.getUserAddresses()];case 2:return[2,t.sent()]}}))}))},deleteAddress:function(e,t){var r=t.address,n=t.customQuery;return o(void 0,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,e.$sylius.api.deleteUserAddress({address:{id:r.id}},n)];case 1:return t.sent(),[4,e.$sylius.api.getUserAddresses()];case 2:return[2,t.sent()]}}))}))},updateAddress:function(e,t){var r=t.address,n=t.customQuery;return o(void 0,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,e.$sylius.api.updateUserAddress({address:r},n)];case 1:return t.sent(),[4,e.$sylius.api.getUserAddresses()];case 2:return t.sent(),[2]}}))}))},setDefaultAddress:function(e,t){return o(void 0,void 0,void 0,(function(){return u(this,(function(e){return[2]}))}))},load:function(e){return o(void 0,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,e.$sylius.api.getUserAddresses()];case 1:return[2,t.sent()]}}))}))}},R=e.useUserShippingFactory(U);t.ref(null);var V={load:function(e){return o(void 0,void 0,void 0,(function(){return u(this,(function(e){return console.log("Mocked: loadWishlist"),[2,{}]}))}))},addItem:function(e,t){return t.currentWishlist,t.product,o(void 0,void 0,void 0,(function(){return u(this,(function(e){return console.log("Mocked: addToWishlist"),[2,{}]}))}))},removeItem:function(e,t){return t.currentWishlist,t.product,o(void 0,void 0,void 0,(function(){return u(this,(function(e){return console.log("Mocked: removeFromWishlist"),[2,{}]}))}))},clear:function(e,t){return t.currentWishlist,o(void 0,void 0,void 0,(function(){return u(this,(function(e){return console.log("Mocked: clearWishlist"),[2,{}]}))}))},isInWishlist:function(e,t){return t.currentWishlist,console.log("Mocked: isInWishlist"),!1}},M=e.useWishlistFactory(V),E={getTotals:function(e){if(e){var t=(e.total-e.orderPromotionTotal)/100,r=(e.total+e.shippingTotal)/100;return{shipping:e.shippingTotal/100,special:t,total:r,subtotal:t}}return{shipping:0,total:0,special:0,subtotal:0}},getShippingPrice:function(e){return(null==e?void 0:e.shippingTotal)?e.shippingTotal/100:0},getItems:function(e){var t=[];return(null==e?void 0:e.items)&&e.items.forEach((function(e){t.push({_id:e._id,_categoriesRef:[],name:e.productName,sku:e.variant.code,images:e.variant.product.images,price:{regular:e.unitPrice/100,special:0},selectedVariant:e.variant,qty:e.quantity})})),t},getItemName:function(e){return e.name},getItemImage:function(e){return e.images[0].replace(/\/media\/image/,"")||""},getItemPrice:function(e){return{regular:e.price.regular,special:e.price.special}},getItemQty:function(e){return e.qty},getItemAttributes:function(e,t){var r={};return e.selectedVariant.optionValues.forEach((function(t){var n=e.selectedVariant.product.options.find((function(e){return e.id===t.option.id}));n&&(r[n.name]=t.value)})),r},getItemSku:function(e){return e.sku},getFormattedPrice:function(e){return String(e)},getTotalItems:function(e){return(null==e?void 0:e.items)?e.items.reduce((function(e,t){return e+t.quantity}),0):0},getCoupons:function(e){return[]},getDiscounts:function(e){return(null==e?void 0:e.promotionCoupon)?[{id:e.promotionCoupon.code,name:e.promotionCoupon.promotion.name,code:e.promotionCoupon.code,value:Math.abs(e.orderPromotionTotal)/100,description:e.promotionCoupon.description}]:[]}},D=function(e){return{label:e.name,slug:e.slug,items:e.items.map(D),isCurrent:!1}},G={getTree:function(e){return e?D(e):{}}},L={getSortOptions:function(e){var t;return{options:e.data?e.data.availableSortingOptions:[],selected:null===(t=null==e?void 0:e.input)||void 0===t?void 0:t.sort}},getGrouped:function(e,t){return e.data?e.data.facets:[]},getAll:function(e,t){return e.data?e.data.facets:[]},getProducts:function(e){return e&&e.data?e.data.products:[]},getProductsNotFiltered:function(e){return e&&e.data?e.data.productsNotFiltered:[]},getCategoryTree:function(e){var t=function(r){var n,i;return{label:r.name,slug:r.slug,items:Array.isArray(null==r?void 0:r.children)?r.children.map((function(e){return t(e)})):[],isCurrent:r.code===(null===(i=null===(n=e.data)||void 0===n?void 0:n.category)||void 0===i?void 0:i.code)}};return e.data?{label:"Root",slug:"root",items:e.data.categories.map((function(e){return t(e)})),isCurrent:!1}:{}},getBreadcrumbs:function(e){var t,r=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.categoriesFlat.find((function(t){var r,n;return t.code===(null===(n=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.category)||void 0===n?void 0:n.code)}));if(r){var n=[{text:"Home",link:"/"}];return"/api/v2/shop/taxons/MENU_CATEGORY"!==r.parent.id&&n.push({text:r.parent.name,link:"/c/"+r.parent.slug}),n.push({text:r.name,link:"/c/"+r.slug}),n}return[]},getPagination:function(e){return e.data?{currentPage:e.data.page,totalPages:e.data.totalPages,totalItems:e.data.total,itemsPerPage:e.data.itemsPerPage,pageOptions:e.data.perPageOptions}:{currentPage:1,totalPages:1,totalItems:0,itemsPerPage:0,pageOptions:[]}}};var j={getResetPasswordToken:function(e){return""},isPasswordChanged:function(e){return!1}},q={getName:function(e){return e.name},getSlug:function(e){return e.slug},getPrice:function(e){var t,r=null===(t=null==e?void 0:e.selectedVariant)||void 0===t?void 0:t.channelPricings[0].price;return r&&(r/=100),{regular:r||0,special:0}},getGallery:function(e){return(null==e?void 0:e.galleryImages.map((function(t,r){var n,i;return{small:(Array.isArray(null==e?void 0:e.images)&&(null===(n=null==e?void 0:e.images)||void 0===n?void 0:n.length)?e.images[r]:"").replace(/\/media\/image/,""),normal:(Array.isArray(null==e?void 0:e.galleryImages)&&(null===(i=null==e?void 0:e.galleryImages)||void 0===i?void 0:i.length)?e.galleryImages[r]:"").replace(/\/media\/image/,""),big:t.replace(/\/media\/image/,"")}})))||[]},getCoverImage:function(e){var t;if(Array.isArray(null==e?void 0:e.images)&&(null===(t=null==e?void 0:e.images)||void 0===t?void 0:t.length)){var r=e.images[0];return r=r.replace(/\/media\/image/,"")}return""},getFiltered:function(e,t){return void 0===t&&(t={}),e.map((function(e){var r=e.variants.filter((function(e){return e.optionValues.filter((function(e){var r=e.option.id.replace("/api/v2/shop/product-options/","");return e.code===t.attributes[r]})).length===Object.keys(t.attributes).length}));return r.length?n(n({},e),{selectedVariant:r[0]}):e}))},getAttributes:function(e,t){var r={},n={},i=Array.isArray(e)?e[0]:e,o=i.options.map((function(e){return{name:e.code,label:e.name,value:e.values.map((function(e){return{label:e.value,value:e.code}}))}}));for(var u in o)r[o[u].name]=o[u];if(!Array.isArray(e)&&i.selectedVariant){var s=function(e){var t=i.selectedVariant.optionValues.filter((function(t){return t.option.id==="/api/v2/shop/product-options/"+e}));t.length&&(n[e]=t[0].code)};for(var a in r)s(a);return n}return r},getDescription:function(e){var t;return(null===(t=e)||void 0===t?void 0:t.description)||""},getCategoryIds:function(e){var t;return(null===(t=e)||void 0===t?void 0:t._categoriesRef)||""},getId:function(e){var t;return(null===(t=e)||void 0===t?void 0:t._id)||""},getFormattedPrice:function(e){return String(e)},getTotalReviews:function(e){return 0},getAverageRating:function(e){return e.averageRating},getOptions:function(e){var t=[],r=function(r){var n=e.selectedVariant.optionValues.filter((function(t){return t.option.id===e.options[r].id}));t.push({name:e.options[r].name,value:n[0].value})};for(var n in e.options)r(n);return t}},W={getItems:function(e){return e.filter((function(e){return"accepted"===e.status}))},getReviewId:function(e){return e.id},getReviewAuthor:function(e){return e.author.fullName},getReviewMessage:function(e){return e.comment},getReviewRating:function(e){return e.rating},getReviewDate:function(e){var t=r.parse(e.createdAt,"yyyy-MM-dd HH:mm:ss",new Date);return r.format(t,"dd.MM.yyyy")},getTotalReviews:function(e){return e.filter((function(e){return"accepted"===e.status})).length},getAverageRating:function(e){return 0},getRatesCount:function(e){return[]},getReviewsPage:function(e){return 1}},_={getFirstName:function(e){return(null==e?void 0:e.firstName)||""},getLastName:function(e){return(null==e?void 0:e.lastName)||""},getFullName:function(e){return e?e.firstName+" "+e.lastName:""},getEmailAddress:function(e){return(null==e?void 0:e.email)||""}};var B={getAddresses:function(e,t){if(!t||!Object.keys(t).length)return e;var r=Object.entries(t);return e.filter((function(e){return r.every((function(t){var r=t[0],n=t[1];return e[r]===n}))}))},getDefault:function(e){return e[0]},getTotal:function(e){return 0},getPostCode:function(e){return e.postcode},getStreetName:function(e){return e.street},getStreetNumber:function(e){return""},getCity:function(e){return e.city},getFirstName:function(e){return e.firstName},getLastName:function(e){return e.lastName},getCountry:function(e){return e.countryCode},getPhone:function(e){return e.phoneNumber},getEmail:function(e){return""},getProvince:function(e){return""},getCompanyName:function(e){return""},getTaxNumber:function(e){return""},getId:function(e){return e.id},getApartmentNumber:function(e){return""},isDefault:function(e){return!1}};var H={getAddresses:function(e,t){if(!t||!Object.keys(t).length)return e;var r=Object.entries(t);return e.filter((function(e){return r.every((function(t){var r=t[0],n=t[1];return e[r]===n}))}))},getDefault:function(e){return e[0]},getTotal:function(e){return 0},getPostCode:function(e){return e.postcode},getStreetName:function(e){return e.street},getStreetNumber:function(e){return""},getCity:function(e){return e.city},getFirstName:function(e){return e.firstName},getLastName:function(e){return e.lastName},getCountry:function(e){return e.countryCode},getPhone:function(e){return e.phoneNumber},getEmail:function(e){return""},getProvince:function(e){return""},getCompanyName:function(e){return""},getTaxNumber:function(e){return""},getId:function(e){return e.id},getApartmentNumber:function(e){return""},isDefault:function(e){return!1}};var z={getDate:function(e){if(null==e?void 0:e.createdAt){var t=r.parse(e.createdAt,"yyyy-MM-dd HH:mm:ss",new Date);return r.format(t,"dd.MM.yyyy")}return"-"},getId:function(e){return null==e?void 0:e.number},getStatus:function(e){return(null==e?void 0:e.status)||"Failed"},getPaymentStatus:function(e){return"awaiting_payment"===e.paymentState?"awaiting":e.paymentState},getShippingStatus:function(e){return e.shippingState},getShippingTotal:function(e){return e.shippingTotal/100},getPrice:function(e){return e.total/100},getItems:function(e){return(null==e?void 0:e.items)||[]},getItemSku:function(e){return(null==e?void 0:e.sku)||0},getItemName:function(e){return e.productName},getItemQty:function(e){return e.quantity},getItemPrice:function(e){return e.total/100},getFormattedPrice:function(e){return String(e)},getOrdersTotal:function(e){return e.total}};var Y={getItems:function(e){return[]},getTotals:function(e){return{total:10,subtotal:10}},getItemName:function(e){return""},getItemImage:function(e){return""},getItemPrice:function(e){return{regular:12,special:10}},getItemQty:function(e){return 1},getItemAttributes:function(e,t){return{color:"red"}},getShippingPrice:function(e){return 0},getItemSku:function(e){return""},getTotalItems:function(e){return 1},getFormattedPrice:function(e){return""}};exports.cartGetters=E,exports.categoryGetters=G,exports.facetGetters=L,exports.forgotPasswordGetters=j,exports.orderGetters=z,exports.productGetters=q,exports.reviewGetters=W,exports.useBilling=d,exports.useCart=a,exports.useCategory=v,exports.useContent=function(){},exports.useFacet=p,exports.useForgotPassword=m,exports.useMakeOrder=h,exports.useProduct=b,exports.useReview=P,exports.useShipping=N,exports.useShippingProvider=A,exports.useStore=S,exports.useUser=x,exports.useUserBilling=F,exports.useUserOrder=Q,exports.useUserShipping=R,exports.useWishlist=M,exports.userBillingGetters=H,exports.userGetters=_,exports.userShippingGetters=B,exports.wishlistGetters=Y;
