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
        <div className="flex justify-center"><LyricsPasteBox onSubmit={handlePasteLyrics}/></div>
        <hr/>
        <div className="border-l-2 p-1">
            <h3 className="text-2xl font-bold mb-3">Your song</h3>
            <EditorSongVerses lyrics={lyrics}/>
        </div>
        </div>
    )
}