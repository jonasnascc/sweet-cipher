import { useEffect, useState } from "react"
import { SongVerse } from "./SongVerse"

type EditorRowsProps = {
    lyrics : string
}

export const EditorSongVerses = ({lyrics} : EditorRowsProps) => {
    const [verses, setVerses] = useState<string[]>([])
    
    useEffect(() => {
        setVerses(lyrics.replace("\r", "").split("\n"))
    }, [lyrics])

    return (
        <div className="flex flex-col gap-5">
        {
            verses.map((verse, index) => (
                <SongVerse key={index} text={verse}/>
            ))
        }
        </div>
    )
}