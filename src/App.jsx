import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import headerStyle from "./assets/styles/header.module.css";
/* Layout 컴포넌트
1. 모든 <Link/> 요소의 클래스명은 "header-link" 입니다.
2. /home으로 라우팅할 수 있는 <Link/>를 선언하세요.
3. /about으로 라우팅할 수 있는 <Link/>를 선언하세요.
4. /contact으로 라우팅할 수 있는 <Link/>를 선언하세요.
5. 모든 잘못된 경로로 라우팅할 수 있는 <Link/>를 선언하세요.
5-1. 아무 경로를 할당하거나, Math.random()을 활용할 수 있습니다.
6. Layout 컴포넌트는 "모든" 컴포넌트에서 보여야 합니다. <Outlet/>를 추가하세요.
*/
function HomePage() {
  return <div>Home Page</div>;
}

function AboutPage() {
  return <div>About Page</div>;
}

function ContactPage() {
  return <div>Contact Page</div>;
}

function ErrorPage() {
  return <div>잘못된 경로입니다.</div>;
}

function Layout() {
  return (
    <>
      <header className={headerStyle.header}>
        <div>Router Practice</div>
        <div className={headerStyle.headerLinks}>
          {/* 여기에 Link 컴포넌트를 할당하세요. */}
          <Link to="/home" className="header-link">
            Home
          </Link>
          <Link to="/about" className="header-link">
            About
          </Link>
          <Link to="/contact" className="header-link">
            Contact
          </Link>
          <Link to={`/wrong-${Math.random()}`} className="header-link">
            Error
          </Link>
        </div>
      </header>
      {/* 이곳에 Outlet을 할당하세요. */}
      <Outlet />
    </>
  );
}

/* App 컴포넌트
1. 모든 라우팅을 감싸는 BrowserRouter를 선언하세요.
2. Routes를 선언하세요.
3. 모든 라우팅에서 보이는 Layout의 Route를 선언하세요.
4. / 라우팅에서 보이는 <HomePage/> 컴포넌트를 라우팅에 연결하세요.
5. /about 라우팅에서 보이는 <AboutPage/> 컴포넌트를 라우팅에 연결하세요.
6. /contact 라우팅에서 보이는 <ContactPage/> 컴포넌트를 라우팅에 연결하세요.
7. /* 모든 잘못된 라우팅에서 보이는 <ErrorPage/> 컴포넌트를 라우팅에 연결하세요.
*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
