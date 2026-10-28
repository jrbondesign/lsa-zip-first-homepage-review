/* Family flow prototype runtime (static preview only).
   - Links to pages outside this prototype show a short note instead of 404.
   - Results page shows the ZIP the visitor typed.
   - Slim banner so nobody mistakes this for the live site. */
(function () {
  if (window.__lsaProtoRuntime) return;
  window.__lsaProtoRuntime = true;
  var BASE = document.documentElement.getAttribute('data-proto-base') || '/';

  function toast(msg) {
    var t = document.getElementById('proto-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'proto-toast';
      t.setAttribute('role', 'status');
      t.style.cssText = 'position:fixed;left:50%;top:76px;transform:translateX(-50%);z-index:9999;background:#111827;color:#fff;font:500 14px/1.4 Inter,system-ui,sans-serif;padding:10px 14px;border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,.25);max-width:90vw;text-align:center;transition:opacity .2s';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.style.opacity = '0'; }, 2600);
  }

  function outside(url) {
    try { url = new URL(url, location.href); } catch (e) { return false; }
    if (url.origin !== location.origin) return false;
    if (url.pathname.indexOf(BASE) !== 0) return true;
    return false;
  }

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^(tel|mailto|sms):/i.test(href)) return;
    if (outside(a.href)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      toast('That page is not part of this prototype.');
    }
  }, true);

  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || f.tagName !== 'FORM') return;
    var action = f.getAttribute('action');
    if (action && outside(f.action)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      toast('That page is not part of this prototype.');
    }
  }, true);

  function swapZip() {
    if (!/\/results\/?$/.test(location.pathname)) return;
    var zip = new URLSearchParams(location.search).get('zip') || '';
    if (!/^\d{5}$/.test(zip) || zip === '84041') return;
    var main = document.getElementById('main-content');
    if (!main) return;
    var walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = walker.nextNode())) {
      if (n.nodeValue.indexOf('84041') !== -1) n.nodeValue = n.nodeValue.split('84041').join(zip);
    }
    main.querySelectorAll('input[value="84041"]').forEach(function (i) { i.value = zip; });
    document.title = document.title.split('84041').join(zip);
  }

  function banner() {
    if (sessionStorage.getItem('protoBannerClosed') === '1') return;
    if (document.getElementById('proto-banner')) return;
    var b = document.createElement('div');
    b.id = 'proto-banner';
    b.style.cssText = 'background:#fef3c7;color:#78350f;font:500 12.5px/1.35 Inter,system-ui,sans-serif;padding:6px 36px 6px 12px;text-align:center;position:relative';
    b.innerHTML = 'Prototype with sample data. Not the live site. Forms and chat send nothing.<button type="button" aria-label="Hide note" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);border:0;background:none;font-size:18px;line-height:1;color:#78350f;cursor:pointer">&times;</button>';
    b.querySelector('button').addEventListener('click', function () {
      sessionStorage.setItem('protoBannerClosed', '1');
      b.remove();
    });
    document.body.insertBefore(b, document.body.firstChild);
  }

  function onLoad() { swapZip(); banner(); }
  document.addEventListener('astro:page-load', onLoad);
  if (document.readyState !== 'loading') onLoad(); else document.addEventListener('DOMContentLoaded', onLoad);
})();
