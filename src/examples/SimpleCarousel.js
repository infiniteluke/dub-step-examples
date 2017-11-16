import React, { Component } from 'react';
import glamorous, { Div, Img } from 'glamorous';
import DubStep from 'dub-step';

const DogeImg = glamorous.img(props => ({
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  transform: `translate3d(${props.swipeLeftDistance}px, 0, 0) scale(${props.i ===
  props.step
    ? 1.05
    : 1})`,
  transition: !props.dragging ? 'all .3s ease-in-out' : undefined,
  padding: '20px'
}));

const SimpleCarouselWrapper = glamorous.div({
  margin: '0 auto',
  overflow: 'hidden',
  width: '350px'
});

const SimpleCarouselSlides = glamorous.section(props => ({
  display: 'flex',
  transform: `translate3d(${-props.step * 350}px, 0, 0)`,
  transition: 'all .3s ease-in-out'
}));

export default ({ slides }) => (
  <DubStep
    cycle
    swipe
    draggable
    pauseOnHover
    duration={1500}
    total={slides.length}
    onNext={step => console.log('next step is', step)}
    onPrevious={step => console.log('prev step is', step)}
  >
    {({
      Next,
      Previous,
      Pause,
      Play,
      Step,
      StepIndex,
      swipeLeftDistance,
      dragging,
      swipeDirectionSign,
      step
    }) => (
      <section>
        <SimpleCarouselWrapper>
          <SimpleCarouselSlides step={step}>
            {slides.map((url, i) => (
              <Step
                component={DogeImg}
                swipeLeftDistance={swipeLeftDistance}
                dragging={dragging}
                i={i}
                key={i}
                step={step}
                src={url}
                alt="doge pic"
              />
            ))}
          </SimpleCarouselSlides>
        </SimpleCarouselWrapper>
        <Div display="flex" justifyContent="center">
          {slides.map((url, i) => (
            <StepIndex
              component={Img}
              step={i}
              onMouseEnter={() => console.log(`About to switch to step ${i}`)}
              key={i}
              src={url}
              width="30px"
              height="30px"
              margin="5px"
              padding="2px"
              border={i === step ? '1px solid darkgray' : 'none'}
              transform={`scale(${i === step ? 1.2 : 1})`}
            />
          ))}
        </Div>
        <Div display="flex" justifyContent="center">
          <Previous>Previous</Previous>
          <Next>Next</Next>
          <Play>Play</Play>
          <Pause>Pause</Pause>
        </Div>
      </section>
    )}
  </DubStep>
);
