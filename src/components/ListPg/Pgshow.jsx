import PGListingPage from "./PGlistingPage";
import { pgs } from "./PG";
import { useLocation } from "react-router-dom";

const Pgshow = () => {
  const location = useLocation();
  // console.log(location.state[1]);
  const data = location.state[0];
  const filters = location.state[1];

  return <PGListingPage pgs={data} filters={filters} />;
};

export default Pgshow;
