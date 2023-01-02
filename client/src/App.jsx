import './united.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Pirates from './components/Pirate';
import AllPirates from './pages/AllPirate';
import ShowPirate from './pages/ShowPirate';
import NewPirate from './pages/NewPirate';
import EditPirate from './pages/EditPirate';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <Routes>
          <Route path={'/'} element={<Navigate to="/Pirates" />} />
          <Route path={'/Pirates'} element={<Pirates />}>
            <Route index element={<AllPirates />} />
            <Route path=":id" element={<ShowPirate />} />
            <Route path="new" element={<NewPirate />} />
            <Route path=":id/edit" element={<EditPirate />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;