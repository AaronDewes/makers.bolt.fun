import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from './Slider';

export default {
    title: 'Shared/Slider',
    component: Slider,

} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <div className="overflow-hidden max-w-[770px]"><Slider {...args} >
    <div className="px-64 py-16 bg-gray-200 border shadow-sm rounded-10" onClick={() => { alert(1) }}>
        Item 1
    </div>
    <div className="px-64 py-16 bg-gray-200 border shadow-sm rounded-10" onClick={() => { alert(2) }}>
        Item 2
    </div>
    <div className="px-64 py-16 bg-gray-200 border shadow-sm rounded-10" onClick={() => { alert(3) }}>
        Item 3
    </div>
    <div className="px-64 py-16 bg-gray-200 border shadow-sm rounded-10" onClick={() => { alert(4) }}>
        Item 4
    </div>
    <div className="px-64 py-16 bg-gray-200 border shadow-sm rounded-10" onClick={() => { alert(5) }}>
        Item 5
    </div>
    <div className="px-64 py-16 bg-gray-200 border shadow-sm rounded-10" onClick={() => { alert(6) }}>
        Item 6
    </div>
</Slider></div>;


export const Default = Template.bind({});
Default.args = {
}