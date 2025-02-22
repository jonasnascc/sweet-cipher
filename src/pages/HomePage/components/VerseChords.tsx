import { Ref } from "react";

type VerseChordsProps = {
    chordsText: string,
    mousePosition?:{px:number, index:number},
    ref?:Ref<HTMLDivElement>,
}

export const VerseChords = (
    { ref, chordsText, mousePosition, ...props } : VerseChordsProps & React.HTMLAttributes<HTMLDivElement>
) => {

    return (
        <div 
            ref={ref}
            className="relative whitespace-pre font-mono cursor-pointer"
            onClick={props.onClick}
            onMouseMove={props.onMouseMove}
        >
            <div>{chordsText}</div>
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
        </div>
    );
};
