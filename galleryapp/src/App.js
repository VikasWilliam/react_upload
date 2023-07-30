import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";

const photos=[
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200',
]

const App = () => {
  const [input, setInput]= useState()
  const [isCollapsed,collapsed]= useState(false);
  const [items,setItems]= useState(photos);
  const handleOnchange=(e)=>setInput(e.target.value);
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    setItems([input,...items])
  }

  const toggle = ()=> collapsed(!isCollapsed)
//<button className="btn btn-warning mx-2" onClick={()=>setItems(['https://picsum.photos/id/1008/200/200', ...items])}>+ADD</button>

  return (
    <>
      <NavBar/>
      <div className="container text-center mt-5">
      
      <button className="btn btn-primary float-end" onClick={toggle}>{isCollapsed?'Close':'+Add'}</button>
      <UploadForm 
      isVisible={isCollapsed}
      onChange={handleOnchange}
      onSubmit={handleOnSubmit}
      />
        <h1>Gallery</h1>
        <div className="row"> 
        {/* {Array.apply(null,{length:9}).map(()=> <Card/>)} */}
        {items.map((photo, index)=> <Card key={index} src={photo}/>)  }
        </div>
      </div>
    </>
  );
};

export default App;
