import React from 'react';

function Model({selectedImg}) {
    return (
        <div className="backdrop">
            <img src={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Model