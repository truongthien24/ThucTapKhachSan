import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { phongCreator } from './redux';
import { MainRoutes } from './Router/router';

function App() {

  const dispatch = useDispatch();

  const {layDuLieuPhong} = bindActionCreators(phongCreator, dispatch);
  
  useEffect(()=> {
    layDuLieuPhong();
  }, [])

  const {phongInfo} = useSelector(state=>state.phong);

  useEffect(()=> {
    console.log('phongInfo', phongInfo)
  }, [phongInfo])

  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
