import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexTodo from "./pages/todo-list";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexTodo />} />
        {/* <Route element={<AppShell />}>
          <Route path="/rm" element={<Home />} />
          <Route path="/rm/activity/:namaDebitur" element={<Activity />} />
          <Route path="/rm/laporan" element={<Laporan />} />
          <Route path="/adm" element={<HomeAdmin />} />
          <Route path="/adm/laporan" element={<LaporanAdmin />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
