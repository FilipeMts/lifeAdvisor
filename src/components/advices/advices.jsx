import React from 'react';
import Loading from "../../UI/Loading/loading";

export default function advices(props) {
  
  return ( 
    <div>
      { props.currentAdvice ? <p className="quotes">{props.currentAdvice}</p> : <Loading /> }     
    </div>  
  )
};
