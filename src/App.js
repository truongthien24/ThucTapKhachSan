import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { phongCreator } from './redux';
import { MainRoutes } from './Router/router';
import { Loading } from './component/Loading/Loading';
import 'antd/dist/reset.css';
// import "@ant-design/flowchart/dist/index.css";

function App() {

  const dispatch = useDispatch();

  const {layDuLieuPhong} = bindActionCreators(phongCreator, dispatch);
  
  useEffect(()=> {
    layDuLieuPhong();
  }, [])

  const {phongInfo} = useSelector(state=>state.phong);

  const {statusLoading} = useSelector(state=>state.home);

  return (
    <div className="App">
      {
        statusLoading
        &&
        <Loading/>
      }
      <MainRoutes/>
    </div>
  );
}

export default App;
