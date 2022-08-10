import { ComponentStory, Meta } from '@storybook/react';
import Button from 'components/Button';
import ButtonGroup from '.';

export default {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup
} as Meta;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup orientation="vertical" {...args}>
    <Button>Click Me</Button>
    <Button variant="outline">Click Me</Button>
  </ButtonGroup>
);

export const Custom = Template.bind({});
Custom.args = {
  orientation: 'vertical'
};
