// YouTube slots set by a link in data-youtube. An empty slot is removed, so nothing broken shows before a link is added.
(function () {
  var idFrom = function (value) {
    var m = String(value).trim().match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/);
    if (m) return m[1];
    return /^[\w-]{11}$/.test(String(value).trim()) ? String(value).trim() : "";
  };
  document.querySelectorAll(".case-yt").forEach(function (fig) {
    var id = idFrom(fig.dataset.youtube || "");
    if (!id) { fig.remove(); return; }
    var link = fig.querySelector(".video-link");
    link.href = "https://www.youtube.com/watch?v=" + id;
    link.dataset.video = id;
    fig.querySelector("img").src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
  });
})();

// Product photos: hide the frame cleanly until the image file has been added.
(function () {
  document.querySelectorAll(".product-photo img").forEach(function (img) {
    var hide = function () { img.parentElement.classList.add("is-missing"); };
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener("error", hide);
  });
})();

// Click-to-load YouTube embeds: thumbnails until a visitor plays one.
(function () {
  document.querySelectorAll(".video-link").forEach(function (link) {
    var img = link.querySelector("img");
    img.addEventListener("error", function () {
      if (img.dataset.fallback && img.src.indexOf(img.dataset.fallback) === -1) img.src = img.dataset.fallback;
    });
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + link.dataset.video + "?autoplay=1&rel=0";
      iframe.title = link.getAttribute("aria-label").replace("Play video: ", "");
      iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      link.replaceWith(iframe);
      iframe.focus();
    });
  });
})();

// Header border on scroll, and the current section marked in the nav.
(function () {
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (!("IntersectionObserver" in window)) return;
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      var active = byId[entry.target.id];
      if (active) active.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  var hero = document.getElementById("top");
  new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) links.forEach(function (a) { a.removeAttribute("aria-current"); });
  }, { rootMargin: "0px 0px -60% 0px" }).observe(hero);

  Object.keys(byId).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
