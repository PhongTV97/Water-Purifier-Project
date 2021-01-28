import './App.css';
import ListCategory from './components/categories/ListCategory';
import BodyWrapper from './components/common/BodyWrapper';
import Header from './components/header';

function App() {
  return (
    <div className=''>
      <Header />
      <div className="d-flex container">
        <ListCategory />
        <BodyWrapper />
      </div>
    </div>
  );
}

export default App;
