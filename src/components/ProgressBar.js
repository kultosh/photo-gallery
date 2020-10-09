import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';

function ProgressBar({file, setFile}) {
    const { url, progress } = useStorage(file);
    console.log(progress, url);
    
    useEffect(() => {
        if(url)
        {
            setFile(null);
        }
    }, [url, setFile])

    return (
        
        <div>
            <div className="progress-bar" style={{ width: progress + '%'}}>
                {progress} %
            </div>
        </div>
    )
}   

export default ProgressBar;