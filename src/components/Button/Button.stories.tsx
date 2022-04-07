import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppButton from './Button';
export default {
  title: 'New/Button',
  component: AppButton,
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'outlined',
  color: 'secondary'
};