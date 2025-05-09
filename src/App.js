import { lazy, Suspense, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// Components
import Index from "./jsx";
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/style.css";
import Home from "./jsx/components/Dashboard/Home";
import OwnerLogin from "./jsx/pages/OwnerLogin";
import ForgotPassword from "./jsx/pages/ForgotPassword";
import SendCode from "./jsx/pages/OwnerSend-Code";
import RestOwnerPassword from "./jsx/pages/RestOwnerPassword";
import AllAgents from "./jsx/components/Agent/AllAgents";

// Lazy-loaded pages
const SignUp = lazy(() => import("./jsx/pages/Registration"));
const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./jsx/pages/OwnerLogin")), 500);
  });
});

// Custom withRouter HOC
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Auto-login check on initial mount
  useEffect(() => {
    checkAutoLogin(dispatch, navigate);
  }, []);

  // Navigate to dashboard when authenticated
  useEffect(() => {
    if (props.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [props.isAuthenticated, navigate]);

  // Unauthenticated routes (Login, Register)
  let guestRoutes = (
    <Routes>
      <Route path="/login" element={<OwnerLogin />} />
      <Route path="/page-register" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/SendCode" element={<SendCode />} />
      <Route path="/RestOwnerPassword" element={<RestOwnerPassword/>}/>
      <Route path="all-agents" element={<AllAgents/>}/>
      {/* <Route path="/dashboard" element={<dashboard/>} /> */}
    </Routes>
  );

  // Render authenticated or guest content
  if (props.isAuthenticated) {
    return (
      <Suspense
        fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
      >
        <Index />
      </Suspense>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        >
          {guestRoutes}
        </Suspense>
      </div>
    );
  }
}

// Connect Redux state to props
const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default withRouter(connect(mapStateToProps)(App));
