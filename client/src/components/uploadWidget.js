
import { useEffect, useRef } from "react";
const UploadWidget = () => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: "mesh-leeon1000",
        uploadPreset:"zkqsdozb",
      }), function(error,result){
        console.log(result)
      }
    }, [])
    return (
        <button onClick={()=>widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadWidget;