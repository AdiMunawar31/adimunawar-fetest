import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <Suspense
        fallback={
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            Loading...
          </p>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path='/' element={<Landing />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
