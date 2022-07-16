import { ComponentStory } from '@storybook/react';
import FloatButton from '.';

const options = [
  {
    name: 'Edit',
    icon: '/add.svg',
    onClick: () => {}
  },
  {
    name: 'Delete',
    icon: '/add.svg',
    onClick: () => {}
  }
];

export default {
  title: 'Inputs/FloatButton',
  component: FloatButton
};

const Template: ComponentStory<typeof FloatButton> = (args) => <FloatButton {...args} />;

export const Primary = () => <FloatButton />;
export const FloatingButtonExpanded = () => <FloatButton variant="expand" options={options} />;

export const Custom = Template.bind({});
