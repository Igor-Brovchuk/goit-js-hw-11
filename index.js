import{a as c,S as f}from"./assets/vendor-CBxvsRsL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",p="54994040-b8635b68b4c6f311854573060";function m(s){return c.get(u,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery");let d=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s){const o=s.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <div class="info">
          <p class="info-item">Likes ${t.likes}</p>
          <p class="info-item">Views ${t.views}</p>
          <p class="info-item">Comments ${t.comments}</p>
          <p class="info-item">Downloads ${t.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),d.refresh()}function g(){l.innerHTML=""}const a=document.querySelector(".form");a.addEventListener("submit",s=>{s.preventDefault();const o=a.elements["search-text"].value.trim();o&&(g(),m(o).then(t=>{y(t.hits)}))});
//# sourceMappingURL=index.js.map
