import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Form from './components/Form';
import './App.css'
import CreatePropsal from './components/CreateProposal';
function App() {
  return (
    <div className='App'>
<div>logo</div>
<div className="d-flex flex-row justify-content-between px-5">

  <div>
    text will be diaplyed here
  </div>
  <div className='bg-white'>
   {/* <Form/> */}
   <CreatePropsal/>
  </div>
</div>
    </div>
  );
}

export default App;
