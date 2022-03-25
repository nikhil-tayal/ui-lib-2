import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';
export default {
  title: 'New/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    WithHeading: true,
    WithoutHeading: true
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const WithHeading = Template.bind({});
WithHeading.args = {
  children: 'Card',
  heading: 'Heading'
};

export const WithoutHeading = Template.bind({});
WithoutHeading.args = {
  children: 'Card',
};