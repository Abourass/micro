import µ from './micro.js';
import Ω, { ΩCSS, ΩMany } from './omega';
import Φ from './phi';
import { documentHeight, documentWidth, pageDone, recase, scrollTop, windowHeight, windowWidth } from './helperFn';
export const helpers = {
    pageDone,
    windowHeight,
    windowWidth,
    documentHeight,
    documentWidth,
    scrollTop,
    recase,
};
export const greek = {
    µ: µ,
    Ω: Ω,
    ΩCSS: ΩCSS,
    ΩMany: ΩMany,
    Φ: Φ,
    helpers: helpers
};
export default greek;
//# sourceMappingURL=index.js.map