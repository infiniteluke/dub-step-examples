import React from 'react';
import glamorous, { Img, Div } from 'glamorous';
import DubStep from 'dub-step';

const LikeIndicator = glamorous.button(props => ({
  border: `3px solid ${props.like ? 'green' : 'red'}`,
  color: props.like ? 'green' : 'red',
  cursor: 'pointer',
  textAlign: 'center',
  position: 'relative',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  backgroundColor: props.liked
    ? props.like ? 'green' : 'red'
    : props.like ? 'lightgreen' : 'lightcoral',
  transition: 'background-color .2s ease-in',
  ':before': {
    fontSize: '16px',
    content: props.like ? '"👍"' : '"👎"'
  }
}));

export default ({ slides }) => (
  <DubStep
    cycle
    swipe
    draggable
    swipeIterateOnly
    touchThreshold={3}
    total={slides.length}
    onBeforeChange={i => console.log('about to change', i)}
    onChange={i => console.log('changing', i)}
    onAfterChange={i => console.log('just changed', i)}
  >
    {({
      Next,
      Step,
      step,
      swiped,
      dragging,
      swipeRatio,
      swipeDirectionSign,
      swipeLeftDistance,
      swipeDownDistance
    }) => (
      <section>
        <Step component={Div} display="flex" justifyContent="center">
          <Img
            src={slides[step]}
            alt="cat pic"
            height="300"
            transform={`translate3d(${swipeLeftDistance}px, ${swipeDownDistance}px, 0) rotate(${Math.min(
              30,
              Math.max(-30, -1 * swipeDirectionSign * swipeRatio * 100)
            )}deg)`}
            transition={!dragging ? 'transform .2s ease' : undefined}
          />
        </Step>
        <Div display="flex" justifyContent="space-around" marginTop="20px">
          <Next
            component={LikeIndicator}
            likeRatio={swipeRatio}
            liked={swipeDirectionSign === -1 ? swiped : false}
          />
          <Next
            component={LikeIndicator}
            likeRatio={swipeRatio}
            liked={swipeDirectionSign === 1 ? swiped : false}
            like
          />
        </Div>
        <ul>
          <li>{`Current Step: ${step}`}</li>
          <li>{`Swipe Left: ${swipeLeftDistance}`}</li>
          <li>{`Swipe Down: ${swipeDownDistance}`}</li>
          <li>{`Swiped?: ${swiped}`}</li>
          <li>{`Swipe Direction: ${swipeDirectionSign}`}</li>
        </ul>
      </section>
    )}
  </DubStep>
);
