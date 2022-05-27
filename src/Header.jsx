import React from "react"

function  Header(data) {
return (

<div class="flex flex-row p-3 text-center bg-indigo-600" >

    <img class="h-10 w-10 object-cover mr-64 ml-8" src={data.Logo} alt="logo" />

  
  <input class="placeholder:text-white block bg-indigo-300 w-full border border-slate-300 rounded-md py-2 pl-48 pr-48 shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder=" 🔍  Search Projects " type="text" name="search"/>


<h1 class="text-white ml-24" >Documentation</h1>
<h1 class="text-white ml-10" >Support</h1>
   <img class="h-8 w-8 object-cover rounded-full ml-10" src={data.LoginPerson} />
</div>

  
);
}
export default Header;