import { Outlet } from "react-router";
import Navber from "./components/navber";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <div>i am app</div> */}
      <div className="container mx-auto mx-auto">

        <Navber></Navber>
        <Outlet>
        </Outlet>
        <Footer> </Footer>
      </div>


    </>


  );
};

export default App;