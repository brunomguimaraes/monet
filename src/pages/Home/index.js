import Login from "components/Login";
import Modal from "components/Modal";

import * as Styled from "./index.styles";

const Home = () => {
  return (
    <Styled.HomeWrapper>
      <Modal>
        <Login />
      </Modal>
    </Styled.HomeWrapper>
  );
};

export default Home;
