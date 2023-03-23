import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileNavigation from "./components/MobileNavigation";
import { asyncPreloadProcess } from "./states/isPreload/action";

function App() {
  const { authUser = null, isPreload = false } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <div className="App">
      <div className="main-container">Hello World !</div>
      <MobileNavigation />
    </div>
  );
}

export default App;
