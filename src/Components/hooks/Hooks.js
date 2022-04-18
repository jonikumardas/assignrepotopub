import { useEffect, useState } from "react";

const Hooks = () => {
    const[photos,setPhotos]=useState([])
    useEffect(() => {
        fetch('photograpy.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, []);
    return [photos, setPhotos];
}
export default Hooks;