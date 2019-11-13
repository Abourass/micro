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
    hasClass(className){
      return el.classList.contains(className)
    },
    css(arrayOrObject){
      if (Array.isArray(arrayOrObject)){
        arrayOrObject.forEach(obj => { el.style[Object.keys(obj)[0]] = obj.value; })
      } else {
        el.style[Object.keys(arrayOrObject)[0]] = arrayOrObject.value;
      }
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
    empty(){
      el.innerHTML = null;
      return this;
    },
    wrap(classForDiv){
      const wrapper = document.createElement('div');
      wrapper.className = classForDiv;
      el.parentNode.insertBefore(wrapper, el);
      el.parentNode.removeChild(el);
      wrapper.appendChild(el);
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
    child(element, insertAt = null){
      if (insertAt === 'append' || insertAt == null) { el.append(element); }
      if (insertAt === 'prepend'){ el.prepend(element) }
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
    },
    type(type){
      el.type = type;
      return this;
    },
    name(name){
      el.name = name;
      return this;
    },
    intro({name, type} = {}){
      el.name = name;
      el.type = type;
      return this;
    },
    htmlFor(elementTheLabelIsFor){
      el.htmlFor = elementTheLabelIsFor;
      return this;
    },
    find(element){
      return el.querySelectorAll(element)
    },
    siblings(){
      return Array.from(el.parentNode.children).filter((child) => child !== el);
    },
    previous(){
      return el.previousElementSibling;
    },
    next(){
      return el.nextElementSibling
    },
    val(newVal){
      el.value = newVal;
      return this;
    },
    data(dataSuffix){
      return el.getAttribute(`data-${dataSuffix}`)
    },
    height(){
      const styles = window.getComputedStyle(el);
      const height = el.offsetHeight;
      const borderTopWidth = parseFloat(styles.borderTopWidth);
      const borderBottomWidth = parseFloat(styles.borderBottomWidth);
      const paddingTop = parseFloat(styles.paddingTop);
      const paddingBottom = parseFloat(styles.paddingBottom);
      return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
    },
    width(){
      const styles = window.getComputedStyle(el);
      const width = el.offsetWidth;
      const borderTopWidth = parseFloat(styles.borderTopWidth);
      const borderBottomWidth = parseFloat(styles.borderBottomWidth);
      const paddingTop = parseFloat(styles.paddingTop);
      const paddingBottom = parseFloat(styles.paddingBottom);
      return width - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
    },
    diameter(){
      return {width: el.scrollWidth, height: el.scrollHeight}
    },
    position(){
      return {left: el.offsetLeft, top: el.offsetTop}
    },
    and(value, methodToAdd){
      return {...value, ...methodToAdd}
    },
    offset(){
      const box = el.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
      };
    },
    load(url, completeCallback = null){
      if (completeCallback == null){
        fetch(url).then(data => data.text()).then(data => { el.innerHTML = data });
      } else {
        fetch(url).then(data => data.text()).then(data => { el.innerHTML = data }).then(completeCallback)
      }
      return this;
    },
    on(eventName, eventHandler){
      el.addEventListener(eventName, eventHandler);
      return this;
    },
    off(eventName, eventHandler) {
      el.removeEventListener(eventName, eventHandler);
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
    type(type){
      el.forEach((singleEl) => { singleEl.type = type;});
      return this;
    },
    name(name){
      el.forEach((singleEl) => { singleEl.name = name;});
      return this;
    },
    intro({name, type} = {}){
      el.forEach((singleEl) => { singleEl.name = name; singleEl.type = type;});
      return this;
    },
    wrap(classForDivs){
      el.forEach((element) => {
        const wrapper = document.createElement('div');
        wrapper.className = classForDivs;
        element.parentNode.insertBefore(wrapper, element);
        element.parentNode.removeChild(element);
        wrapper.appendChild(element);
      })
    },
    load(url, completeCallback = null){
      if (completeCallback == null){
        el.forEach((element) => {fetch(url).then(data => data.text()).then(data => { element.innerHTML = data });})
      } else {
        el.forEach((element) => {fetch(url).then(data => data.text()).then(data => { element.innerHTML = data }).then(completeCallback)})
      }
      return this;
    },
    on(eventName, eventHandler){
      el.forEach((element) => {element.addEventListener(eventName, eventHandler);});
      return this;
    },
    off(eventName, eventHandler){
      el.forEach((element) => {element.removeEventListener(eventName, eventHandler);})
    }
  };
  el = obj.grabAll(selector);
  return obj;
};

export const Ω = function(element, idForNewElement, appendTo) {
  const newEl = document.createElement(element);
  newEl.id = idForNewElement;
  document.querySelector(appendTo).appendChild(newEl);
  return µ(`#${idForNewElement}`);
};

export const ΩMany = function(arrayOfObjects){
  arrayOfObjects.forEach(obj => {
    const newEl = document.createElement(obj.element);
    newEl.id = obj.idForNewElement;
    document.querySelector(obj.appendTo).appendChild(newEl)
  })
};

export const ΩCSS = function(styles){
  const css = document.createElement('style'); css.type = 'text/css';
  if (css.styleSheet){ css.styleSheet.cssText = styles; } else { css.appendChild(document.createTextNode(styles)); }
  document.getElementsByTagName('head')[0].appendChild(css);
};

export const pageDone = function(cb){ // Replaces jQuery document ready
  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    cb();
  } else { document.addEventListener('DOMContentLoaded', cb); }
};

export const windowHeight = ({scrollbar}={}) => {
  if (scrollbar){ return window.document.documentElement.clientHeight; }
  return window.innerHeight
};

export const windowWidth = ({scrollbar}={}) => {
  if (scrollbar){ return window.document.documentElement.clientWidth; }
  return window.innerWidth
};

export const documentHeight = () => {
  const body = document.body;
  const html = document.documentElement;
  return Math.max(
    body.offsetHeight, body.scrollHeight,
    html.clientHeight, html.offsetHeight, html.scrollHeight
  );
};

export const documentWidth = () => {
  const body = document.body;
  const html = document.documentElement;
  return Math.max(
    body.offsetWidth, body.scrollWidth,
    html.clientWidth, html.offsetWidth, html.scrollWidth
  );
};

export const scrollTop = () => { (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop; };

export default {
  µ,
  µAll,
  Ω,
  ΩMany,
  ΩCSS,
  pageDone,
  windowHeight,
  windowWidth,
  documentHeight,
  documentWidth,
  scrollTop
};

