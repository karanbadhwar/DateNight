import SideNav from "../pages/SideNav";

const Home = () => {
  document.title = "Date Night | HomePage";
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full "></div>
    </>
  );
};

export default Home;
