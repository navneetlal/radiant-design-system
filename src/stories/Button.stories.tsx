import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: "BUTTON",
    variant: 'contained'
  }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: 'secondary',
};

export const Success = Template.bind({});

Success.args = {
  color: 'success',
};

export const Warning = Template.bind({});

Warning.args = {
  color: 'warning',
};

export const Error = Template.bind({});

Error.args = {
  color: 'error',
};