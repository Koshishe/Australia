import './vendor/polyfills';
import './modules/sitePreloader';
import documentReady from './utils/documentReady';
import documentLoaded from './utils/documentLoaded';
import resize from './modules/resize';
import cssVars from './modules/cssVars';
import lazyload from './modules/lazyload';
import tabs from './modules/tabs';
import report from './modules/reportSlider';
import gallery from './modules/gallerySlider';

documentReady(() => {
  resize.init();
  cssVars.init();
  lazyload.init();
  tabs.init();
  report.init();
  gallery.init();
});

documentLoaded(() => {

});
