import { useEffect, useRef, useState } from "react"


export const useCipherChords = (text:string) => {
    const verseDivRef = useRef<HTMLDivElement>(null)
    const verseChordsDivRef = useRef<HTMLDivElement>(null)

    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [isMouseHovering, setIsMouseHovering] = useState(false)
    const [isHoveringEmpty, setIsHoveringEmpty] = useState(true)

    const [chordsPositions, setChordsPositions] = useState<string[]>([])
    const [mousePosition, setMousePosition] = useState<{px:number, index:number}>({px:-1, index:-1})

    useEffect(() => {
        handleChangeText(text)
    }, [text])

    useEffect(() => {
        handleChordsPosChange()
    }, [chordsPositions])


    const handleChangeText = (text:string) => {
        const array = [...new Array(6).fill(" "), ...text.split("").map(() => " ")]
        setChordsPositions(array)
    }

    const handleChordsPosChange = () => {
        const verseDiv = verseDivRef.current
        const verseChordsDiv = verseChordsDivRef.current
        if(!verseChordsDiv || !verseDiv) return;
        const verseWidth = verseDiv.getBoundingClientRect().width
        const chordsWidth = verseChordsDiv.getBoundingClientRect().width
        
        if((chordsWidth > verseWidth || chordsWidth==0 || verseWidth == 0)) return;

        const diff = chordsWidth - verseWidth
        
        if(diff == 0 || diff > 0) return;

        const rpt = Math.ceil(Math.abs(diff)/(chordsWidth/chordsPositions.join("").length))
 
        setChordsPositions([...chordsPositions, ...new Array(rpt).fill(" ")])
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(isPopoverOpen) return;
        setIsMouseHovering(true)

        const rect = e.currentTarget.getBoundingClientRect();

        let spaceWidth = rect.width/chordsPositions.join("").length

        const offsetX = e.clientX - rect.left;

        const charIndex = Math.floor((offsetX/spaceWidth));

        setMousePosition({index: charIndex, px: ~~(spaceWidth*charIndex)})
        setIsHoveringEmpty(chordsPositions[charIndex] === " ")
    };

    const handleMouseLeave = () => {
        setIsMouseHovering(false)
    }

    const handleMouseClick = (state:boolean) => {
        setIsPopoverOpen(state)
    }

    const onPickChord = (chord:string) => {
        let index = mousePosition.index

        let array : string[] = chordsPositions;

        const text : string = array.join("")
        if(text.charAt(index) == "#") {
            index--
        }
        
        let count = 0
        for(let i=0; i < text.length; i++){
            if(i == index) {
                chordsPositions[count] = chord
                break
            }
            if(text.charAt(i) !== "#") {
                count ++
            }
        }

        setChordsPositions(array)
        setIsPopoverOpen(false)
    }

    return {
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
    }
}