import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from '../pages/Home';
import {NotFound} from "../pages/NotFound";
import {EmailSent} from '../pages/EmailSent';
import {Layout} from '../pages/Layout';
import {Login} from '../pages/Login';
import {CreatePassword} from '../pages/CreatePassword';
import {EditMyAccount} from '../pages/EditMyAccount';
import {HomeCards} from '../pages/HomeCards';
import {MyAccount} from '../pages/MyAccount';
import {MyOrder} from '../pages/MyOrder';
import {AppContext} from '../context/AppContext';
import {useInitialState} from '../hooks/useInitialState';
import '../styles/global.scss';
const App = () => {
    const InitialState = useInitialState();
    return (
        <AppContext.Provider value={
            InitialState
        }>
            {/* encapsula toda nuestra navegacion */}
            <BrowserRouter> 
                <Layout>
                    <Routes>
                            <Route  path='/' element={<Home/>}/>
                            <Route  path='/Login' element={<Login/>}/>
                            <Route  path='/EmailSent' element={<EmailSent/>}/> 
                            <Route path='/CreatePassword' element={<CreatePassword/>}/>
                            <Route path='/EditMyAccount' element={<EditMyAccount/>} />
                            <Route path='/HomeCards' element={<HomeCards/>} />
                            <Route path='/MyAccount' element={<MyAccount/>} />
                            <Route path='/MyOrder' element={<MyOrder/>} />
                            <Route path='*' element={<NotFound/>} />                  
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;