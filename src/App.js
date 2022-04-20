import './App.scss';
import { pageData } from './data';
import Title from './components/Title';
import Image from './components/Image';
import { useState } from 'react';
import Header from './components/Header/index';

function App() {

  const [rotationPosition,setRotationPosition] = useState(new Array(pageData.length).fill(0));
  const [activeIndex,setActiveIndex] = useState(-1);

  const handleSetRotation = (itemIndex) => { 
    const newRotation = Math.random()*7 * (Math.round(Math.random()) ? 1 : -1);
    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotationPosition(tempState);
    setActiveIndex(itemIndex);
  };



  return (
    <>
    <Header/>
    <div className="main-container" id="man-container">
      <div className='title-container'>
        {pageData.map(({title},index)=>(
          <Title
          key={index}
          title={title}
          index={index}
          setRotationPosition={handleSetRotation}
          setActiveIndex={setActiveIndex}
          
          />
        ))}
      </div>
      <div className='image-container'>
        {pageData.map(({url},index)=>(
          <Image
          key={index}
          url={url}
          index={index}
          active={activeIndex===index}
          rotationPosition={rotationPosition[index]}
          />
        ))}

      </div>
     
    </div>
    </>
  );
}

export default App;
