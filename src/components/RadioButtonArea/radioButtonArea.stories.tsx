import { ComponentStory } from '@storybook/react';
import RadioButtonArea from '.';

export default {
  title: 'Inputs/RadioButtonArea',
  component: RadioButtonArea
};

const Template: ComponentStory<typeof RadioButtonArea> = (args) => <RadioButtonArea {...args} />;

export const Primary = () => (
  <RadioButtonArea
    label="This is a dummy text"
    description="This is also a dummy text for body text paragraph. This is also a dummy text for body text paragraph."
  />
);
export const Disabled = () => (
  <RadioButtonArea
    label="This is a dummy text"
    description="This is also a dummy text for body text paragraph. This is also a dummy text for body text paragraph."
    disabled
  />
);
export const Selected = () => (
  <RadioButtonArea
    label="This is a dummy text"
    description="This is also a dummy text for body text paragraph. This is also a dummy text for body text paragraph."
    checked
  />
);
export const DisabledFilled = () => (
  <RadioButtonArea
    label="This is a dummy text"
    description="This is also a dummy text for body text paragraph. This is also a dummy text for body text paragraph."
    checked
    disabled
  />
);

export const Custom = Template.bind({});

Custom.args = {
  label: 'Your Label',
  description: 'Your Description'
};
