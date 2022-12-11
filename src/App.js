import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./components/main_page/MainPage";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
