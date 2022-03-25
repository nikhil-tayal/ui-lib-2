import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';
export default {
  title: 'New/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    Outlined: true,
    Filled: true,
    Standard: true,
    Password: true
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Enter your CVV'
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  label: 'Enter your CVV',
};
export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  label: 'Enter your CVV',
};
export const Password = Template.bind({});
Password.args = {
  variant: 'standard',
  label: 'Enter your CVV',
  type: 'password'
};