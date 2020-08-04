import µ, {toolsInterface} from './micro.js';

export const Φ = function(element: string, idForNewElement: string, appendTo: string, cb: (id: string) => void): toolsInterface {
  const newEl: HTMLElement = document.createElement(element);
  newEl.id = idForNewElement;
  document.querySelector(appendTo).appendChild(newEl);
  cb(`#${idForNewElement}`);
  return µ(`#${idForNewElement}`);
};

export const phi = Φ;

export default Φ
