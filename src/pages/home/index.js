import HomeWrapper from "./HomePageWrapper";
import ResponsiveAppBar from "../../components/header";
import Card from "../../components/card";


const Home = () => {
  return (
    <HomeWrapper>
      <ResponsiveAppBar />
      <ul className="list-unstyled d-flex gap-3 px-4 py-2 fs-4">
        <li>Trending</li>
        <li>Your Work</li>
        <li>Collection</li>
      </ul>
      <div className="d-flex flex-wrap gap-2 px-4 py-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </HomeWrapper>
  );
}

export default Home;