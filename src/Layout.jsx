import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header></Header>
      <main style={{flexGrow: 1}}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}


