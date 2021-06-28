import './App.css';
import BasicClass from './components/BasicClass';
import BasicFunction from './components/BasicFunction';
import BasicReg from './components/BasicReg';

function App() {

  const dts = new Date();
  const val1 = dts.toISOString();

  // const dte = new Date(2000, 4, 4);
  // const value = dte.toISOString();
  // const users = [
  //   {id:1,name:"test2"},
  //   {id:2,name:"test3"},
  //   {id:3,name:"test4"},
  // ];

  // const ssusers = [
  //   {id:2,name:"ManicBasha"},
  //   {id:3,name:"Annamalai"},
  //   {id:4,name:"Kalaiyaan"},
  // ];

  // const labelName = "SomeLabelName";

  return (
    <div className="App">
      <div>
        <h2>Ths is Main App {val1}</h2>
      </div>
      <div>
        <BasicClass/>
        <hr />
      </div>
      <div>
        <BasicFunction/>
        <hr />
      </div>
      <div>
        <BasicReg/>
        <hr/>
      </div>
    </div>
  );
}

export default App;
