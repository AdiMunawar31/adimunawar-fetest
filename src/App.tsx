import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import React from "react";
import NotFound from "./pages/404";

const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Chat = lazy(() => import("./pages/Dashboard/Chat"));
const CreateContact = lazy(() => import("./pages/Dashboard/Create"));
const EditContact = lazy(() => import("./pages/Dashboard/Edit"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chat/:contactId' element={<Chat />} />
        <Route path='/create-contact' element={<CreateContact />} />
        <Route path='/edit/:contactId' element={<EditContact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
