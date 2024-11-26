import logo from './logo.svg';
import './App.css';
import Authors from './Components/Authors/authors';
import Category from './Components/Categories/category';
import Books from './Components/Books/books';
import DefaultSidebar from './Components/Common/DefaultSidebar';

function App() {
  return (
    <div className='bg-white'>
      <DefaultSidebar />
    </div>
  );
}

export default App;
