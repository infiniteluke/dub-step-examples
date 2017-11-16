import React from 'react';
import DubStep from 'dub-step';
import { Div, Img } from 'glamorous';

export default function BasicSlideshow({ slides, onChange }) {
  return (
    <DubStep cycle pauseOnHover duration={1500} total={slides.length}>
      {({ Next, Previous, Pause, Play, StepIndex, step }) => (
        <section>
          <Div width="350px" overflow="hidden" margin="0 auto">
            <Div
              display="flex"
              transform={`translate3d(${-step * 350}px, 0, 0)`}
              transition="all .3s ease-in-out"
            >
              {slides.map((url, i) => (
                <Img src={url} alt="doge pic" width="100%" height="100%" />
              ))}
            </Div>
          </Div>
          <Div display="flex" justifyContent="center">
            {slides.map((url, i) => (
              <StepIndex
                step={i}
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
      )}
    </DubStep>
  );
}
