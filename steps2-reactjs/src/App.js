import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const[languagesData,setLanguageData]=useState([]);
  useEffect(()=>{
  axios.get('http://127.0.0.1:3001/')
  .then(res=>{
    setLanguageData(res.data)
  })
  .catch(err=>{
    console.log(err);
  })
},[])
  return (
     <div>
        {languagesData.map((data) => (
           <div>
		    Language Name : {data.languageNameNative}
		     <img src={data.image} /><br/>
		    State: {data.state}
		   <hr/>
		   </div>
        ))}
      </div>	
  );
}

export default App;
