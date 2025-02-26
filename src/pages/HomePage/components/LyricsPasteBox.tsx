import { useState } from "react";

type LyricsPasteBoxProps = {
    onSubmit : (lyrics:string) => void
}

export const LyricsPasteBox = ({onSubmit} : LyricsPasteBoxProps) => {
    const [lyrics, setLyrics] = useState("")

    const handleChange = (event:any) => {
        setLyrics(event.target.value)
    }

    const handlePaste = async () => {
        try {
        const clipboardText = await navigator.clipboard.readText();
        setLyrics(clipboardText);
        //   console.log(clipboardText.split("\n"))
        } catch (error) {
        }
    };

    const handleSubmit = () => {
        onSubmit(lyrics)
    }

    return (
        <div className="flex flex-col gap-2 items-start">
        <div>
            <textarea
                className="border-2 resize-none w-[60vw] h-80"
                value={lyrics}
                onChange={handleChange}
                placeholder="You can type or paste a full song here..."
            ></textarea>
        </div>
        <div className="flex gap-2 w-[60vw] justify-between">
            <button className="bg-black text-white cursor-pointer p-1 rounded active:bg-gray-700" onClick={handlePaste}>Paste</button>
            <button className="bg-green-700 text-white cursor-pointer p-1 rounded active:bg-green-900" onClick={handleSubmit}>Use this Lyrics</button>
        </div>
        </div>
    )
}