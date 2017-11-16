import React from 'react';
import glamorous, { Div, Section } from 'glamorous';
import DubStep from 'dub-step';

const Step1 = () => (
  <Section display="flex" flexDirection="column">
    <label for="first">First Name</label>
    <input type="text" name="first" />
    <label for="last">Last Name</label>
    <input type="text" name="last" />
  </Section>
);

const Step2 = Next => (
  <Section display="flex" flexDirection="column">
    <label for="street">Street</label>
    <input type="text" name="street" />
    <label for="first">State</label>
    <select type="text" name="first">
      <option>CA</option>
      <option>TX</option>
      <option>NY</option>
    </select>
    <label for="postal">Postal Code</label>
    <input type="text" name="postal" />
    <Next onClick={() => console.log('Submitted form.')}>Submit</Next>
  </Section>
);

const Thanks = () => (
  <section>
    <h2>Thanks!</h2>
  </section>
);

const steps = [Step1, Step2, Thanks];

export default () => (
  <DubStep total={steps.length}>
    {({ Next, Previous, step }) => (
      <Section margin="0 auto 200px auto" maxWidth="300px">
        <h3>{`Step ${step + 1} of ${steps.length}`}</h3>
        <Div height="2px">
          <Div
            height="2px"
            width={`${Math.min(
              100,
              Math.max(0, step / (steps.length - 1) * 100)
            )}%`}
            backgroundImage="linear-gradient(to right, #d1fffb 0%, #00baba 100%)"
            transition="width .1s ease"
          />
        </Div>
        <div>{steps[step](Next)}</div>
        <Div display="flex" justifyContent="center">
          {step - 1 >= 0 ? <Previous>Back</Previous> : null}
          {step + 2 <= steps.length - 1 ? <Next>Next</Next> : null}
        </Div>
      </Section>
    )}
  </DubStep>
);
