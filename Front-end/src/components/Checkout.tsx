import { useState } from 'react'
import dish1 from '../assets/images/dish_01.png'
import dish2 from '../assets/images/dish_02.png'
import dish3 from '../assets/images/dish_03.png'
import dish4 from '../assets/images/dish_04.png'
import dish5 from '../assets/images/dish_05.png'
import dish6 from '../assets/images/dish_06.png'

function Checkout() {
  const [CartStuff, setCartStuff] = useState<CartTypes[]>([])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container-fluid">
          <a href="." className="navbar-brand logo">
          </a>
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav me-auto gap-2">
              <li className="nav-item">
                <a href="." className="nav-link active px-4">Kasir</a>
              </li>
              <li className="nav-item">
                <a href="order-list.html" className="nav-link px-4">Order List</a>
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
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li><a className="dropdown-item" href="#">Log Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container-fluid py-5 px-0 px-md-5">
        <div className="row g-4">
          <div className="col-md-7">
            <h2 className="text-dark fw-bold mb-4">Kasir</h2>

            <ul className="nav nav-pills gap-1 pb-3 mb-4 border-bottom">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Semua</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Makanan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Minuman</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Snack</a>
              </li>
            </ul>

            <div className="row g-3">
              <div className="col-6 col-lg-4">
                <div className="card">
                  <div className="card-body p-4">
                    <img src={dish1} className="w-75 d-block mx-auto" alt="Dish 01"></img>
                    <h4 className="card-title mt-4 mb-2">Cheesey Chicken</h4>
                    <div
                      className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-1">
                      <p className="mb-0 text-secondary fs-7">Makanan</p>
                      <p className="mb-0 text-primary fw-semibold">Rp. 35,000</p>
                    </div>
                    <button className="add-button">ADD</button>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4">
                <div className="card">
                  <div className="card-body p-4">
                    <img src={dish2} className="w-75 d-block mx-auto" alt="Dish 02"></img>
                    <h4 className="card-title mt-4 mb-2">Maxi Burger</h4>
                    <div
                      className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-1">
                      <p className="mb-0 text-secondary fs-7">Makanan</p>
                      <p className="mb-0 text-primary fw-semibold">Rp. 42,000</p>
                    </div>
                    <button className="add-button">ADD</button>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4">
                <div className="card">
                  <div className="card-body p-4">
                    <img src={dish3} className="w-75 d-block mx-auto" alt="Dish 03"></img>
                    <h4 className="card-title mt-4 mb-2">Double Burger</h4>
                    <div
                      className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-1">
                      <p className="mb-0 text-secondary fs-7">Makanan</p>
                      <p className="mb-0 text-primary fw-semibold">Rp. 40,000</p>
                    </div>
                    <button className="add-button">ADD</button>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4">
                <div className="card">
                  <div className="card-body p-4">
                    <img src={dish4} className="w-75 d-block mx-auto" alt="Dish 04"></img>
                    <h4 className="card-title mt-4 mb-2">Raw Marbled Meat Steak</h4>
                    <div
                      className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-1">
                      <p className="mb-0 text-secondary fs-7">Makanan</p>
                      <p className="mb-0 text-primary fw-semibold">Rp. 34,000</p>
                    </div>
                    <button className="add-button">ADD</button>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4">
                <div className="card">
                  <div className="card-body p-4">
                    <img src={dish5} className="w-75 d-block mx-auto" alt="Dish 05"></img>
                    <h4 className="card-title mt-4 mb-2">Beef Steak Grill Pan</h4>
                    <div
                      className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-1">
                      <p className="mb-0 text-secondary fs-7">Makanan</p>
                      <p className="mb-0 text-primary fw-semibold">Rp. 45,000</p>
                    </div>
                    <button className="add-button">ADD</button>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4">
                <div className="card">
                  <div className="card-body p-4">
                    <img src={dish6} className="w-75 d-block mx-auto" alt="Dish 06"></img>
                    <h4 className="card-title mt-4 mb-2">Double Marbled Meat Steak</h4>
                    <div
                      className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-1">
                      <p className="mb-0 text-secondary fs-7">Makanan</p>
                      <p className="mb-0 text-primary fw-semibold">Rp. 45,000</p>
                    </div>
                    <button className="add-button">ADD</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Cart cItems={CartStuff} />
        </div>

        <div className="modal fade" id="checkoutModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">Checkout</h5>
                <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="customer_name"><i className="bx bx-user"></i></span>
                  <input type="text" className="form-control" aria-describedby="customer_name" id="name"></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="nominalInput">Rp.</span>
                  <input type="text" className="form-control" value="233,000" aria-describedby="nominalInput"></input>
                </div>

                <input type="hidden" id="nominal" value="233000"></input>
                <button className="btn btn-primary w-100" type="button">Proses</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-5 pb-4">
        <div className="container">
          <p className="mb-0 text-center text-secondary fs-7">
            Copyright &copy; PT Onlenkan Teknologi Indonesia 2024. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </footer>


    </div>
  )
}


