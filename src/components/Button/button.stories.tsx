import { ComponentStory, Meta } from '@storybook/react';
import Button from '.';

export default {
  title: 'Inputs/Button',
  component: Button
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = () => <Template variant="primary">Click Me</Template>;
// export const Outline = () => <Template variant="outline">Click Me</Template>;
// export const Text = () => <Template variant="text">Click Me</Template>;

export const Custom = Template.bind({});
Custom.args = {
  variant: 'primary',
  children: 'Click Me',
  type: 'button',
  color: 'primary'
};
