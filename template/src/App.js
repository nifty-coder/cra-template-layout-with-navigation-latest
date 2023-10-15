
import { Route, Routes } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import cmp from './helpers/navHelper';
import { Suspense } from 'react';

const App = () => {
    const routes = (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {cmp.map((item,index) => {
               return <Route path={item.path} exact element={item.name} key={index} />
            })}
        </Routes>
      </Suspense>
    );

    return (
      <Layout>
        {routes}
      </Layout>
    );
};

export default App;