import { Outlet } from "react-router";
import Navber from "./components/navber";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <div>i am app</div> */}
      <div className="mx-auto bg-gray-100">

        <Navber></Navber>
        <Outlet>
        </Outlet>
        <Footer> </Footer>
      </div>


    </>


  );
};

export default App;