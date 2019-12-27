export const pageDone = function(cb){ // Replaces jQuery document ready
  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    cb();
  } else { document.addEventListener('DOMContentLoaded', cb); }
};
export const windowHeight = ({scrollbar} = {}) => {
  if (scrollbar){ return window.document.documentElement.clientHeight; }
  return window.innerHeight;
};
export const windowWidth = ({scrollbar} = {}) => {
  if (scrollbar){ return window.document.documentElement.clientWidth; }
  return window.innerWidth;
};
export const documentHeight = () => {
  const body = document.body;
  const html = document.documentElement;
  return Math.max(
    body.offsetHeight, body.scrollHeight,
    html.clientHeight, html.offsetHeight, html.scrollHeight,
  );
};
export const documentWidth = () => {
  const body = document.body;
  const html = document.documentElement;
  return Math.max(
    body.offsetWidth, body.scrollWidth,
    html.clientWidth, html.offsetWidth, html.scrollWidth,
  );
};
export const scrollTop = () => { (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop; };
export const findVal = (object, keyName) => {
  let value;
  Object.keys(object).some((k) => {
    if (k === keyName){
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === 'object'){
      value = findVal(object[k], keyName);
      return value !== undefined;
    }
  });
  return value;
};
export const changeVal = (object, target) => {
  let value;
  Object.keys(object).some((k) => {
    if (k === target.id){
      object[k] = target.value;
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === 'object'){
      value = changeVal(object[k], target);
      return value !== undefined;
    }
  });
  return value;
};
export const saveInput = (e) => { changeVal(tempSave, e.target); };
export const refresh = () => { $('.selectpicker').selectpicker('refresh'); };
export const rerender = () => { $('.selectpicker').selectpicker('render'); $('.selectpicker').selectpicker('refresh'); };
export const retractDiv = (target) => {
  animateCSS(`#${target}`, 'bounceOutUp', 'fast');
  setTimeout(() => { // eslint-disable-next-line no-undef
    if (document.getElementById(target)) {
      document.getElementById(target).innerHTML = '';
    }
  }, 400);
};
export const recase = (str, caseType = 'pascal') => {
  if (typeof str !== 'string'){ return str; }
  if (!(str.indexOf(' ') !== -1)){ return str; }
  const arrayOfStr = str.split(' ');
  let newStr = '';
  arrayOfStr.forEach((strFragment) => {
    const formated = strFragment.charAt(0).toUpperCase() + strFragment.slice(1);
    newStr += formated.trim();
  });
  if (caseType === 'camel'){
    return newStr.charAt(0).toLowerCase() + newStr.slice(1);
  }
  return newStr;
};

export default {
  pageDone,
  windowHeight,
  windowWidth,
  documentHeight,
  documentWidth,
  scrollTop,
  findVal,
  changeVal,
  saveInput,
  refresh,
  rerender,
  retractDiv,
  recase,
};
