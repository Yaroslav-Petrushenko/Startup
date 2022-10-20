const animItems=document.querySelectorAll("._anim-start");if(animItems.length>0){function animOnScroll(){animItems.forEach((e=>{const n=e,t=n.offsetHeight,i=offset(n).top;let o=window.innerHeight-t/4;t>window.innerHeight&&(o=window.innerHeight-window.innerHeight/4),window.pageYOffset>i-o&&window.pageYOffset<i+t?n.classList.add("_active-anim"):n.classList.contains("_anim-no")||n.classList.remove("_active-anim")}))}function offset(e){const n=e.getBoundingClientRect();let t=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:n.top+i,left:n.left+t}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),200)}
function app(){const a=document.querySelectorAll(".filterCategory"),e=document.querySelectorAll(".worksCards");a.forEach((a=>{a.addEventListener("click",(s=>{const t=a.dataset.filter;var r;r=t,e.forEach((a=>{const e=!a.classList.contains(r),s="all"===r.toLowerCase();e&&!s?a.classList.add("anim-worksCards"):a.classList.remove("anim-worksCards")})),s.preventDefault()}))}))}app();
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).LazyLoad=t()}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",m="applied",p="error",h="native",E=function(n,t){return n.getAttribute("data-"+t)},I=function(n){return E(n,"ll-status")},y=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},k=function(n){return y(n,null)},w=function(n){return null===I(n)},A=function(n){return I(n)===h},L=[v,b,m,p],O=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},x=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},C=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},N=function(n){return n.llTempImage},M=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},z=function(n,t){n&&(n.loadingCount+=t)},T=function(n,t){n&&(n.toLoadCount=t)},R=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},G=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&R(e).forEach(t)},j=function(n,t){R(n).forEach(t)},D=[u],H=[u,f],V=[u,s,d],F=[g],B=function(n){return!!n[_]},J=function(n){return n[_]},P=function(n){return delete n[_]},S=function(n,t){if(!B(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},U=function(n,t){if(B(n)){var e=J(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},$=function(n,t,e){x(n,t.class_applied),y(n,m),e&&(t.unobserve_completed&&M(n,t),O(t.callback_applied,n,e))},q=function(n,t,e){x(n,t.class_loading),y(n,v),e&&(z(e,1),O(t.callback_loading,n,e))},K=function(n,t,e){e&&n.setAttribute(t,e)},Q=function(n,t){K(n,d,E(n,t.data_sizes)),K(n,s,E(n,t.data_srcset)),K(n,u,E(n,t.data_src))},W={IMG:function(n,t){G(n,(function(n){S(n,V),Q(n,t)})),S(n,V),Q(n,t)},IFRAME:function(n,t){S(n,D),K(n,u,E(n,t.data_src))},VIDEO:function(n,t){j(n,(function(n){S(n,D),K(n,u,E(n,t.data_src))})),S(n,H),K(n,f,E(n,t.data_poster)),K(n,u,E(n,t.data_src)),n.load()},OBJECT:function(n,t){S(n,F),K(n,g,E(n,t.data_src))}},X=["IMG","IFRAME","VIDEO","OBJECT"],Y=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||O(n.callback_finish,t)},Z=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},nn=function(n,t,e){n.removeEventListener(t,e)},tn=function(n){return!!n.llEvLisnrs},en=function(n){if(tn(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];nn(n,e,i)}delete n.llEvLisnrs}},on=function(n,t,e){!function(n){delete n.llTempImage}(n),z(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),C(n,t.class_loading),t.unobserve_completed&&M(n,e)},an=function(n,t,e){var i=N(n)||n;tn(i)||function(n,t,e){tn(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";Z(n,i,t),Z(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=A(t);on(t,e,i),x(t,e.class_loaded),y(t,b),O(e.callback_loaded,t,i),o||Y(e,i)}(0,n,t,e),en(i)}),(function(o){!function(n,t,e,i){var o=A(t);on(t,e,i),x(t,e.class_error),y(t,p),O(e.callback_error,t,i),e.restore_on_error&&U(t,V),o||Y(e,i)}(0,n,t,e),en(i)}))},rn=function(n,t,e){!function(n){return X.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),an(n,t,e),function(n){B(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=E(n,t.data_bg),o=E(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),N(n).setAttribute(u,r),q(n,t,e))}(n,t,e),function(n,t,e){var i=E(n,t.data_bg_multi),o=E(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,$(n,t,e))}(n,t,e),function(n,t,e){var i=E(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),$(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){an(n,t,e),function(n,t,e){var i=W[n.tagName];i&&(i(n,t),q(n,t,e))}(n,t,e)}(n,t,e)},cn=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},ln=function(n){G(n,(function(n){U(n,V)})),U(n,V)},un={IMG:ln,IFRAME:function(n){U(n,D)},VIDEO:function(n){j(n,(function(n){U(n,D)})),U(n,H),n.load()},OBJECT:function(n){U(n,F)}},sn=["IMG","IFRAME","VIDEO"],dn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},fn=function(n){return Array.prototype.slice.call(n)},_n=function(n){return n.container.querySelectorAll(n.elements_selector)},gn=function(n){return function(n){return I(n)===p}(n)},vn=function(n,t){return function(n){return fn(n).filter(w)}(n||_n(t))},bn=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!dn(n)&&(t._observer=new IntersectionObserver((function(e){!function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return L.indexOf(I(n))>=0}(n);y(n,"entered"),x(n,e.class_entered),C(n,e.class_exited),function(n,t,e){t.unobserve_entered&&M(n,e)}(n,e,i),O(e.callback_enter,n,t,i),o||rn(n,e,i)}(n.target,n,t,e):function(n,t,e,i){w(n)||(x(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return I(n)===v}(n)&&"IMG"===n.tagName&&(en(n),function(n){G(n,(function(n){cn(n)})),cn(n)}(n),ln(n),C(n,e.class_loading),z(i,-1),k(n),O(e.callback_cancel,n,t,i))}(n,t,e,i),O(e.callback_exit,n,t,i))}(n.target,n,t,e)}))}(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=_n(n),fn(e).filter(gn)).forEach((function(t){C(t,n.class_error),k(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return bn.prototype={update:function(n){var t,o,a=this._settings,r=vn(n,a);T(this,r.length),!e&&i?dn(a)?function(n,t,e){n.forEach((function(n){-1!==sn.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),an(n,t,e),function(n,t){var e=W[n.tagName];e&&e(n,t)}(n,t),y(n,h)}(n,t,e)})),T(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),_n(this._settings).forEach((function(n){P(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;vn(n,e).forEach((function(n){M(n,t),rn(n,e,t)}))},restoreAll:function(){var n=this._settings;_n(n).forEach((function(t){!function(n,t){(function(n){var t=un[n.tagName];t?t(n):function(n){if(B(n)){var t=J(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){w(n)||A(n)||(C(n,t.class_entered),C(n,t.class_exited),C(n,t.class_applied),C(n,t.class_loading),C(n,t.class_loaded),C(n,t.class_error))}(n,t),k(n),P(n)}(t,n)}))}},bn.load=function(n,t){var e=c(t);rn(n,e)},bn.resetStatus=function(n){k(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(bn,window.lazyLoadOptions),bn}));
let parallaxStartPos;const parallaxBG=document.querySelectorAll(".parallax");function moveBackground(e){let t=e.pageY-window.pageYOffset-e.target.getBoundingClientRect().top+1,n=50+e.pageX/window.innerWidth*15,a=50+t/window.innerHeight*20;e.target.style.backgroundPosition=`${n}% ${a}%`}parallaxBG.forEach((e=>{e.style.backgroundPosition="center",e.addEventListener("mousemove",(function(e){moveBackground(e)}))}));
const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding"),timeout=800;let unlock=!0;if(popupLinks.length>0)for(let o=0;o<popupLinks.length;o++){const e=popupLinks[o];e.addEventListener("click",(function(o){const t=e.getAttribute("href").replace("#","");popupOpen(document.getElementById(t)),o.preventDefault()}))}const popupCloseIkon=document.querySelectorAll(".close-popup");if(popupCloseIkon.length>0)for(let o=0;o<popupCloseIkon.length;o++){const e=popupCloseIkon[o];e.addEventListener("click",(function(o){popupClose(e.closest(".popup")),o.preventDefault()}))}function popupOpen(o){if(o&&unlock){const e=document.querySelector(".popup.open");e?popupClose(e,!1):bodyLock(),o.classList.add("open"),o.addEventListener("click",(function(o){o.target.closest(".popup-content")||popupClose(o.target.closest(".popup"))}))}}function popupClose(o,e=!0){unlock&&(o.classList.remove("open"),e&&bodyUnLock())}function bodyLock(){const o=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight=o}body.style.paddingRight=o,body.classList.add("lock"),unlock=!1,setTimeout((function(){unlock=!0}),800)}function bodyUnLock(){setTimeout((function(){if(lockPadding.length>0)for(let o=0;o<lockPadding.length;o++){lockPadding[o].style.paddingRight="0px"}body.style.paddingRight="0px",body.classList.remove("lock")}),800),unlock=!1,setTimeout((function(){unlock=!0}),800)}let blogMore=document.querySelector(".blogMore"),blogOne=document.querySelector(".blogPostOne");blogMore.addEventListener("click",(function(o){o.preventDefault(),blogOne.classList.toggle("active"),blogOne.classList.contains("active")?blogMore.innerHTML="Close":blogMore.innerHTML="Read more"}));
function $(e){let t=document.querySelectorAll(e);return 1==t.length?t[0]:t}let hamburger=document.querySelector(".hamburger"),nmenu=document.querySelector(".navmenu");hamburger.onclick=function(){nmenu.classList.toggle("active-burger")};const headerSection=document.querySelector(".header-section");let firstVisit,lastVisit,timeInSite,firstTimeInSite,lastScrollTop=0;function menuBackground(){let e=window.pageYOffset||document.documentElement.scrollTop;e>lastScrollTop?headerSection.classList.add("headerHid"):headerSection.classList.remove("headerHid"),lastScrollTop=e<=0?0:e,window.pageYOffset>window.innerHeight/4?headerSection.style.background="linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45))":headerSection.style.background="transparent"}window.addEventListener("scroll",menuBackground),window.onload=function(){localStorage.firstVisit&&"undefined"!=localStorage.firstVisit||(localStorage.firstVisit=new Date),firstVisit=localStorage.firstVisit,localStorage.lastVisit||(localStorage.lastVisit=firstVisit),timeInSite=(new Date-new Date(localStorage.lastVisit))/1e3/60,timeInSite>5?console.log("Welcome to STARTUP"):timeInSite>1440?console.log("Тебе не було цілий день"):timeInSite>2880&&(console.log("де тебе носило так довго"),window.onblur=function(){localStorage.lastVisit=new Date},lastVisit=localStorage.lastVisit)};let svgfigur=document.querySelector(".sv svg"),trople=document.querySelectorAll(".personal h3");svgfigur.addEventListener("click",(function(e){3===e.detail&&trople.forEach((e=>{e.innerHTML="New text triple click"}))}));
let interval,menu=document.querySelectorAll(".top-menu a");function scrollToBlock(e){let n,t,o=document.querySelector(e).getBoundingClientRect().top+window.pageYOffset,i=window.pageYOffset,l=1;n=o>i?"down":"up",clearInterval(interval),interval=setInterval((()=>{t=Math.abs(o-window.pageYOffset),l<=45&&t>.25*window.innerHeight?l*=1.3:t<.25*window.innerHeight&&l>3&&(l*=.7),"down"==n?window.scrollTo(0,window.pageYOffset+l):window.scrollTo(0,window.pageYOffset-l),Math.abs(window.pageYOffset-o)<=3?(window.scrollTo(0,o),clearInterval(interval)):Math.abs(window.pageYOffset+window.innerHeight-document.body.getBoundingClientRect().height)<5&&clearInterval(interval)}),20)}menu.forEach((e=>{e.onclick=function(e){e.preventDefault(),scrollToBlock(this.getAttribute("href"))}}));
const sliderProps={arrows:!0,baseCardWidth:"263rem",slideToScrollAll:!0,autoplay:!0,gap:20},sliderProppsBrands={gap:45,slideToScrollAll:!1,baseCardWidth:"127rem",autoplay:!1},sliderQuotes={autoplay:!0,arrows:!0,autoplayspeed:4e3,fadeOut:!0,dots:!0,distansetoDots:40};function infinitySlider(e,t){let l,s,o,i,a,n,r,d,c,u,f=0,y=document.querySelector(e),p=y.querySelector(".slider-card"),g=p.getBoundingClientRect().width,h=p.children,m=h.length,v={slideToScrollAll:!1,gap:0,distansetoDots:0,fadeOut:!1,dots:!1,autoplay:!1,arrows:!1,autoplayspeed:3e3,baseCardWidth:g+"px",transitionslider:"all 1s ease-in-out"};if(y.querySelectorAll(".clone").forEach((e=>{e.remove()})),localStorage[y.id+"interval"]&&clearInterval(localStorage[y.id+"interval"]),y.style.position="relative",p.style.position="relative",p.style.width="100%",p.style.overflow="hidden",t={...v,...t},r=Math.floor(g/(parseInt(t.baseCardWidth)+t.gap)),i=t.gap,l=(g-(r-1)*i)/r,f=0-(i+l),t.arrows&&y.querySelectorAll(".cards-slider").length<1&&(s=document.createElement("span"),o=document.createElement("span"),s.className="cards-slider left",o.className="cards-slider right",y.insertAdjacentElement("afterbegin",s),y.insertAdjacentElement("beforeend",o),s.onclick=function(){A("left")},o.onclick=function(){A("right")}),s=y.querySelector(".left"),o=y.querySelector(".right"),t.arrows&&h.length<=r?(s.style.display="none",o.style.display="none"):t.arrows&&(s.style.display="block",o.style.display="block"),t.dots&&m>1){!function(){if(y.querySelectorAll(".quoteDots-container").length<1){u=document.createElement("div"),u.className="quoteDots-container",u.style.position="absolute",y.insertAdjacentElement("beforeend",u);for(let e=0;e<m;e++){const t=document.createElement("span");t.className="quote-dot",t.dataset.order=e,u.insertAdjacentElement("beforeend",t)}}}(),dot=document.querySelectorAll(".quote-dot");for(let e=0;e<h.length;e++)h[e].classList.contains("activeFade")&&(h[e].classList.remove("activeFade"),dot[e].classList.remove("activeFade"));dot[0].classList.add("activeFade"),h[0].classList.add("activeFade")}t.fadeOut||(!function(){let e=1;do{a=h[h.length-e].cloneNode(!0),a.classList.add("clone"),a.style.transition="none",p.insertAdjacentElement("afterbegin",a),m=h.length-y.querySelectorAll(".clone").length,e++}while(e<=m&&t.slideToScrollAll);if(t.slideToScrollAll)for(e=0;e<m;)a=h[e].cloneNode(!0),a.classList.add("clone"),a.style.transition="none",p.insertAdjacentElement("beforeend",a),e++}(),S()),h=p.children,n=0;for(let e=0;e<h.length;e++)h[e].style.width=l+"px",h[e].style.position="absolute",c=h[e].getBoundingClientRect().height,n<c&&(n=c),setTimeout((()=>{h[e].style.transition=t.transitionslider}),1300);function S(){f=0-(i+l),h=p.children,t.slideToScrollAll&&(f=0-(i+l)*m);for(let e=0;e<h.length;e++)h[e].style.left=f+"px",f+=i+l}function A(e){if(g=p.getBoundingClientRect().width,r=Math.floor(g/(parseInt(t.baseCardWidth)+t.gap)),l=(g-(r-1)*i)/r,h=p.children,"left"==e)if(t.slideToScrollAll)for(let e=0;e<r;e++)p.insertAdjacentElement("afterbegin",h[h.length-1]);else{h[h.length-1].remove();let e=h[h.length-1].cloneNode(!0);e.classList.add("clone"),p.insertAdjacentElement("afterbegin",e),h[1].classList.remove("clone")}else if("right"==e)if(t.slideToScrollAll)for(let e=0;e<r;e++)p.insertAdjacentElement("beforeend",h[0]);else{h[0].remove();let e=h[0].cloneNode(!0);e.classList.add("clone"),p.insertAdjacentElement("beforeend",e),h[h.length-2].classList.remove("clone")}S()}function L(){if(clearInterval(localStorage[y.id+"interval"]),t.fadeOut){let e=0;for(let t=0;t<h.length;t++)h[t].classList.contains("activeFade")&&(e=t);const l=e=>{setTimeout((()=>h[e].classList.add("activeFade")),1e3),setTimeout((()=>dot[e].classList.add("activeFade")),1e3)};d=setInterval((()=>{h[e].classList.remove("activeFade"),dot[e].classList.remove("activeFade"),h[e+1]?e++:e=0,l(e)}),t.autoplayspeed)}else d=setInterval((()=>{A("right"),console.log("next slide")}),t.autoplayspeed);localStorage[y.id+"interval"]=d}p.style.height=n+"px",t.autoplay&&m>r&&L(),dot=document.querySelectorAll(".quote-dot"),dot.forEach((e=>{e.onclick=function(){clearInterval(localStorage[y.id+"interval"]);for(let e=0;e<m;e++)dot[e].classList.remove("activeFade"),h[e].classList.remove("activeFade");h[e.dataset.order].classList.add("activeFade"),e.classList.add("activeFade")}})),y.onmouseenter=()=>{clearInterval(localStorage[y.id+"interval"])},y.onmouseleave=()=>{t.autoplay&&m>r&&L()}}window.onresize=function(){infinitySlider(".slider",sliderProps),infinitySlider(".sliderBrand",sliderProppsBrands),infinitySlider(".sliderQuotes",sliderQuotes)},infinitySlider(".slider",sliderProps),infinitySlider(".sliderBrand",sliderProppsBrands),infinitySlider(".sliderQuotes",sliderQuotes);