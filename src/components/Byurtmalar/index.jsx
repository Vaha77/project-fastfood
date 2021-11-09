import React, { useState } from "react";
import Navbar from "./Navbar";
import { Container } from "./style";
import Body from "./Body";
export const Byurtmalar = () => {
  const [active, setActive] = useState(true);
  console.log(active);
  return (
    <Container>
      <Navbar onClick={(state) => setActive(state)} />
      <Body />
    </Container>
  );
};

export default Byurtmalar;
