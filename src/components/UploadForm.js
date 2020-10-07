import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [img, setImg] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png','image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        setImg(selected.name);
        if(selected && types.includes(selected.type))
        {
            setImg(selected);
            setError(null);
        }
        else
        {
            setImg(null);
            setError('Something error!');
        }
        console.log(selected);
    }


    return (
        <div>
            <form>
                <input type="file" name="upload" onChange={changeHandler} />
            </form>
            <div className="output">
                { error && <div>{error}</div> } 
                { img && <div>{img.name}</div> }
                { img && <ProgressBar file={img} setFile={setImg} /> }
            </div>
        </div>
    )
}

export default UploadForm