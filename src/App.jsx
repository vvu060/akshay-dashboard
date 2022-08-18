import Cards from "./components/Cards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="">
      <Header />
      <main className="flex mt-3">
        <aside className="flex-[0.4] max-w-[240px]">
          <Sidebar />
        </aside>
        <section className="flex-grow px-4 max-w-5xl">
          <Welcome />
          <Cards />
        </section>
      </main>
    </div>
  );
}

export default App;
