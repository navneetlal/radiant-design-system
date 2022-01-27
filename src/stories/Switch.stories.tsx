import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from '../components/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label : 'Switch'
  }
} as ComponentMeta<typeof Switch>;


const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Small = Template.bind({});

Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});

Medium.args = {
  size: 'medium',
};

export const Colored = Template.bind({});

Colored.args = {
  colored: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

