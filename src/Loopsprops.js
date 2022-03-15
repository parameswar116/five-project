import React from 'react';  
function loopprops(props) {  
  
return (<div>  
<div>  
   <p>Pizza for: {props.customerName}</p>  
   <div className="progress">  
      <div >Ordered</div>  
      <div >Prepping</div> 
      <div >Cooking</div>  
      <div >Quality</div>  
      <div >Delivery</div>  
   </div>  
</div>  
</div>)  
}  
export default loopprops; 