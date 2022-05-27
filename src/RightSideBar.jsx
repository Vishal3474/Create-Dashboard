import React from "react"

function  RightSideBar(data) {
return (
<div> 
 
  <div class="">
  <div class="flex mt-3 ml-4 " >
  

<img class="h-8 w-8 object-cover rounded-full mr-5 "  src={data.img} ></img>
    
  <h1 class="text-black  text-xl"> {data.VisiterName}</h1>

<h2 class="ml-24  font-semibold text-gray-400 text-sm">{data.Time}</h2>
  </div>
  <h4 class="ml-16 text-gray-400  ">{data.Msg}  </h4>
  </div>
  <hr></hr>

</div>
);
}
export default RightSideBar ;