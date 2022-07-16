import { ComponentStory } from '@storybook/react';
import Tooltip from '.';

export default {
  title: 'Inputs/Tooltip',
  component: Tooltip
};

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Custom = Template.bind({});

Custom.args = {
  content: 'This is a tooltip',
  children: <img src="/info.svg" alt="" />
};
