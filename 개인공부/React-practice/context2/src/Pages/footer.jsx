import { useContext } from "react";
import { Context1 } from "./context";

function Footer() {
  let { cont } = useContext(Context1);

  return <div>{cont}푸터</div>;
}

export default Footer;
