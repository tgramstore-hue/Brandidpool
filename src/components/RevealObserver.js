"use client";

export default function RevealObserver() {
  if (typeof window !== "undefined") {
    // Use a self-invoking effect via a script-like approach
  }
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            var r=document.querySelectorAll('.reveal');
            if('IntersectionObserver' in window){
              var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
              r.forEach(function(el){io.observe(el)});
            }else{r.forEach(function(el){el.classList.add('in')})}
          })();
        `,
      }}
    />
  );
}
