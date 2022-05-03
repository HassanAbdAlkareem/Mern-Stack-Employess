import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";

//
const ContainerHome = () => {
  return (
    <>
      <Navbar />
      <div className="container-home">
        <LeftBar />
        <RightBar />
      </div>
    </>
  );
};

export default ContainerHome;
