import logo from "../assets/images/logo.png";
export default function Order() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container-fluid">
            <a href="." className="navbar-brand logo">
                <img src={logo} alt="" /> KasirOnlen
            </a>
            <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav me-auto gap-2">
                    <li className="nav-item">
                        <a href="." className="nav-link px-4">Kasir</a>
                    </li>
                    <li className="nav-item">
                        <a href="order-list.html" className="nav-link active px-4">Order List</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Muhammad Yunus Almeida
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end mt-2">
                            <li><a className="dropdown-item" href="#">Setting</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section className="container-fluid py-5 px-1 px-lg-5 bg-soft-blue section-min-height">
        <div className="row g-4">
            <h2 className="text-dark fw-bold mb-4">Order List</h2>
            <div className="col-6 col-lg-3">
                <div className="card" typeof="button" data-bs-toggle="modal" data-bs-target="#changeStatus">
                    <div className="card-body">
                        <p className="mb-0 text-secondary text-end fs-7">#128312</p>
                        <h5 className="text-dark mb-0">Muhammad Yunus</h5>
                        <p className="mb-2 text-secondary fs-8">
                            3 Items
                        </p>
                        <span className="badge bg-primary">Completed</span>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="card" data-bs-toggle="modal" data-bs-target="#changeStatus">
                    <div className="card-body">
                        <p className="mb-0 text-secondary text-end fs-7">#128312</p>
                        <h5 className="text-dark mb-0">Adela Fatma Sari</h5>
                        <p className="mb-2 text-secondary fs-8">
                            3 Items
                        </p>
                        <span className="badge bg-danger">Canceled</span>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="card" data-bs-toggle="modal" data-bs-target="#changeStatus">
                    <div className="card-body">
                        <p className="mb-0 text-secondary text-end fs-7">#128312</p>
                        <h5 className="text-dark mb-0">Hanan</h5>
                        <p className="mb-2 text-secondary fs-8">
                            3 Items
                        </p>
                        <span className="badge bg-warning">Waiting</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="changeStatus">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h5 className="modal-title">Pesanan #128312</h5>
                        <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label >Ubah Status</label>
                            <select id="status" className="form-select">
                                <option value="Waiting">Waiting</option>
                                <option value="Ready to Serve">Ready to Serve</option>
                                <option value="Completed">Completed</option>
                                <option value="Canceled">Canceled</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" type="button">Ubah</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="pt-5 pb-4 bg-soft-blue">
        <div className="container">
            <p className="mb-0 text-center text-secondary fs-7">
                Copyright &copy; PT Onlenkan Teknologi Indonesia 2024. Seluruh hak cipta dilindungi.
            </p>
        </div>
    </footer>


    </div>
    )
}
