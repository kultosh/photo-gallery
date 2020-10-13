import React, { useState } from 'react';
import Title from './components/Title';
import ImageGrid from './components/ImageGrid';
import UploadForm from './components/UploadForm';
import Model from './components/Model';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
