export declare interface toolsInterface {
  next(): Element;
  css(arrayOrObject: any): toolsInterface;
  siblings(): (Node[] | Element[] | unknown[]);
  data(dataSuffix: string): string;
  type(type: string): toolsInterface;
  remove(): toolsInterface;
  empty(): toolsInterface;
  diameter(): { width: number; height: number };
  load(url: string, completeCallback: () => any | PromiseLike<void> | null): toolsInterface;
  children(): NodeListOf<ChildNode>;
  stats(): { offsetTop: number; offsetLeft: number; positionTop: number; positionLeft: number; heightRestricted: number; widthRestricted: number; height: number; width: number };
  find(element: string): NodeListOf<Element>;
  intro({name, type}?: { name: string; type: string }): toolsInterface;
  context(): string;
  replaceWithElement(element: string, idForNewElement?: (string | null)): toolsInterface;
  html(string?: (string | null)): (string | toolsInterface);
  text(txt: unknown): toolsInterface;
  addClass(className: (string[] | string)): toolsInterface;
  height(): number;
  on(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface;
  val(newVal?: (string | null)): (string | toolsInterface);
  set(setObj: any): toolsInterface;
  previous(): Element;
  offset(): { top: number; left: number };
  src(srcString: string): toolsInterface;
  removeClass(className: string): toolsInterface;
  hasClass(className: string): boolean;
  off(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface;
  input(type: string): toolsInterface;
  htmlFor(elementTheLabelIsFor: string): toolsInterface;
  toggleClass(className: string): toolsInterface;
  textChild(string: unknown): toolsInterface;
  name(name: string): toolsInterface;
  width(): number;
  position(): { left: number; top: number };
  grab(tempSelector: string): Element;
  wrap(classForDiv: string): toolsInterface;
  replaceWith(string: string): toolsInterface;
  child(element: HTMLElement, insertAt?: ("append" | "prepend" | null)): toolsInterface
}

export const µ = function(selector: string): toolsInterface {
  let el: Element | HTMLElement;
  const tools: toolsInterface = {
    grab(tempSelector: string): Element {
      if (el) return el;
      return document.querySelector(tempSelector);
    },
    toggleClass(className: string): toolsInterface {
      el.classList.toggle(className);
      return this;
    },
    addClass(className: string[] | string): toolsInterface {
      if (Array.isArray(className)){
        className.forEach((singleClass: string): void => {
          el.classList.add(singleClass);
        });
      } else {
        el.classList.add(className);
      }
      return this;
    },
    removeClass(className: string): toolsInterface {
      el.classList.remove(className);
      return this;
    },
    hasClass(className: string): boolean {
      return el.classList.contains(className);
    },
    css(arrayOrObject: any ): toolsInterface {
      if (Array.isArray(arrayOrObject)){
        arrayOrObject.forEach((obj: any): void => { el.style[Object.keys(obj)[0]] = obj.value; });
      } else {
        el.style[Object.keys(arrayOrObject)[0]] = arrayOrObject.value;
      }
      return this;
    },
    replaceWith(string: string): toolsInterface {
      el.outerHTML = string;
      return this;
    },
    replaceWithElement(element: string, idForNewElement: null | string = null): toolsInterface {
      const newEl: HTMLElement = document.createElement(element), idToUse = idForNewElement || el.id;
      newEl.id = idToUse;
      el.parentNode.replaceChild(newEl, el);
      return µ(`#${idToUse}`);
    },
    html(string: null | string = null): string | toolsInterface {
      if (!string) return el.innerHTML;
      el.innerHTML = string;
      return this;
    },
    empty(): toolsInterface {
      el.innerHTML = null;
      return this;
    },
    wrap(classForDiv: string): toolsInterface{
      const wrapper: HTMLDivElement = document.createElement('div');
      wrapper.className = classForDiv;
      el.parentNode.insertBefore(wrapper, el);
      el.parentNode.removeChild(el);
      wrapper.appendChild(el);
      return this;
    },
    context(): string {
      return el.outerHTML;
    },
    src(srcString: string): toolsInterface {
      el.src = srcString;
      return this;
    },
    remove(): toolsInterface {
      el.parentNode.removeChild(el);
      return this;
    },
    set(setObj: any): toolsInterface {
      Object.keys(setObj).forEach((key: string): void => { // eslint-disable-next-line security/detect-object-injection
        el.setAttribute(key, setObj[key]);
      });
      return this;
    },
    child(element: HTMLElement, insertAt: null | 'append' | 'prepend' = null): toolsInterface {
      if (insertAt === 'append' || insertAt == null) { el.append(element); }
      if (insertAt === 'prepend'){ el.prepend(element); }
      return this;
    },
    children(): NodeListOf<ChildNode> {
      return el.childNodes;
    },
    text(txt: unknown): toolsInterface {
      el.textContent = txt.toString();
      return this;
    },
    textChild(string: unknown): toolsInterface {
      const textEl: Text = document.createTextNode(string.toString());
      el.appendChild(textEl);
      return this;
    },
    type(type: string): toolsInterface {
      el.type = type;
      return this;
    },
    name(name: string): toolsInterface {
      el.name = name;
      return this;
    },
    intro({name, type}: {name: string, type: string}): toolsInterface {
      el.name = name;
      el.type = type;
      return this;
    },
    input(type: string): toolsInterface {
      el.name = el.id;
      el.type = type;
      return this;
    },
    htmlFor(elementTheLabelIsFor: string): toolsInterface {
      el.htmlFor = elementTheLabelIsFor;
      return this;
    },
    find(element: string): NodeListOf<Element> {
      return el.querySelectorAll(element);
    },
    siblings(): Node[] | Element[]| unknown[] {
      return Array.from(el.parentNode.children).filter((child: Element): boolean => child !== el);
    },
    previous(): Element{
      return el.previousElementSibling;
    },
    next(): Element{
      return el.nextElementSibling;
    },
    val(newVal: null | string = null): string | toolsInterface{
      if (newVal == null) {
        return el.value;
      }
      el.value = newVal;
      return this;
    },
    data(dataSuffix: string): string {
      return el.getAttribute(`data-${dataSuffix}`);
    },
    height(): number {
      const styles: CSSStyleDeclaration = window.getComputedStyle(el);
      const height: number = el.offsetHeight;
      const borderTopWidth: number = parseFloat(styles.borderTopWidth);
      const borderBottomWidth: number = parseFloat(styles.borderBottomWidth);
      const paddingTop: number = parseFloat(styles.paddingTop);
      const paddingBottom: number = parseFloat(styles.paddingBottom);
      return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
    },
    width(): number {
      const styles: CSSStyleDeclaration = window.getComputedStyle(el);
      const width:number = el.offsetWidth;
      const borderTopWidth:number = parseFloat(styles.borderTopWidth);
      const borderBottomWidth:number = parseFloat(styles.borderBottomWidth);
      const paddingTop:number = parseFloat(styles.paddingTop);
      const paddingBottom:number = parseFloat(styles.paddingBottom);
      return width - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
    },
    diameter(): {width: number, height: number} {
      return {width: el.scrollWidth, height: el.scrollHeight};
    },
    stats(): {offsetTop: number, offsetLeft: number, positionTop: number, positionLeft: number, heightRestricted: number, widthRestricted: number, height: number, width: number} {
      const box = el.getBoundingClientRect();
      const styles: CSSStyleDeclaration = window.getComputedStyle(el);
      const height: number = el.offsetHeight;
      const width: number = el.offsetWidth;
      const borderTopWidth: number = parseFloat(styles.borderTopWidth);
      const borderBottomWidth: number = parseFloat(styles.borderBottomWidth);
      const paddingTop: number = parseFloat(styles.paddingTop);
      const paddingBottom: number = parseFloat(styles.paddingBottom);
      const restrictedHeight: number = height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
      const restrictedWidth: number = width - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
      return {
        offsetTop: box.top + window.pageYOffset - document.documentElement.clientTop,
        offsetLeft: box.left + window.pageXOffset - document.documentElement.clientLeft,
        positionTop: el.offsetTop,
        positionLeft: el.offsetLeft,
        heightRestricted: restrictedHeight,
        widthRestricted: restrictedWidth,
        height: el.scrollHeight,
        width: el.scrollWidth,
      };
    },
    position(): {left: number, top: number} {
      return {left: el.offsetLeft, top: el.offsetTop};
    },
    offset(): {top: number, left: number} {
      const box = el.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft,
      };
    },
    load(url: string, completeCallback: () => any | PromiseLike<void> | null = null): toolsInterface {
      if (completeCallback == null){
        fetch(url).then((data: Response) => data.text()).then((data) => { el.innerHTML = data; });
      } else {
        fetch(url).then((data: Response) => data.text()).then((data) => { el.innerHTML = data; }).then(completeCallback());
      }
      return this;
    },
    on(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface {
      el.addEventListener(eventName, eventHandler);
      return this;
    },
    off(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface {
      el.removeEventListener(eventName, eventHandler);
      return this;
    },
  };
  el = tools.grab(selector);
  return tools;
};

export const micro = µ;

export default µ;
