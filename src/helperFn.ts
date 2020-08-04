export const pageDone = function(cb: any): void{ // Replaces jQuery document ready
  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    cb();
  } else { document.addEventListener('DOMContentLoaded', cb); }
};
export const windowHeight = ({scrollbar}: {scrollbar: boolean}): number => {
  if (scrollbar){ return window.document.documentElement.clientHeight; }
  return window.innerHeight;
};
export const windowWidth = ({scrollbar}: {scrollbar: boolean}): number => {
  if (scrollbar){ return window.document.documentElement.clientWidth; }
  return window.innerWidth;
};
export const documentHeight = (): number => {
  const body: HTMLElement = document.body;
  const html: HTMLElement = document.documentElement;
  return Math.max(
    body.offsetHeight, body.scrollHeight,
    html.clientHeight, html.offsetHeight, html.scrollHeight,
  );
};
export const documentWidth = (): number => {
  const body: HTMLElement = document.body;
  const html: HTMLElement = document.documentElement;
  return Math.max(
    body.offsetWidth, body.scrollWidth,
    html.clientWidth, html.offsetWidth, html.scrollWidth,
  );
};
export const scrollTop = (): void => { (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop; };
export const recase = (str: unknown, caseType: 'pascal' | 'camel' = 'pascal'): unknown | string => {
  if (typeof str !== 'string'){ return str; }
  if (!(str.indexOf(' ') !== -1)){ return str; }
  const arrayOfStr: string[] = str.split(' ');
  let newStr: string = '';
  arrayOfStr.forEach((strFragment: string): void => {
    const formatted: string = strFragment.charAt(0).toUpperCase() + strFragment.slice(1);
    newStr += formatted.trim();
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
  recase,
};
