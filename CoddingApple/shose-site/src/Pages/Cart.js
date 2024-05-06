import React, { memo, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { plusAge } from '../store/userSlice'
import { addCount } from './../Store'


let Child = memo( function(){
    console.log('제랜더링됨')
      return <div>자식임</div>
})

function Cart() {
  let stateCart = useSelector((state) => state.cart )
  let stateUser = useSelector((state) => state.user )
  let dispatch = useDispatch()
  let [count , setCount] = useState(0)

  return (
    <div>

      <button onClick={()=>{
        setCount(count+1)
      }}>카트버튼
      </button>
      <h6>{stateUser.name} {stateUser.age}의 장바구니</h6>
      <button
        onClick={()=>{
          dispatch(plusAge())
        }}
      >버튼!
      </button>
    <Table>
        <thead>
            <tr>
            <th>#</th>
            <th>상품명 </th>
            <th>수량</th>
            <th>변경하기</th>
            </tr>
        </thead>
        <tbody>
          {stateCart.map((a,i)=>
            <tr key={i}>
            <td>{stateCart[i].id}</td>
            <td>{stateCart[i].name}</td>
            <td>{stateCart[i].count}</td>
            <td>
                <button onClick={()=>{
                  dispatch(addCount(stateCart[i].id))
                }}>+</button>
            </td>
            </tr>
          )}
        </tbody>
    </Table> 
  </div>
  )
}

export default Cart