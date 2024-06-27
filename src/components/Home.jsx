import SideNav from "../pages/SideNav";
import TopNav from "../pages/TopNav";

const Home = () => {
  document.title = "Date Night | HomePage";
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full">
        <TopNav />
      </div>
    </>
  );
};

export default Home;
