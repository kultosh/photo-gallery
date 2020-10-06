import React, {useState} from 'react';

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
            <div>{error && <div>{error}</div>}</div>
            <span>{img && <div>{img.name}</div>}</span>
        </div>
    )
}

export default UploadForm