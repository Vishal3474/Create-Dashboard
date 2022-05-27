import React from "react"

function  Center(data) {
return (
  <div >
<div class="flex mt-2 " >
<img class=" w-3 m-2 h-3 " src={data.Online} ></img>
 <h1 class="font-bold text-xl ">{data.Heading}</h1> 
  
  <h1 class="text-gray-500 mr-10 ml-auto">Visit site</h1>
  <img class="h-5 w-5 object-cover rounded-full mr-4 " src={data.Stared} ></img>
  
  </div>
  
  <div class="flex m-2 ">
  <img class="h-5 w-5 object-cover rounded-full " src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" ></img>
<h1 class="text-gray-400 ml-1.5">{data.GitHubUser1}</h1>

<img class="h-5 w-5 object-cover rounded-full ml-auto mr-2" src={data.ProgramLogo} ></img>
<h1 class="text-gray-500 mr-8">{data.Program}</h1>
<h1 class="text-gray-500 mr-8">•  Last deploy {data.LastSeen} ago</h1>
<h1 class="text-gray-500 mr-4 mb-2" >•  {data.Location}</h1>

</div>



<hr></hr>

    
  </div>
  
);
}
export default Center;