import './App.css';


function App() {
    const buts = ['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','x']
    let screen = <div className="screen"></div>
    function thebut(val){
        
    }
    const reset = () =>{

    }
    const egual = () =>{

    }
  return (
    <div className="container">
        {screen}
        <div className="buttons">
            {buts.map(x=>(<button onClick={thebut(x)}>{x}</button>))}
            <button onClick={reset()}>RESET</button>
            <button onClick={egual()}>=</button>
        </div>
    </div>
  );
}

export default App;
