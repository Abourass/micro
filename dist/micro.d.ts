export declare interface toolsInterface {
    next(): Element;
    css(arrayOrObject: any): toolsInterface;
    siblings(): (Node[] | Element[] | unknown[]);
    data(dataSuffix: string): string;
    type(type: string): toolsInterface;
    remove(): toolsInterface;
    empty(): toolsInterface;
    diameter(): {
        width: number;
        height: number;
    };
    load(url: string, completeCallback: () => any | PromiseLike<void> | null): toolsInterface;
    children(): NodeListOf<ChildNode>;
    stats(): {
        offsetTop: number;
        offsetLeft: number;
        positionTop: number;
        positionLeft: number;
        heightRestricted: number;
        widthRestricted: number;
        height: number;
        width: number;
    };
    find(element: string): NodeListOf<Element>;
    intro({ name, type }?: {
        name: string;
        type: string;
    }): toolsInterface;
    context(): string;
    replaceWithElement(element: string, idForNewElement?: (string | null)): toolsInterface;
    html(string?: (string | null)): (string | toolsInterface);
    text(txt: unknown): toolsInterface;
    addClass(className: (string[] | string)): toolsInterface;
    height(): number;
    on(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface;
    val(newVal?: (string | null)): (string | toolsInterface);
    set(setObj: any): toolsInterface;
    previous(): Element;
    offset(): {
        top: number;
        left: number;
    };
    src(srcString: string): toolsInterface;
    removeClass(className: string): toolsInterface;
    hasClass(className: string): boolean;
    off(eventName: string, eventHandler: (event: any, opt?: any, opt2?: any, opt3?: any) => void): toolsInterface;
    input(type: string): toolsInterface;
    htmlFor(elementTheLabelIsFor: string): toolsInterface;
    toggleClass(className: string): toolsInterface;
    textChild(string: unknown): toolsInterface;
    name(name: string): toolsInterface;
    width(): number;
    position(): {
        left: number;
        top: number;
    };
    grab(tempSelector: string): Element;
    wrap(classForDiv: string): toolsInterface;
    replaceWith(string: string): toolsInterface;
    child(element: HTMLElement, insertAt?: ("append" | "prepend" | null)): toolsInterface;
}
export declare const µ: (selector: string) => toolsInterface;
export declare const micro: (selector: string) => toolsInterface;
export default µ;
