import { ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Inputs/Button',
  component: Button
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = () => <Button variant="primary">Click Me</Button>;
export const Outline = () => <Button variant="outline">Click Me</Button>;
export const Text = () => <Button variant="text">Click Me</Button>;

export const Custom = Template.bind({});
Custom.args = {
  variant: 'primary',
  children: 'Click Me',
  type: 'button'
};
