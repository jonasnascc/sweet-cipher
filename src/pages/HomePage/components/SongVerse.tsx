import { VerseChords } from "./VerseChords"

type SongVerseProps = {
    text: string
}

export const SongVerse = ({text} : SongVerseProps) => {
    if(!text) return null
    return (
        <div>
            <VerseChords/>
            <div>{text}</div>
        </div>
    )
}