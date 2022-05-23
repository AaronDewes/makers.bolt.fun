import React, { useState } from 'react'

const types = [
    {
        text: "📜 Story",
        value: 'story'
    }, {
        text: "💰 Bounty",
        value: 'bounty'
    }, {
        text: "❓ Question",
        value: 'question'
    },
] as const;

type Value = typeof types[number]['value'];

interface Props {
    selectionChanged?: (newFilter: Value) => void
}

export default function PostTypeList({ selectionChanged }: Props) {

    const [selected, setSelected] = useState<Value>(types[0].value);

    const handleClick = (newValue: Value) => {
        if (selected === newValue)
            return
        setSelected(newValue);
        selectionChanged?.(newValue);
    }

    return (
        <div className=''>
            <p className="text-body2 font-bolder text-black mb-16">Type of post</p>
            <ul>
                {types.map((f, idx) => <li
                    key={f.value}
                    className={`p-12 rounded-8 cursor-pointer font-bold ${f.value === selected && 'bg-gray-100'}`}
                    onClick={() => handleClick(f.value)}
                >
                    {f.text}
                </li>)}
            </ul>
        </div>
    )
}
