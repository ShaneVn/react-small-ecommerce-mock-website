import React, {useContext} from "react"
import Image from "../component/Image"
import {getClass} from "../utils"
import {Context} from "../Context"

function Photos(props) {
    const {allPhotos} = useContext(Context)
    const images = allPhotos.map((img,index)=>(
       <Image key = {img.id} img={img} className={getClass(index)} />
    )) 
    return (

        <main className="photos">
            {images}
        </main>
    )
}

export default Photos