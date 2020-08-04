import µ from './micro.js';
export const Φ = function (element, idForNewElement, appendTo, cb) {
    const newEl = document.createElement(element);
    newEl.id = idForNewElement;
    document.querySelector(appendTo).appendChild(newEl);
    cb(`#${idForNewElement}`);
    return µ(`#${idForNewElement}`);
};
export const phi = Φ;
export default Φ;
//# sourceMappingURL=phi.js.map