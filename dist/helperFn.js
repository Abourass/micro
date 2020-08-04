export const pageDone = function (cb) {
    if (document.readyState === 'complete' || document.readyState !== 'loading') {
        cb();
    }
    else {
        document.addEventListener('DOMContentLoaded', cb);
    }
};
export const windowHeight = ({ scrollbar }) => {
    if (scrollbar) {
        return window.document.documentElement.clientHeight;
    }
    return window.innerHeight;
};
export const windowWidth = ({ scrollbar }) => {
    if (scrollbar) {
        return window.document.documentElement.clientWidth;
    }
    return window.innerWidth;
};
export const documentHeight = () => {
    const body = document.body;
    const html = document.documentElement;
    return Math.max(body.offsetHeight, body.scrollHeight, html.clientHeight, html.offsetHeight, html.scrollHeight);
};
export const documentWidth = () => {
    const body = document.body;
    const html = document.documentElement;
    return Math.max(body.offsetWidth, body.scrollWidth, html.clientWidth, html.offsetWidth, html.scrollWidth);
};
export const scrollTop = () => { (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop; };
export const recase = (str, caseType = 'pascal') => {
    if (typeof str !== 'string') {
        return str;
    }
    if (!(str.indexOf(' ') !== -1)) {
        return str;
    }
    const arrayOfStr = str.split(' ');
    let newStr = '';
    arrayOfStr.forEach((strFragment) => {
        const formatted = strFragment.charAt(0).toUpperCase() + strFragment.slice(1);
        newStr += formatted.trim();
    });
    if (caseType === 'camel') {
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
//# sourceMappingURL=helperFn.js.map