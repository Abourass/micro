/* ==========================================================================
//                               µ Functions                               //
=============================================================================
                              TABLE OF CONTENTS
 =============================================================================
 0. µ - Grab whatever element on a page you need (Uses querySelector)
 1. µAll - Grab All Selectors on the page (Uses querySelectorAll)
 ===========================================================================*/

// 00 - Grab whatever element on a page you need (Uses querySelector)
export const µ = function(selector) {
  let el;
  const obj = {
    grab() {
      if (el) return el;
      return document.querySelector(selector);
    },
    toggleClass(className) {
      el.classList.toggle(className);
      return this;
    },
    addClass(className) {
      el.classList.add(className);
      return this;
    },
    removeClass(className) {
      el.classList.remove(className);
      return this;
    },
    replaceWith(string) {
      el.outerHTML = string;
      return this;
    },
    html(string) {
      if (!string) {
        return el.innerHTML;
      } else {
        el.innerHTML = string;
        return this;
      }
    },
    context(){
      return el.outerHTML;
    },
    remove() {
      el.parentNode.removeChild(el);
      return this;
    },
    set(obj) {
      Object.keys(obj).forEach((key) => {
        el.setAttribute(key, obj[key])
      });
      return this;
    },
    child(element, silent){
      if (!silent){
        el.appendChild(element);
      } else {
        el.append(element);
      }
      return this
    },
    text(txt){
      el.textContent = txt.toString();
      return this;
    },
    textChild(string){
      const textEl = document.createTextNode(string.toString());
      el.appendChild(textEl);
      return this
    }
  };
  el = obj.grab(selector);
  return obj;
};

// 01 - Grab All Selectors on the page (Uses querySelectorAll)
export const µAll = async(selector) => {
  let el;
  const obj = {
    grabAll(){
      if (el) return el;
      return document.querySelectorAll(selector)
    },
    toggleClass(className) {
      el.forEach((singleEl) => { singleEl.classList.toggle(className); });
      return this;
    },
    addClass(className) {
      el.forEach((singleEl) => { singleEl.classList.add(className); });
      return this;
    },
    removeClass(className) {
      el.forEach((singleEl) => { singleEl.classList.remove(className); });
      return this;
    },
    replaceWith(string) {
      el.forEach((singleEl) => { singleEl.outerHTML = string; });
      return this;
    },
    html(string) {
      el.forEach((singleEl) => { singleEl.innerHTML = string; });
      return this;
    },
    remove() {
      el.forEach((singleEl) => { singleEl.parentNode.removeChild(el);});
      return this;
    },
    text(string) {
      el.forEach((singleEl) => { singleEl.textContent = string.toString(); });
      return this;
    },
  };
  el = obj.grabAll(selector);
  return obj;
};

export const Ω = function(element, idForNewElement, appendTo) {
  const newEl = document.createElement(element);
  newEl.id = idForNewElement;
  document.querySelector(appendTo).appendChild(newEl);
  return µ(idForNewElement);
};

export const ΩMany = function(arrayOfObjects){
  arrayOfObjects.forEach(obj => {
    const newEl = document.createElement(obj.element);
    newEl.id = obj.idForNewElement;
    document.querySelector(obj.appendTo).appendChild(newEl)
  })
};

export const pageDone = function(cb){ // Replaces jQuery document ready
  if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    cb();
  } else { document.addEventListener('DOMContentLoaded', cb); }
};

export default {µ, µAll, Ω, ΩMany, pageDone};
