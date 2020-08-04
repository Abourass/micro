import µ, {toolsInterface} from './micro.js';

export const Ω = function(element: string, idForNewElement: string, appendTo: string): toolsInterface {
  const newEl: HTMLElement = document.createElement(element);
  newEl.id = idForNewElement;
  document.querySelector(appendTo).appendChild(newEl);
  return µ(`#${idForNewElement}`);
};

export const omega = Ω;

export const ΩMany = function(arrayOfObjects: any): void{
  arrayOfObjects.forEach((obj: any): void => {
    const newEl: HTMLElement = document.createElement(obj.element);
    newEl.id = obj.idForNewElement;
    document.querySelector(obj.appendTo).appendChild(newEl);
  });
};

export const omegaMany = ΩMany;

export const ΩCSS = function(styles: string): void {
  const css: HTMLStyleElement = document.createElement('style');
  css.appendChild(document.createTextNode(styles));
  document.getElementsByTagName('head')[0].appendChild(css);
};

export const omegaCSS = ΩCSS;

export default Ω;
