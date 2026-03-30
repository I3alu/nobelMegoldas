import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Layout({children}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/"><img src="Nobel_Prize.png" alt="Nobel-díj" id="nobel"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Főoldal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/form">Új Nobel-díjas rögzítése</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <header>Irodalmi Nobel-díj</header>

    <main>
        <section className="row">

            {children}

        </section>
    </main>
    <footer>© Nagy Csaba 2026</footer>
        </>
    )
}