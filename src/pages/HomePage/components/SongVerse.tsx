import { VerseChords } from "./VerseChords"
import { useCipherChords } from "../../../shared/hooks/useCipherChords"

type SongVerseProps = {
    text: string
}

export const SongVerse = ({text} : SongVerseProps) => {
    const {
        isPopoverOpen,
        isMouseHovering,
        chordsText,
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
            <VerseChords 
                mouseHovering={isMouseHovering}
                popoverOpen={isPopoverOpen}
                ref={verseChordsDivRef}
                chordsText={chordsText} 
                mousePosition={mousePosition}
                onMouseMove={handleMouseMove}
                onSpaceClick={handleMouseClick}
                onMouseLeave={handleMouseLeave}
                onPickChord={onPickChord}
            />
            <div ref={verseDivRef}>{text}</div>
        </div>
    )
}