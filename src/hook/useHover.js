import React,{useState, useRef, useEffect} from "react"


function useHover(){
  const [ishover, setIsHover] = useState(false)
  const ref = useRef(null)

    function enter(){
        setIsHover(true)
    }

    function leave(){
        setIsHover(false)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener('mouseleave', leave)

        // return ()=>{
        //     ref.current.removeEventListener("mouseenter", enter)
        //     ref.current.removeEventListener("mouseleave", leave)
        // }
    }, [])
    

    return [ishover, ref]
}

export default useHover