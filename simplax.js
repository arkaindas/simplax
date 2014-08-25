window.onload = function() {
  document.body.style.backgroundAttachment="fixed";
  window.onscroll = function() {
    document.body.style.backgroundPosition = "0px " + (0 + (Math.max(document.documentElement.scrollTop, document.body.scrollTop) / 8)) + "px";
  }
}
