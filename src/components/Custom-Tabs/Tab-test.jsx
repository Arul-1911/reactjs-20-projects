import Tabs from "./Tabs";

function RandomComponent(){
   return <div>Some Random Content</div>
}


export default function TabTest(){

   const tabs = [
      {
         label:'Tab 1',
         content:'This is Tab-1 Content',
      },
      {
         label:'Tab 2',
         content:'This is Tab-2 Content',
      },
      {
         label:'Tab 3',
         content:<RandomComponent/>,
      }
   ]


   return(
      <>
      <Tabs tabsContent={tabs} />
      </>
   )
}