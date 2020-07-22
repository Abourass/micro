import {µ} from './index.js';

export const Ω = function(element, idForNewElement, appendTo) {
  const newEl = document.createElement(element);
  newEl.id = idForNewElement;
  document.querySelector(appendTo).appendChild(newEl);
  return µ(`#${idForNewElement}`);
};

export const ΩMany = function(arrayOfObjects){
  arrayOfObjects.forEach((obj) => {
    const newEl = document.createElement(obj.element);
    newEl.id = obj.idForNewElement;
    document.querySelector(obj.appendTo).appendChild(newEl);
  });
};

export const ΩCSS = function(styles){
  const css = document.createElement('style'); css.type = 'text/css';
  if (css.styleSheet){ css.styleSheet.cssText = styles; } else { css.appendChild(document.createTextNode(styles)); }
  document.getElementsByTagName('head')[0].appendChild(css);
};

export default {Ω, ΩCSS, ΩMany};
