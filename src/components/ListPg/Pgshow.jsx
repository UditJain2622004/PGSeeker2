import PGListingPage from "./PGlistingPage";
import { pgs } from "./PG";
import { useLocation } from "react-router-dom";

const Pgshow = () => {
  const location = useLocation();
  // console.log(location.state);
  const data = location.state || pgs;
  // console.log(data);
  // console.log(pgs);
  return <PGListingPage pgs={data} />;
};

export default Pgshow;
