import logo from '../assets/images/logo.png'



export default function Login() {
  return (
    <div>
      <body className="bg-soft-blue">
        <div className="container">
          <div
            className="row align-items-center justify-content-center py-5 container-min-height"
          >
            <div className="col-md-5">
              <div className="card border-0">
                <div className="card-body p-5">
                  <a href="." className="logo mb-4">
                    <img src={logo} alt="Logo" />
                    <span>Sayamart</span>
                  </a>

                  <h5 className="text-dark fw-bold mb-4">Login</h5>
                  <form method="POST" action="login-check.php">
                    <div className="mb-3">
                      <label className="mb-1">Alamat Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Tulis alamat email kamu"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="mb-1">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Masukkan password kamu"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="mb-1">Jabatan</label>
                      <select name="level" className="form-select">
                        <option value="admin">Admin</option>
                        <option value="kasir">Kasir</option>
                      </select>
                    </div>

                    <button
                      className="btn btn-primary d-block w-100"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
