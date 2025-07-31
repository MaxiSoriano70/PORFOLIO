import { Route, Routes } from 'react-router-dom';
import { routes } from '../assets/utils/routes';
import Menu from '../components/Menu';
import HomePage from '../pages/HomePage';


const RoutesViews = () => {
    return (
        <>
            <Menu/>
            <main className={`flex-grow-1 container-main pb-5`}>
                <Routes>
                    <Route path={routes.home} element={<HomePage/>}/>
                </Routes>
            </main>
        </>
    );
}

export default RoutesViews;
