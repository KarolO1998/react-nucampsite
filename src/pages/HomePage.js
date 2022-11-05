import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
const HomePage = () => {
  return (
    <Container>
      <SubHeader current={"Home"} detail={true} />
      <DisplayList />
    </Container>
  );
};
export default HomePage;
