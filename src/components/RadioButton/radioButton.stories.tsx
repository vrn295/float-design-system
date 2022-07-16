import { ComponentStory } from '@storybook/react';
import RadioButton from '.';

export default {
  title: 'Inputs/RadioButton',
  component: RadioButton
};

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Primary = () => <RadioButton label="Unchecked" />;
export const Disabled = () => <RadioButton label="Disabled" disabled />;
export const Selected = () => <RadioButton label="Selected" checked />;
export const DisabledFilled = () => <RadioButton label="Disabled Filled" disabled checked />;

export const Custom = Template.bind({});

Custom.args = {
  label: 'Your Label'
};
