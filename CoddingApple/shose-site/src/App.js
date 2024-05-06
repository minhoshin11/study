import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useQuery } from "react-query";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
// import Cart from "./Pages/Cart.js";
// import Detail from "./Pages/Detail.js";
import data from "./data.js";
import bg from "./img/bg.png";

const Detail = lazy(() => import("./Pages/Detail.js"));
const Cart = lazy(() => import("./Pages/Cart.js"));
//단점 : 약간 지연시간 발생

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  //useNavigate 이거 Hook이라고 부름. (유용한 함수)
  // let [shoesNum,setShoesNum] = useState(3);

  let result = useQuery("작명", () =>
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      console.log("요청됨");
      return a.data;
    })
  );
  //axios 문법 사용해서 , https에서  데이터를 가져옴 -> then(그다음에) a가 들어오면 a.data로 리턴

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            Shoes
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
        <Nav style={{ color: "white", marginRight: "3%" }}>
          {
            result.isLoading ? "로딩중" : result.data.name
            // result.isLoading && '로딩중' -> 이렇게 써도 똑같은거임. &&가 트루연산자임
          }
        </Nav>
      </Navbar>

      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url(" + bg + ")" }}
                ></div>

                <div className="container">
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Card shoes={shoes[i]} i={i} key={i}></Card>;
                    })}
                  </div>
                </div>
                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        console.log(result.data);
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                      })
                      .catch((error) => {
                        console.error("Error fetching data with axios:", error);
                      });
                  }}
                ></button>
              </>
            }
          />

          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<div>위치정보임</div>} />
          </Route>
          <Route path="*" element={<div>없는 페이지입니다.</div>} />
          <Route path="/event" element={<EventPage />}>
            <Route
              path="one"
              element={<p>첫 주문시 양배추즙 서비스</p>}
            ></Route>
            <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      ></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <outlet></outlet>
    </div>
  );
}

export default App;
