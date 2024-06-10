import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', 'xl', '2xl'],
            control: { type: 'select' },
        }
    }
};