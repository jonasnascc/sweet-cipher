import { Ref } from "react";

import { ChordPopover } from "./ChordPopover";

type VerseChordsProps = {
    chordsText: string,
    mousePosition?:{px:number, index:number},
    ref?:Ref<HTMLDivElement>,

    mouseHovering ?: boolean,
    popoverOpen : boolean,

    onSpaceClick?: (state:boolean) => void,
    onPickChord?: (chord:string) => void,

}

export const VerseChords = (
    { ref, chordsText, mousePosition, popoverOpen,  mouseHovering=false, onSpaceClick, onPickChord, ...props } : VerseChordsProps & React.HTMLAttributes<HTMLDivElement>
) => {

    return (
        <div 
            ref={ref}
            className="relative whitespace-pre font-mono cursor-pointer"
            onClick={props.onClick}
            onMouseMove={props.onMouseMove}
        >
            <div className="font-bold" onMouseLeave={props.onMouseLeave}>{chordsText}</div>
            <ChordPopover
                open = {popoverOpen}
                onTrigger={onSpaceClick}
                onPickChord={onPickChord}
            >
                {(mouseHovering || popoverOpen) &&
                    <div 
                        className="absolute
                        bg-gray-400 h-[100%] top-0 cursor-pointer rounded-full" 
                        style={{
                            left: `${mousePosition && `${mousePosition.px}px`}`,
                            width: `${mousePosition && `${mousePosition.px/mousePosition.index}px`}`,
                            height: `${mousePosition && `${mousePosition.px/mousePosition.index}px`}` ,
                            top: `8px`
                        }}
                    ></div>
                }
            </ChordPopover>
            
        </div>
    );
};
