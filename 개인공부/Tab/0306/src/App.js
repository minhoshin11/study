import { useState } from 'react';
import './App.css';


function App() {
  const data = { tabs: [{ text: "tab1" }, { text: "tab2" }, { text: "tab3" }]} ;
  const [selected,setSelected] = useState("Tab1");
  const [tabs, setTabs] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(0);

    return (

      <>
      <Tab
          selectedIndex={selectedIndex}
          data={tabs.tabs}
          onClickItem={(item, index) => {
              setSelectedIndex(index);
          }}
      />
      </>
    )}
function Tab(props){
  return(
    <div>
    {props.data.map((item , index)=>{
      return<div className='Tab + ' onClick={(e)=>{
          props.onClickItem(item.text, index)
      }}>Tab</div>
    })}
    </div>
  )
}
  








//     <div className="App">
//         <Tab data={data} selected={selected} setSelected={setSelected}/>
//         <Item data={data} tabs={tabs} setTabs={setTabs}/>
//     </div>
//   );
// }

// function Tab(props){
//   return(
//     <div className='Tab'>
//       {props.data.tabs.map((tab ,index)=>{
//         return <div key={index} className={(props.selected === tab.text) ? "selected" : undefined} 
//         //선택한 selected가 map으로 만들어진 tab.text가 맞다면 클래스 "selected"를 부여한다.
//           onClick={
//                   (e)=> {props.setSelected(tab.text)}
//           //클릭했을 떄 ,  state함수를 사용해 tab.text를 현재값으로 바꾼다.
//                   }>{tab.text}
//                   </div>
//         })
//       }
//     </div>
//   )
// }

// function Item(props){
//   return(
//     <button
//       onClick={
//         ()=>{
//           let copy = [...props.tabs]
//           copy.tabs[0] = 'Item1';
//           props.setTabs(copy);
//         }
//       }
//     >tab1을 item으로 바꾸기</button>






export default App;