type CartTypes = {
  url: string,
  name: string,
  price: string,
  quantity: string,
}

type CartProps = {
  cItems: CartTypes[]
}

function Cart({ cItems }: CartProps) {


  return <div className="col-md-5">
    <div className="card border-0">
      <div className="card-body px-4">
        <h4 className="text-dark fw-semibold mb-3">Order #003</h4>

        <div id="order-items">
          {cItems?.map((citem) => {
            return <div className="row align-items-center g-3 mt-3">
              <div className="col-3 col-lg-2">
              </div>
              <div className="col-9 col-lg-4">
                <p className="mb-0 fw-semibold text-dark">{citem.name}</p>
                <p className="mb-0 fw-semibold text-secondary fs-7">{citem.price}</p>
              </div>
              <div className="col-4 col-lg-2">
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-sm btn-quantity rounded-circle">
                    <i className="bx bx-minus"></i>
                  </button>
                  <p className="mb-0 text-dark">
                    {citem.quantity}
                  </p>
                  <button className="btn btn-sm btn-quantity rounded-circle">
                    <i className="bx bx-plus"></i>
                  </button>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <p className="mb-0 text-dark fw-bold text-end">Rp. 35,000</p>
              </div>
              <div className="col-2 col-lg-1">
                <button className="btn btn-sm btn-light btn-delete" type="button"><i
                  className="bx bx-trash"></i></button>
              </div>
            </div>
          })}
          <div className="row align-items-center g-3 mt-3">
            <div className="col-3 col-lg-2">
            </div>
            <div className="col-9 col-lg-4">
              <p className="mb-0 fw-semibold text-dark">Cheesey Chicken</p>
              <p className="mb-0 fw-semibold text-secondary fs-7">Rp. 35,000</p>
            </div>
            <div className="col-4 col-lg-2">
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-sm btn-quantity rounded-circle">
                  <i className="bx bx-minus"></i>
                </button>
                <p className="mb-0 text-dark">
                  1
                </p>
                <button className="btn btn-sm btn-quantity rounded-circle">
                  <i className="bx bx-plus"></i>
                </button>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <p className="mb-0 text-dark fw-bold text-end">Rp. 35,000</p>
            </div>
            <div className="col-2 col-lg-1">
              <button className="btn btn-sm btn-light btn-delete" type="button"><i
                className="bx bx-trash"></i></button>
            </div>
          </div>
          <div className="row align-items-center g-3 mt-3">
            <div className="col-3 col-lg-2">
            </div>
            <div className="col-9 col-lg-4">
              <p className="mb-0 fw-semibold text-dark">Row Marbled Meat Steak</p>
              <p className="mb-0 fw-semibold text-secondary fs-7">Rp. 34,000</p>
            </div>
            <div className="col-4 col-lg-2">
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-sm btn-quantity rounded-circle">
                  <i className="bx bx-minus"></i>
                </button>
                <p className="mb-0 text-dark">
                  2
                </p>
                <button className="btn btn-sm btn-quantity rounded-circle">
                  <i className="bx bx-plus"></i>
                </button>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <p className="mb-0 text-dark fw-bold text-end">Rp. 68,000</p>
            </div>
            <div className="col-2 col-lg-1">
              <button className="btn btn-sm btn-light btn-delete" type="button"><i
                className="bx bx-trash"></i></button>
            </div>
          </div>
          <div className="row align-items-center g-3 mt-3">
            <div className="col-3 col-lg-2">
            </div>
            <div className="col-9 col-lg-4">
              <p className="mb-0 fw-semibold text-dark">Maxi Burger</p>
              <p className="mb-0 fw-semibold text-secondary fs-7">Rp. 42,000</p>
            </div>
            <div className="col-4 col-lg-2">
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-sm btn-quantity rounded-circle">
                  <i className="bx bx-minus"></i>
                </button>
                <p className="mb-0 text-dark">
                  3
                </p>
                <button className="btn btn-sm btn-quantity rounded-circle">
                  <i className="bx bx-plus"></i>
                </button>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <p className="mb-0 text-dark fw-bold text-end">Rp. 126,000</p>
            </div>
            <div className="col-2 col-lg-1">
              <button className="btn btn-sm btn-light btn-delete" type="button"><i
                className="bx bx-trash"></i></button>
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-4"></hr>

        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="mb-0 text-secondary">Subtotal</p>
          <p className="mb-0 text-dark fw-bold">Rp. 229,000</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 text-secondary">Pajak</p>
          <p className="mb-0 text-dark fw-bold">Rp. 12,000</p>
        </div>

        <hr className="my-4"></hr>

        <div className="d-flex align-items-center justify-content-between mb-5">
          <p className="mb-0 text-secondary">Total</p>
          <p className="mb-0 text-dark fw-bold fs-5">Rp. 241,000</p>
        </div>

        <button className="btn btn-primary rounded-3 d-block py-3 w-100" type="button"
          data-bs-toggle="modal" data-bs-target="#checkoutModal">
          Checkout
        </button>
      </div>
    </div>
  </div>
}


export default Checkout

