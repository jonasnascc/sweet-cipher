import { useState } from "react"
import { EditorSongVerses } from "./EditorSongVerses"
import { LyricsPasteBox } from "./LyricsPasteBox"

export const CipherEditor = () => {
    const[lyrics, setLyrics] = useState<string>("")

    const handlePasteLyrics = (lyrics : string) => {
        setLyrics(lyrics);
    }

    return (
        <div className="flex flex-col gap-8 m-5">
        <LyricsPasteBox onSubmit={handlePasteLyrics}/>
        <EditorSongVerses lyrics={lyrics}/>
        </div>
    )
}