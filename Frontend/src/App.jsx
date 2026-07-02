import AppRoutes from "./routes/AppRoutes";
import PreLoader from "./common/PreLoader";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);
if (loading) {
  return <PreLoader />;
}
  return <AppRoutes />;
}

export default App;



// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setLoading(false);
//   }, 1800);

//   return () => clearTimeout(timer);
// }, []);

// if (loading) {
//   return <PreLoader />;
// }

// return <AppRoutes />;