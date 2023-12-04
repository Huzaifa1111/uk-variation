import Link from "next/link";
import { appRoutes } from "src/routes";
import {
  headerMenu
} from "../../utils/data";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">

        {
          headerMenu.map((item, i) => {
            return (<>
              <li data-bs-dismiss="offcanvas" aria-label="Close" key={i + 1}>
                <Link href={item.href}>
                  <a className="nav-link">{item.name}</a>
                </Link>
              </li>
            </>)
          })


        }


        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex justify-content-between"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Company
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-full">
              <div className="dropdown-grid-item">
                <h6 className="drop-heading">Useful Links</h6>
                {navCompanyLinks.map((navLink, i) => (
                  <span key={i + 1}>
                    <Link href={navLink.href}>
                      <a
                        className="dropdown-link px-0"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <span className="me-2">{navLink.icon}</span>
                        <span className="drop-title mb-0">
                          {navLink.title}{" "}
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
              <div className="dropdown-grid-item radius-right-side bg-light">
                <h6 className="drop-heading">Utility Pages</h6>
                {navCompanyPage.map((navPage, i) => (
                  <span key={i + 1}>
                    <Link href={navPage.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <span className="me-2">{navPage.icon}</span>
                        <span className="drop-title mb-0">
                          {navPage.title}{" "}
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li> */}

      </ul>

      <div className="action-btns mt-5 ps-3">
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href={appRoutes.signIn}>
            <a className="btn btn-outline-primary text-decoration-none me-2">
              Sign In
            </a>
          </Link>
        </span>

        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href={appRoutes.signUp} className="mt-5">
            <a className="btn btn-primary">Get Started</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
