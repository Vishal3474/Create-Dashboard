import React from 'react';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import Projects from './Projects';
import Center from './Center';

function App() {
  return (   
    <div >

      
<div class="">
<div><Header Logo="https://onlinegiftools.com/images/examples-onlinegiftools/netflix-stream.gif" LoginPerson="https://cdn.discordapp.com/attachments/944189291427430421/946420617199124500/vkjpg.jpg" alt="Current profile photo" ></Header>  </div>

  
   <div class="flex flex-row h-screen">
   <div class=" w-64 grow-0 shrink-0 h-full  bg-gray-100" ><LeftSideBar Loginperson="https://cdn.discordapp.com/attachments/944189291427430421/946420617199124500/vkjpg.jpg" name="Vishal Singh" Project="10" GitHubUser="Vishal3474" > </LeftSideBar>
   </div>

  
  <div class="  h-full grow">
<Projects></Projects>
    
 <Center Heading="Tailwind" GitHubUser1="Vishal3474/TailwindCss" Stared="https://cdn.discordapp.com/attachments/944189291427430421/946983515017322547/icons8-star-48.png" Program="Tailwind" LastSeen="2h" Location="India" ProgramLogo="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" Online="https://cdn.discordapp.com/attachments/944189291427430421/946982605218271302/icons8-green-circle-48.png"  ></Center>

    
      <Center Heading="Hero Patterns" GitHubUser1="Vishal3474/Heropatterns" Stared="https://cdn.discordapp.com/attachments/944189291427430421/946983515017322547/icons8-star-48.png" Program="Next JS" LastSeen="4h" Location="India" ProgramLogo="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/full/nextjs.png" Online="https://cdn.discordapp.com/attachments/944189291427430421/946982605218271302/icons8-green-circle-48.png"  ></Center>

     <Center Heading="Flex Box" GitHubUser1="Vishal3474/Flexbox" Stared="https://cdn.discordapp.com/attachments/944189291427430421/947106338163527680/icons8-star-50.png" Program="Tailwind" LastSeen="3d" Location="India" ProgramLogo="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" Online="https://cdn.discordapp.com/attachments/944189291427430421/946982605218271302/icons8-green-circle-48.png"  ></Center>
    
    <Center Heading="Workcation" GitHubUser1="Vishal3474/Workcation" Stared="https://cdn.discordapp.com/attachments/944189291427430421/946983515017322547/icons8-star-48.png" Program="Laravel" LastSeen="5d" Location="India" ProgramLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png" Online="https://cdn.discordapp.com/attachments/944189291427430421/947100314383839282/icons8-circle-24.png"></Center>
    
 

        <Center Heading="Heroicons" GitHubUser1="Vishal3474/Heroicons" Stared="https://cdn.discordapp.com/attachments/944189291427430421/947106338163527680/icons8-star-50.png" Program="Next JS" LastSeen="9d" Location="India" ProgramLogo="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/full/nextjs.png" Online="https://cdn.discordapp.com/attachments/944189291427430421/947100314383839282/icons8-circle-24.png"></Center>

    
    <Center Heading="Kitetail" GitHubUser1="Vishal3474/Kitetail" Stared="https://cdn.discordapp.com/attachments/944189291427430421/947106338163527680/icons8-star-50.png" Program="Laravel" LastSeen="14d" Location="India" ProgramLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png" Online="https://cdn.discordapp.com/attachments/944189291427430421/947100314383839282/icons8-circle-24.png" ></Center>

     



  <Center Heading="Refactoring UI" GitHubUser1="Vishal3474/Refactoringui" Stared="https://cdn.discordapp.com/attachments/944189291427430421/947106338163527680/icons8-star-50.png" Program="Laravel" LastSeen="17d" Location="India" ProgramLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png" Online="https://cdn.discordapp.com/attachments/944189291427430421/947100314383839282/icons8-circle-24.png" ></Center>
    
 


    
  </div>
  
   <div class=" w-64 grow-0 shrink-0 h-full  bg-gray-100" >
      <h1 class="font-bold text-xl ml-4 mt-4"> Activity Feed</h1>
<br></br><hr ></hr>
     
     <RightSideBar VisiterName="You" Time="Just Now" Msg="Deployed workcation (27c83j in  master)to production" img="https://cdn.discordapp.com/attachments/944189291427430421/946420617199124500/vkjpg.jpg" ></RightSideBar>
    
     <RightSideBar VisiterName="Tanya" Time="17min" Msg="Deleted Project Kitetail" img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" ></RightSideBar>

<RightSideBar VisiterName="You " Time="53min" Msg="Deployed workcation (54dd2c in  master)to production" img="https://cdn.discordapp.com/attachments/944189291427430421/946420617199124500/vkjpg.jpg" ></RightSideBar>

<RightSideBar VisiterName="Anthony" Time="3h" Msg="Deployed workcation (27c83j in  master)to production" img="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" ></RightSideBar>

     <RightSideBar VisiterName="You   ." Time="5h" Msg="Deployed workcation (57sd5sj in  master)to production" img="https://cdn.discordapp.com/attachments/944189291427430421/946420617199124500/vkjpg.jpg" ></RightSideBar>     
     
     <br></br><hr ></hr>
  <a class="text-blue-500 font-bold ml-2"  href="https://www.codeyogi.io">View All Activity -></a>
   </div>

</div>
</div>

</div>

    
  );
}

export default App;