import './App.css';
import ListCategory from './components/categories/ListCategory';
import Header from './components/header';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <ListCategory></ListCategory>
    </div>
  );
}

export default App;
