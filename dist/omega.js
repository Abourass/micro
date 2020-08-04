import µ from './micro.js';
export const Ω = function (element, idForNewElement, appendTo) {
    const newEl = document.createElement(element);
    newEl.id = idForNewElement;
    document.querySelector(appendTo).appendChild(newEl);
    return µ(`#${idForNewElement}`);
};
export const omega = Ω;
export const ΩMany = function (arrayOfObjects) {
    arrayOfObjects.forEach((obj) => {
        const newEl = document.createElement(obj.element);
        newEl.id = obj.idForNewElement;
        document.querySelector(obj.appendTo).appendChild(newEl);
    });
};
export const omegaMany = ΩMany;
export const ΩCSS = function (styles) {
    const css = document.createElement('style');
    css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName('head')[0].appendChild(css);
};
export const omegaCSS = ΩCSS;
export default Ω;
//# sourceMappingURL=omega.js.map