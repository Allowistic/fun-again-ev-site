// Marks the current section in the sticky nav. Nothing else.
(function(){
  var links=[].slice.call(document.querySelectorAll('.secnav a[href^="#"]:not(.brand)'));
  if(!('IntersectionObserver' in window)||!links.length)return;
  var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        links.forEach(function(a){a.removeAttribute('aria-current');});
        var a=map[e.target.id];if(a){a.setAttribute('aria-current','true');
          var nav=a.closest('ol');if(nav&&nav.scrollWidth>nav.clientWidth){nav.scrollLeft=a.offsetLeft-24;}}
      }
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  Object.keys(map).forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s);});
})();
