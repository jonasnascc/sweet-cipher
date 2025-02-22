import { useEffect, useRef, useState } from "react"

export const useCipherChords = (text:string) => {
    const verseDivRef = useRef<HTMLDivElement>(null)
    const verseChordsDivRef = useRef<HTMLDivElement>(null)

    const [chordsText, setChordsText] = useState("")

    const [mousePosition, setMousePosition] = useState<{px:number, index:number}>({px:-1, index:-1})

    useEffect(() => {handleChangeText(text)}, [text])

    useEffect(() => {
        handleChordsTextChange()
    }, [chordsText]);

    const handleChangeText = (text:string) => {
        setChordsText(" ".repeat(text.length))
    }

    const handleChordsTextChange = () => {
        const verseDiv = verseDivRef.current
        const verseChordsDiv = verseChordsDivRef.current
        if(!verseChordsDiv || !verseDiv) return;
        const verseWidth = verseDiv.getBoundingClientRect().width
        const chordsWidth = verseChordsDiv.getBoundingClientRect().width
        
        if(chordsWidth > verseWidth || chordsWidth==0 || verseWidth == 0) return;

        const diff = Math.abs(verseWidth - chordsWidth)
        
        if(diff == 0) return;

        const rpt = Math.ceil(diff/(chordsWidth/text.length))
        setChordsText(chordsText => chordsText +  " ".repeat(rpt))
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        let spaceWidth = rect.width/chordsText.length

        const offsetX = e.clientX - rect.left;

        const charIndex = Math.floor((offsetX/spaceWidth));

        setMousePosition({index: charIndex, px: ~~(spaceWidth*charIndex)})
    };

    const handleMouseClick = () => {
        const newText = chordsText.split("").map((char, i)=> i===mousePosition.index ? "*":char).join("")
        
        setChordsText(newText)
    }

    return {
        chordsText,
        verseDivRef,
        verseChordsDivRef,
        mousePosition,
        handleMouseClick,
        handleMouseMove
    }
}