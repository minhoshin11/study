import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from "./../Store";

function Detail(props) {


  useEffect(()=>{
    let timer = setTimeout(()=>{setAlert(false)}, 2000)
    return ()=>{
      clearTimeout(timer)
    }
  }, [])


  let {id} = useParams();
  let 찾은상품 = props.shoes.find((x)=> x.id == id);
  //데이터 형식이 달라서 ==(동등)연산자를 써야함.
  let  [count,setCount] = useState(0);
  let [alert,setAlert] = useState(true);
  let [tab,setTab] = useState(2);
  //0번 -> 0번쨰가 보이는 거 이런식으로
  let [fadeDetail, setFadeDetail] = useState('')
  let dispatch = useDispatch()

  useEffect(()=>{
    
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched' , JSON.stringify(꺼낸거))
  }, [])


  useEffect(() => {
    let a = setTimeout(() => {
      setFadeDetail('end');
    }, 100);
    return () => {
      clearTimeout(a);
      setFadeDetail('');
    };
  }, []);


  return (
    <div className={`container start ${fadeDetail}`}>
        {/* {
          alert == true ?
          <div className="alert alert-warning">
            2초 이내 구매시 할인
          </div>
          :null
        } */}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger" 
            onClick={() => {
              dispatch(addItem({id : 1, name : 'Red knit' , count : 1}))
            }}>
  주문하기
</button>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link1">
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>

    </div>
  );
}

function TabContent({tab}){
  let [fade,setFade] = useState('')

  useEffect(()=>{
      let a = setTimeout(()=>{ setFade('end')} , 100)
      return ()=>{
        clearTimeout(a)
        setFade('')
      }
  },[tab])

  return (
      <div className={`start ` + fade}>
        {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]}
      </div>
    )
}

export default Detail;
