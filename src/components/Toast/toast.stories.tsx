import { ComponentStory, Meta } from '@storybook/react';
import Button from 'components/Button';
import { useState } from 'react';
import Toast from '.';

export default {
  title: 'Inputs/Toast',
  component: Toast
} as Meta;

const Template: ComponentStory<typeof Toast> = (args) => {
  const [isOpen, setisOpen] = useState(false);
  const handleToastToggle = () => {
    setisOpen((prev) => !prev);
  };
  return (
    <>
      <Button onClick={handleToastToggle}>Show Toast</Button>
      {isOpen && <Toast {...args} />}
    </>
  );
};

export const Custom = Template.bind({});
Custom.args = {
  text: 'This is a success message',
  type: 'success'
};

Custom.parameters = {
  docs: {
    source: {
      // code: `<Toast />`,
      language: 'html',
      type: 'dynamic'
    }
  }
};
