import {µ} from './index';

const Φ = function(element, idForNewElement, appendTo, cb) {
  const newEl = document.createElement(element);
  newEl.id = idForNewElement;
  document.querySelector(appendTo).appendChild(newEl);
  cb(`#${idForNewElement}`);
  return µ(`#${idForNewElement}`);
};

export default Φ
