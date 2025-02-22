import { VerseChords } from "./VerseChords"
import { useCipherChords } from "../../../shared/hooks/useCipherChords"

type SongVerseProps = {
    text: string
}

export const SongVerse = ({text} : SongVerseProps) => {
    const {
        chordsText,
        verseDivRef,
        verseChordsDivRef,
        mousePosition,
        handleMouseClick,
        handleMouseMove
    } = useCipherChords(text)

    if(!text) return null
    return (
        <div className="flex flex-col items-start">
            <VerseChords 
                ref={verseChordsDivRef}
                chordsText={chordsText} 
                mousePosition={mousePosition}
                onMouseMove={handleMouseMove}
                onClick={handleMouseClick}
            />
            <div ref={verseDivRef}>{text}</div>
        </div>
    )
}