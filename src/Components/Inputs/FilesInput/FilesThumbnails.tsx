import React, { useMemo } from 'react'
import { MdClose } from 'react-icons/md';
import IconButton from 'src/Components/IconButton/IconButton';
import FileThumbnail from './FileThumbnail';

interface Props {
    files?: (File | string)[] | string;
    onRemove?: (idx: number) => void
}

function processFiles(files: Props['files']) {

    if (!files) return [];
    if (typeof files === 'string') return [files];
    return files;
}

export default function FilesThumbnails({ files, onRemove }: Props) {
    const filesConverted = useMemo(() => processFiles(files), [files])

    return (
        <div className="flex gap-12 mb-12">
            {
                filesConverted.map((file, idx) => <FileThumbnail
                    key={idx}
                    file={file}
                    onRemove={() => onRemove?.(idx)} />)
            }
        </div>
    )
}
