import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent'; 

const App = () => {
  const count = useSelector(state => state.counter.count);
  // stateRedux => call Reducer => state's Reducer
  const dispatch = useDispatch();

  return (
    // <div>
    //   Trần Thái Ân &amp; Bin
    //   <MyComponent>

        
    //   </MyComponent>
    // </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trần Thái Ân
        </p>
        <div>Count = {count}</div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
