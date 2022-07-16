import { ComponentStory } from '@storybook/react';
import InputField from '.';

export default {
  title: 'Inputs/InputField',
  component: InputField
};

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Primary = () => (
  <InputField
    value=""
    placeholder="Name"
    label="Name"
    helperText="Help instructions (if any)"
    required
  />
);

export const Custom = Template.bind({});

Custom.args = {
  label: 'Your Label'
};
