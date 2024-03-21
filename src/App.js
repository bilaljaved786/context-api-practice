import './App.css';
import { userContext } from './UserContext';
import ChildComponent from './ChildComponent';
function App() {

  // creating object and pass it using context api (solution of props drilling)
  const productInfor = { id: 20, price: '200', location: 'Islamabad' }

  // userContext has two properties .Provider and .Consumer 
  return (
    <userContext.Provider value={productInfor}>
      <div className="App">
        <h1>Example of context-api with hook (use-context)</h1>
        <ChildComponent></ChildComponent>
      </div>
    </userContext.Provider>
  );
}

export default App;
// test