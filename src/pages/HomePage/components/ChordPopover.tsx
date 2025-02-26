import { ReactNode } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TrashCanIcon } from "@/shared/components/TrashCanIcon"

type ChordPopoverProps = {
    open:boolean,
    onTrigger?: (isOpen: boolean) => void
    onPickChord ?: (chord:string) => void,
    children: ReactNode
}

export const ChordPopover = ({children, open, onPickChord= (name:string) => {}, onTrigger} : ChordPopoverProps) => {

    const handleTrigger = (isOpen:boolean) => {
        if(onTrigger) onTrigger(isOpen);
    }

    const handleDelete = () => {
        onPickChord(" ")
    }
    
    return (
        <div>
            <Popover 
                open={open}
                onOpenChange={handleTrigger}
            >
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent 
                side="top" 
                align="center" 
                className="w-15 h-35 p-0 rounded-full"
            >
                <div className="flex flex-col h-[100%] gap-1">
                    <div className="h-[100%] overflow-auto"><ChordList onPickChord={onPickChord}/></div>
                    <div className="">
                        <button 
                            className="flex items-center justify-center rounded-sm w-[100%] cursor-pointer bg-red-700 p-1 text-white"
                            onClick={handleDelete}
                        >
                            <TrashCanIcon/>
                        </button>
                    </div>
                </div>
            </PopoverContent>
            </Popover>
        </div>
    )
}

const ChordList = ({onPickChord} : {onPickChord:(name:string) => void}) => {
    const chords = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

    return (
        <ul className="w-[100%]">
        {
            chords.map((chord, index) => (
                <ChordListEl key={index} name={chord} onClick={onPickChord}/>
            ))
        }
        </ul>
    )
}

const ChordListEl = ({name, onClick} : {name:string, onClick:(name:string) => void}) => {
    return (
        <li 
            className="cursor-pointer hover:bg-gray-200 w-[100%]"
            onClick={() => onClick(name)}
        >
            {name}
        </li>
    )
}