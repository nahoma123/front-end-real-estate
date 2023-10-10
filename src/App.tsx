import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HomePage } from './pages/HomePage/HomePage';
import { MainLayout } from './layouts/MainLayout';


function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Welcome to the about page!</p>
    </div>
  );
}


function App(): JSX.Element {
  return (
      <MainLayout>
            <BrowserRouter>
        <Routes>
          <Route  path="/" Component={Home} />
          <Route path='/about' Component={About}/>
          {/* <Route path="/analytics" component={AnalyticsPage} /> */}
          {/* Add other routes */}
        </Routes>
        </BrowserRouter>
      </MainLayout>
  );
}

export default App;
