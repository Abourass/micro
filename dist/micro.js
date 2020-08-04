export const µ = function (selector) {
    let el;
    const tools = {
        grab(tempSelector) {
            if (el)
                return el;
            return document.querySelector(tempSelector);
        },
        toggleClass(className) {
            el.classList.toggle(className);
            return this;
        },
        addClass(className) {
            if (Array.isArray(className)) {
                className.forEach((singleClass) => {
                    el.classList.add(singleClass);
                });
            }
            else {
                el.classList.add(className);
            }
            return this;
        },
        removeClass(className) {
            el.classList.remove(className);
            return this;
        },
        hasClass(className) {
            return el.classList.contains(className);
        },
        css(arrayOrObject) {
            if (Array.isArray(arrayOrObject)) {
                arrayOrObject.forEach((obj) => { el.style[Object.keys(obj)[0]] = obj.value; });
            }
            else {
                el.style[Object.keys(arrayOrObject)[0]] = arrayOrObject.value;
            }
            return this;
        },
        replaceWith(string) {
            el.outerHTML = string;
            return this;
        },
        replaceWithElement(element, idForNewElement = null) {
            const newEl = document.createElement(element), idToUse = idForNewElement || el.id;
            newEl.id = idToUse;
            el.parentNode.replaceChild(newEl, el);
            return µ(`#${idToUse}`);
        },
        html(string = null) {
            if (!string)
                return el.innerHTML;
            el.innerHTML = string;
            return this;
        },
        empty() {
            el.innerHTML = null;
            return this;
        },
        wrap(classForDiv) {
            const wrapper = document.createElement('div');
            wrapper.className = classForDiv;
            el.parentNode.insertBefore(wrapper, el);
            el.parentNode.removeChild(el);
            wrapper.appendChild(el);
            return this;
        },
        context() {
            return el.outerHTML;
        },
        src(srcString) {
            el.src = srcString;
            return this;
        },
        remove() {
            el.parentNode.removeChild(el);
            return this;
        },
        set(setObj) {
            Object.keys(setObj).forEach((key) => {
                el.setAttribute(key, setObj[key]);
            });
            return this;
        },
        child(element, insertAt = null) {
            if (insertAt === 'append' || insertAt == null) {
                el.append(element);
            }
            if (insertAt === 'prepend') {
                el.prepend(element);
            }
            return this;
        },
        children() {
            return el.childNodes;
        },
        text(txt) {
            el.textContent = txt.toString();
            return this;
        },
        textChild(string) {
            const textEl = document.createTextNode(string.toString());
            el.appendChild(textEl);
            return this;
        },
        type(type) {
            el.type = type;
            return this;
        },
        name(name) {
            el.name = name;
            return this;
        },
        intro({ name, type }) {
            el.name = name;
            el.type = type;
            return this;
        },
        input(type) {
            el.name = el.id;
            el.type = type;
            return this;
        },
        htmlFor(elementTheLabelIsFor) {
            el.htmlFor = elementTheLabelIsFor;
            return this;
        },
        find(element) {
            return el.querySelectorAll(element);
        },
        siblings() {
            return Array.from(el.parentNode.children).filter(child => child !== el);
        },
        previous() {
            return el.previousElementSibling;
        },
        next() {
            return el.nextElementSibling;
        },
        val(newVal = null) {
            if (newVal == null) {
                return el.value;
            }
            el.value = newVal;
            return this;
        },
        data(dataSuffix) {
            return el.getAttribute(`data-${dataSuffix}`);
        },
        height() {
            const styles = window.getComputedStyle(el);
            const height = el.offsetHeight;
            const borderTopWidth = parseFloat(styles.borderTopWidth);
            const borderBottomWidth = parseFloat(styles.borderBottomWidth);
            const paddingTop = parseFloat(styles.paddingTop);
            const paddingBottom = parseFloat(styles.paddingBottom);
            return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
        },
        width() {
            const styles = window.getComputedStyle(el);
            const width = el.offsetWidth;
            const borderTopWidth = parseFloat(styles.borderTopWidth);
            const borderBottomWidth = parseFloat(styles.borderBottomWidth);
            const paddingTop = parseFloat(styles.paddingTop);
            const paddingBottom = parseFloat(styles.paddingBottom);
            return width - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
        },
        diameter() {
            return { width: el.scrollWidth, height: el.scrollHeight };
        },
        stats() {
            const box = el.getBoundingClientRect();
            const styles = window.getComputedStyle(el);
            const height = el.offsetHeight;
            const width = el.offsetWidth;
            const borderTopWidth = parseFloat(styles.borderTopWidth);
            const borderBottomWidth = parseFloat(styles.borderBottomWidth);
            const paddingTop = parseFloat(styles.paddingTop);
            const paddingBottom = parseFloat(styles.paddingBottom);
            const restrictedHeight = height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
            const restrictedWidth = width - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
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
        position() {
            return { left: el.offsetLeft, top: el.offsetTop };
        },
        offset() {
            const box = el.getBoundingClientRect();
            return {
                top: box.top + window.pageYOffset - document.documentElement.clientTop,
                left: box.left + window.pageXOffset - document.documentElement.clientLeft,
            };
        },
        load(url, completeCallback = null) {
            if (completeCallback == null) {
                fetch(url).then(data => data.text()).then((data) => { el.innerHTML = data; });
            }
            else {
                fetch(url).then(data => data.text()).then((data) => { el.innerHTML = data; }).then(completeCallback());
            }
            return this;
        },
        on(eventName, eventHandler) {
            el.addEventListener(eventName, eventHandler);
            return this;
        },
        off(eventName, eventHandler) {
            el.removeEventListener(eventName, eventHandler);
            return this;
        },
    };
    el = tools.grab(selector);
    return tools;
};
export const micro = µ;
export default µ;
//# sourceMappingURL=micro.js.map