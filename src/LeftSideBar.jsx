import React from "react"
import Button1 from "./Button1"
import Button2 from "./Button2"

function  LeftSideBar(data) {
return (

<div class="grow-0 shrink-0 h-full ml-5 mt-5" >



<div class="flex flex-row ">
 <img class="h-10 w-10 object-cover rounded-full " src={data.Loginperson} alt="Current profile photo" />
 
<div class="flex flex-col ml-3">
  <h1 class="text-black font-bold" > {data.name}</h1>
<div class="flex ">
   <img class="h-5 w-5 object-cover rounded-full ml-" src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" />
<h1 class="text-slate-400 ml-1">{data.GitHubUser}</h1>
</div>
</div>

</div>
<div >
 <Button1></Button1>
    <Button2></Button2>
</div  >
<div class="flex flex-row mt-4" >
<img class="h-6 w-6 object-cover rounded-full ml-" src="https://cdn.discordapp.com/attachments/944189291427430421/947082988125028352/icons8-checked-radio-button.gif" />

<h1 class="text-slate-400 ml-2">Pro Member</h1>
</div>
<div class="flex flex-row mt-2">
  <img class="h-6 w-6 object-cover rounded-full ml-" src="https://cdn.discordapp.com/attachments/944189291427430421/947081557078859776/icons8-save-close.gif" />

<h1 class="text-slate-400  ml-2 ">{data.Project} Projects</h1>
</div>
  
</div>



  
);
}
  
export default LeftSideBar;