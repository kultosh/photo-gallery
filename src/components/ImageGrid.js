import React from 'react';
import {motion} from 'framer-motion';
import { useFirestore } from "../hooks/useFirestore";

function ImageGrid({setSelectedImg}) {
    const {docs} = useFirestore('images');
    console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id} whileHover={{opacity: 1}} onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="Uploading Img" />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid