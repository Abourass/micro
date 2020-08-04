export declare const pageDone: (cb: any) => void;
export declare const windowHeight: ({ scrollbar }: {
    scrollbar: boolean;
}) => number;
export declare const windowWidth: ({ scrollbar }: {
    scrollbar: boolean;
}) => number;
export declare const documentHeight: () => number;
export declare const documentWidth: () => number;
export declare const scrollTop: () => void;
export declare const recase: (str: unknown, caseType?: 'pascal' | 'camel') => unknown | string;
declare const _default: {
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
export default _default;
