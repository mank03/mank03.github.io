import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import EmployerInfo from "./components/EmployerInfo";
import Goals from "./components/Goals";
import JobDesc from "./components/JobDesc";
import Conclusion from "./components/Conclusion";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <div>
        <main>
          <section>
            <div>
              <Intro />
              <EmployerInfo />
              <Goals />
              <JobDesc />
              <Conclusion />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
