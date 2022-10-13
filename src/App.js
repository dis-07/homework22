import { useState } from "react";

import Title from "./components/Title";

function App() {
  const [isOpened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened((prevValue) => !prevValue);
  }
  // const TitleStatus = () => {
  //   // const [isOpened, setOpened] = useState(false);

  //   // const handleClick = () => {
  //   //   setOpened((prevValue) => !prevValue);
  //   // }

  //     // if(isOpened) {
  //     //   return (
  //     //     <>
  //     //     <Title name="Products" type="bold" />
  //     //     <Title name="Employees" type="normal" />
  //     //     <button onClick={handleClick}>Close title</button>
  //     //   </>
  //     //   );
  //     // } return (
  //     //   <button onClick={handleClick}>Open title</button>
  //     // );
  // }

  return (
    <>
      {isOpened && <> <Title name="Products" type="bold" /> <Title name="Employees" type="normal" /> </>}
      <button onClick={handleClick}>{isOpened ? "Close" : "Open"} title</button>
    </>
  );
}

export default App;
