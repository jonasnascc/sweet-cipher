import { Ref } from "react";

import { ChordPopover } from "./ChordPopover";

type VerseChordsProps = {
    mousePosition?:{px:number, index:number},
    ref?:Ref<HTMLDivElement>,

    mouseHovering ?: boolean,
    popoverOpen : boolean,
    hoveringEmpty ?: boolean,

    chordsPositions : string[],

    onMouseClick?: (state:boolean) => void,
    onPickChord?: (chord:string) => void,

}

export const VerseChords = (
    { ref, mousePosition, popoverOpen, hoveringEmpty = true, mouseHovering=false, chordsPositions, onMouseClick, onPickChord, ...props } : VerseChordsProps & React.HTMLAttributes<HTMLDivElement>
) => {

    return (
        <div 
            ref={ref}
            className="relative whitespace-pre font-mono cursor-pointer"
            onClick={props.onClick}
            onMouseMove={props.onMouseMove}
            onMouseLeave={props.onMouseLeave}
        >
            {
                chordsPositions.map((chord, index) => {
                    if(chord!==" ") return (
                        <span className="font-bold hover:text-orange-500 z-10" key={index}>{chord}</span>
                    )
                    return chord
                })
            }
            <ChordPopover
                open = {popoverOpen}
                onTrigger={onMouseClick}
                onPickChord={onPickChord}
            >
                {(mouseHovering || popoverOpen) &&
                    <div >
                        {
                            hoveringEmpty ? 
                            (
                                <div 
                                    className="absolute bg-gray-400 h-[100%] top-0 cursor-pointer rounded-full" 
                                    style={{
                                        left: `${mousePosition && `${mousePosition.px}px`}`,
                                        width: `${mousePosition && `${mousePosition.px/mousePosition.index}px`}`,
                                        height: `${mousePosition && `${mousePosition.px/mousePosition.index}px`}` ,
                                        top: `8px`,
                                    }}
                                ></div>
                            ) : 
                            (
                                <div 
                                    className="absolute h-[100%] top-0 cursor-pointer z-0" 
                                    style={{
                                        left: `${mousePosition && `${mousePosition.px}px`}`,
                                        width: `${mousePosition && `${mousePosition.px/mousePosition.index}px`}`,
                                    }}
                                ></div>
                            )
                        }
                    </div>
                }
            </ChordPopover>
            
        </div>
    );
};