import logo from "../assets/images/logo.png";
import { useState } from "react";
import apiClient from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
export default function Login() {
  const { setUser: setUserContext } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await apiClient.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const response = await apiClient.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      setUserContext(response.data.data);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.errors.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <body className="bg-soft-blue">
        <div className="container">
          <div className="row align-items-center justify-content-center py-5 container-min-height">
            <div className="col-md-5">
              <div className="card border-0">
                <div className="card-body p-5">
                  <a href="." className="logo mb-4">
                    <img src={logo} alt="Logo" />
                    <span>Sayamart</span>
                  </a>

                  <h5 className="text-dark fw-bold mb-4">Login</h5>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label className="mb-1">Alamat Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Masukkan password kamu"
                        required
                      />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button
                      className="btn btn-primary d-block w-100"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Login"}
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
