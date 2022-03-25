import React from 'react'  
import LoopProps from './Loopsprops'  ;





function Propsusage() {  
   let order = [  
      { customerName: 'murali', progress: 10 },  
      { customerName: 'krishnan', progress: 1 },  
      { customerName: 'harsan', progress: 2 },  
      { customerName: 'heman', progress: 3 },  
   ];  
return (  
   <div>  
      {order.map(value => (<LoopProps key={value.progress}  
      customerName={value.customerName} progress={value.progress}  
      ></LoopProps>))  
      }  
   </div >  
);  
}  
  
export default Propsusage;  