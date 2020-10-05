import React from 'react';


function Dashboard(){
      
             let inventoryList=[
                     {name:"radio",imgUrl:"https://images.unsplash.com/photo-1601224898712-ba506edbb3b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80", price:410},
                     {name:"Planet",imgUrl:"https://images.unsplash.com/photo-1601224898712-ba506edbb3b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" ,price:57 }
                    ]

   
    return (
     <div >
                {inventoryList.map((i)=>(
    <div className="dashInvt" ><img className="dashImg" src={i.imgUrl} alt={i.name} /><span>{i.name}</span> <span >${i.price}</span>  <button onClick={this.props.deleteFn} className="deleteBtn">Delete</button> <button   onClick={this.props.nameFn} className="editBtn">Edit </button></div>
                
                
    ))}
       
     </div>
        )
    
}

export default Dashboard;