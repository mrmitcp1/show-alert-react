import logo from './logo.svg';
import './App.css';
import AlertComponent from "./component/AlertComponent";

function App() {
  return (
    <div className="App">
      <div className="alert alert-warning" role="alert">
        <AlertComponent showAlert={  'Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.'}/>
      </div>
    </div>
  );
}

export default App;
