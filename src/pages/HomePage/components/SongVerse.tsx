import { VerseChords } from "./VerseChords"
import { useCipherChords } from "../../../shared/hooks/useCipherChords"

type SongVerseProps = {
    text: string
}

export const SongVerse = ({text} : SongVerseProps) => {
    const {
        chordsPositions,
        isPopoverOpen,
        isMouseHovering,
        isHoveringEmpty,
        verseDivRef,
        verseChordsDivRef,
        mousePosition,
        handleMouseLeave,
        handleMouseClick,
        handleMouseMove,
        onPickChord
    } = useCipherChords(text)

    if(!text) return null
    return (
        <div className="flex flex-col items-start">
            {/* {JSON.stringify({cp: chordsPositions, len: chordsPositions.join("").replace(/#/g, "").length, ...mousePosition,isMouseHovering, isPopoverOpen})} */}
            <VerseChords 
                chordsPositions={chordsPositions}
                mouseHovering={isMouseHovering}
                hoveringEmpty={isHoveringEmpty}
                popoverOpen={isPopoverOpen}
                ref={verseChordsDivRef}
                mousePosition={mousePosition}
                onMouseMove={handleMouseMove}
                onMouseClick={handleMouseClick}
                onMouseLeave={handleMouseLeave}
                onPickChord={onPickChord}
            />
            <div className="ml-10" ref={verseDivRef}>{text}</div>
        </div>
    )
}