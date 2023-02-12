import logo from './logo.svg';
import './App.css';
import Header from './BaiTapLayoutComponent/Header';
import Body from './BaiTapLayoutComponent/Body';
import Item from './BaiTapLayoutComponent/Item';
import Footer from './BaiTapLayoutComponent/Footer';

function App() {
  return (
    <div className="App">
         <div className="container">
         <div className="bg-dark text-white">
        <Header />
      </div>

      <Body/>
      <div class="row">
          <div class="col"><Item/></div>
          <div class="col"><Item/></div>
          <div class="col"><Item/></div>
          <div class="w-100"></div>
          <div class="col"><Item/></div>
          <div class="col"><Item/></div>
          <div class="col"><Item/></div>
        </div>

      <Footer/>
         </div>

    </div>
  );
}

export default App;
