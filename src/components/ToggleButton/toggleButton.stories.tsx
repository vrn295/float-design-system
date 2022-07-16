import { ComponentStory } from '@storybook/react';
import ToggleButton from '.';

export default {
  title: 'Inputs/ToggleButton',
  component: ToggleButton
};

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Primary = () => <ToggleButton />;
export const DisabledToggleOn = () => <ToggleButton checked disabled />;
export const DisabledToggleOff = () => <ToggleButton disabled />;

export const Custom = Template.bind({});
