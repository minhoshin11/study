import { useContext } from "react";
import { Context1 } from "./context";

function Center() {
  let { cont } = useContext(Context1);
  let { setCont } = useContext(Context1);

  const dd = (e) => setCont(e.target.value);

  return (
    <div>
      <div>나 중앙임</div>
      <div>센터{cont}</div>
      <input type="text" onChange={dd} />
    </div>
  );
}

export default Center;
