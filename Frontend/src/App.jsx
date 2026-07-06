// import AppRoutes from "./routes/AppRoutes";
// import PreLoader from "./common/PreLoader";
// import { useState, useEffect } from "react";
// function App() {
//   const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setLoading(false);
//   }, 1800);

//   return () => clearTimeout(timer);
// }, []);
// if (loading) {
//   return <PreLoader />;
// }
//   return <AppRoutes />;
// }

// export default App;


// import AppRoutes from "./routes/AppRoutes";
// import PreLoader from "./common/PreLoader";
// import { useState, useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const alreadyShown = sessionStorage.getItem("preloader");

//     if (!alreadyShown) {
//       setLoading(true);

//       sessionStorage.setItem("preloader", "true");

//       const timer = setTimeout(() => {
//         setLoading(false);
//       }, 1800);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   if (loading) {
//     return <PreLoader />;
//   }

//   return <AppRoutes />;
// }

// export default App;



import AppRoutes from "./routes/AppRoutes"
import { useEffect, useState } from "react";
import PreLoader from "./common/PreLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");

    if (!hasVisited) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 2000);
    }
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <>
    <AppRoutes />
    </>
  );
}

export default App;