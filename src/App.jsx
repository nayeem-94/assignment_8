import { Outlet } from "react-router-dom";
import Navber from "./components/navber";

const App = () => {
  return (
     <>
      <div>i am app</div>

        <Navber></Navber>
        <Outlet></Outlet>

     </>


  );
};

export default App;