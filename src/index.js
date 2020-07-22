import {µ, µAll} from './micro.js';
import {Ω, ΩCSS, ΩMany} from './omega';
import Φ from './phi'
import {changeVal, documentHeight, documentWidth, findVal, pageDone, recase, refresh, rerender, retractDiv, saveInput, scrollTop, windowHeight, windowWidth} from './helperFn';

const helpers = {
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

exports = {
  µ,
  µAll,
  Ω,
  ΩCSS,
  ΩMany,
  Φ,
  helpers
};