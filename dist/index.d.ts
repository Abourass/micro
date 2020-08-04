export declare const helpers: {
    pageDone: (cb: any) => void;
    windowHeight: ({ scrollbar }: {
        scrollbar: boolean;
    }) => number;
    windowWidth: ({ scrollbar }: {
        scrollbar: boolean;
    }) => number;
    documentHeight: () => number;
    documentWidth: () => number;
    scrollTop: () => void;
    recase: (str: unknown, caseType?: "pascal" | "camel") => unknown;
};
export declare const greek: {
    µ: (selector: string) => import("./micro.js").toolsInterface;
    Ω: (element: string, idForNewElement: string, appendTo: string) => import("./micro.js").toolsInterface;
    ΩCSS: (styles: string) => void;
    ΩMany: (arrayOfObjects: any) => void;
    Φ: (element: string, idForNewElement: string, appendTo: string, cb: (id: string) => void) => import("./micro.js").toolsInterface;
    helpers: {
        pageDone: (cb: any) => void;
        windowHeight: ({ scrollbar }: {
            scrollbar: boolean;
        }) => number;
        windowWidth: ({ scrollbar }: {
            scrollbar: boolean;
        }) => number;
        documentHeight: () => number;
        documentWidth: () => number;
        scrollTop: () => void;
        recase: (str: unknown, caseType?: "pascal" | "camel") => unknown;
    };
};
export default greek;
