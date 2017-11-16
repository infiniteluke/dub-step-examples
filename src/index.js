import React from 'react';
import { render } from 'react-dom';

// Examples
import SwipeYepNope from './examples/SwipeYepNope';
import SimpleCarousel from './examples/SimpleCarousel';
import MultiStepForm from './examples/MultiStepForm';

const DOGE_PICS = [
  'http://doge2048.com/meta/doge-600.png',
  'http://doge2048.com/meta/doge-600.png',
  'http://doge2048.com/meta/doge-600.png',
  'http://doge2048.com/meta/doge-600.png',
  'http://doge2048.com/meta/doge-600.png'
];

const CAT_PICS = [
  'https://img.buzzfeed.com/buzzfeed-static/static/2014-06/6/12/enhanced/webdr08/original-21313-1402070821-13.jpg',
  'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr04/10/12/enhanced-buzz-29081-1397145781-14.jpg',
  'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/9/14/original-631-1397069471-21.jpg',
  'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/9/14/enhanced-18799-1397069418-11.jpg'
];

const App = () => (
  <div>
    <h1>Dub Step🕺🏽</h1>
    <p>
      Primitives for building index based UI widgets controlled by swipe,
      timers, and/or buttons.
    </p>
    <p>
      Check out the{' '}
      <a href="https://github.com/infiniteluke/dub-step">GitHub repo</a> for the
      most up to date code.
    </p>
    <h2>Simple Carousel Example</h2>
    <p>Swipe or use controls to navigate carousel</p>
    <SimpleCarousel slides={DOGE_PICS} />
    <hr />
    <h2>Swipe Yep/Nope Example</h2>
    <p>Swipe right/left or use 👍🏻/👎🏻 buttons</p>
    <SwipeYepNope slides={CAT_PICS} />
    <h2>Multi-step Form Example</h2>
    <MultiStepForm />
  </div>
);

render(<App />, document.getElementById('root'));
