import React from "react";
import {  Routes, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
/// Css
import './index.css'
import './chart.css'
import './step.css'

/// Layout
import Nav from './layouts/nav'
import Footer from './layouts/Footer'

/// Dashboard
import Home from "./components/Dashboard/Home";
import Analytics from "./components/Dashboard/Analytics";
import OrderList from "./components/Dashboard/OrderList";
import CustomerList from "./components/Dashboard/CustomerList";
import Reviews from "./components/Dashboard/Reviews";
import Task from './components/Dashboard/Task';

//Agent
import AddAgent from './components/Agent/AddAgent';
import AddAgentWizard from './components/Agent/AddAgentWizard';
import AllAgents from './components/Agent/AllAgents';
import AgentsProfile from './components/Agent/AgentsProfile';

//Property
import AddProperty from "./components/Property/AddProperty";
import PropertyDetails from './components/Property/PropertyDetails';
import PropertyList from "./components/Property/PropertyList";

//Icons
import FlaticonIcons from "./components/Icon/FlaticonIcons";
import SvgIcons from "./components/Icon/SvgIcons";

/// App
import AppProfile from './components/AppsMenu/AppProfile/AppProfile'
import PostDetails from './components/AppsMenu/AppProfile/PostDetails'
import Compose from './components/AppsMenu/Email/Compose/Compose'
import Inbox from './components/AppsMenu/Email/Inbox/Inbox'
import Read from './components/AppsMenu/Email/Read/Read'
import Calendar from './components/AppsMenu/Calendar/Calendar'

//CMS
import Content from './components/Cms/Content';
import Menu from './components/Cms/Menu';
import EmailTemplate from './components/Cms/EmailTemplate';
import CmsBlog from './components/Cms/Blog';
import ContentAdd from './components/Cms/ContentAdd';
import AddMail from './components/Cms/AddMail';
import AddBlog from './components/Cms/AddBlog';
import BlogCategory from './components/Cms/BlogCategory';

/// Product List
import ProductGrid from './components/AppsMenu/Shop/ProductGrid/ProductGrid'
import ProductList from './components/AppsMenu/Shop/ProductList/ProductList'
import ProductDetail from './components/AppsMenu/Shop/ProductGrid/ProductDetail'
import Checkout from './components/AppsMenu/Shop/Checkout/Checkout'
import Invoice from './components/AppsMenu/Shop/Invoice/Invoice'
import ProductOrder from './components/AppsMenu/Shop/ProductOrder'
import EcomCustomers from './components/AppsMenu/Shop/Customers/Customers'

/// Charts
import RechartJs from './components/charts/rechart'
import ChartJs from './components/charts/Chartjs'
import SparklineChart from './components/charts/Sparkline'
import ApexChart from './components/charts/apexcharts'

/// Bootstrap
import UiAlert from "./components/bootstrap/Alert";
import UiAccordion from "./components/bootstrap/Accordion";
import UiBadge from "./components/bootstrap/Badge";
import UiButton from "./components/bootstrap/Button";
import UiModal from "./components/bootstrap/Modal";
import UiButtonGroup from "./components/bootstrap/ButtonGroup";
import UiListGroup from "./components/bootstrap/ListGroup";
import MediaObject from "./components/bootstrap/MediaObject";
import UiCards from "./components/bootstrap/Cards";
import UiCarousel from "./components/bootstrap/Carousel";
import UiDropDown from "./components/bootstrap/DropDown";
import UiPopOver from "./components/bootstrap/PopOver";
import UiProgressBar from "./components/bootstrap/ProgressBar";
import UiTab from "./components/bootstrap/Tab";
import UiPagination from "./components/bootstrap/Pagination";
import UiGrid from "./components/bootstrap/Grid";
import UiTypography from "./components/bootstrap/Typography";

/// Plugins
import Select2 from "./components/PluginsMenu/Select2/Select2";
import MainSweetAlert from "./components/PluginsMenu/SweetAlert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/JqvMap/JqvMap";
import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";


/// Widget
import Widget from './pages/Widget'

/// Table
import DataTable from './components/table/DataTable'
import BootstrapTable from './components/table/BootstrapTable'
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";


/// Form
import Element from "./components/Forms/Element/Element";
import Wizard from "./components/Forms/Wizard/Wizard";
import Pickers from "./components/Forms/Pickers/Pickers";
import CkEditor from './components/Forms/CkEditor/CkEditor';
import FormValidation  from './components/Forms/FormValidation/FormValidation';

/// Pages
import LockScreen from './pages/LockScreen'
import Error400 from './pages/Error400'
import Error403 from './pages/Error403'
import Error404 from './pages/Error404'
import Error500 from './pages/Error500'
import Error503 from './pages/Error503'
import Todo from './pages/Todo';
import EmptyPage from "./components/Dashboard/EmptyPage";

//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';



const Markup = () => {
  const allroutes = [
    /// Dashboard
    { url: "", component: <Home/> },
    { url: "dashboard", component: <Home/> },
    { url: "analytics", component: <Analytics/> },
    { url: "review", component: <Reviews/> },
    { url: "order-list", component: <OrderList/> },
    { url: "customer-list", component: <CustomerList/> },    
	  { url: 'task', component: <Task/> },
    
    //Agent
	  { url: 'add-agent', component: <AddAgent/> },
	  { url: 'add-agent-wizard', component: <AddAgentWizard/> },
	  { url: 'all-agents', component: <AllAgents/> },
	  { url: 'agent-profile', component: <AgentsProfile/> },
    
    //property    
	  { url: 'add-property', component: <AddProperty/> },
	  { url: 'property-list', component: <PropertyList/> },
	  { url: 'property-details', component: <PropertyDetails/> },
    
    //
	  { url: 'flat-icons', component: <FlaticonIcons /> },
	  { url: 'svg-icons', component: <SvgIcons /> },

    /// Apps
    { url: "app-profile", component: <AppProfile /> },        
    { url: "post-details", component: <PostDetails /> }, 
    { url: "email-compose", component: <Compose /> },
    { url: "email-inbox", component: <Inbox /> },
    { url: "email-read", component: <Read /> },
    { url: "app-calender", component: <Calendar /> },

    ///Cms
    { url: 'content', component: <Content/> },
    { url: 'menu', component: <Menu/> },
    { url: 'email-template', component: <EmailTemplate/> },
    { url: 'blog', component: <CmsBlog/> },
    { url: 'add-content', component: <ContentAdd/> },
    { url: 'add-email', component: <AddMail/> },
    { url: 'add-blog', component: <AddBlog/> },
    { url: 'blog-category', component: <BlogCategory/> },

    /// Shop
    { url: "ecom-product-grid", component: <ProductGrid /> },
    { url: "ecom-product-list", component: <ProductList /> },
    { url: "ecom-product-detail", component: <ProductDetail /> },
    { url: "ecom-product-order", component: <ProductOrder /> },
    { url: "ecom-checkout", component: <Checkout /> },
    { url: "ecom-invoice", component: <Invoice /> },
    { url: "ecom-customers", component: <EcomCustomers /> },
    

    /// Chart
    { url: "chart-sparkline", component: <SparklineChart /> },
    { url: "chart-chartjs", component: <ChartJs /> },    
    { url: "chart-apexchart", component: <ApexChart /> },
    { url: "chart-rechart", component: <RechartJs /> },

   /// Bootstrap
   { url: "ui-accordion", component: <UiAccordion /> },
   { url: "ui-alert", component: <UiAlert /> },
   { url: "ui-badge", component: <UiBadge /> },
   { url: "ui-button", component: <UiButton /> },
   { url: "ui-modal", component: <UiModal /> },
   { url: "ui-button-group", component: <UiButtonGroup /> },
   { url: "ui-list-group", component: <UiListGroup /> },
   { url: "ui-media-object", component: <MediaObject /> },
   { url: "ui-card", component: <UiCards />},
   { url: "ui-carousel", component: <UiCarousel /> },
   { url: "ui-dropdown", component: <UiDropDown /> },
   { url: "ui-popover", component: <UiPopOver /> },
   { url: "ui-progressbar", component: <UiProgressBar /> },
   { url: "ui-tab", component: <UiTab /> },
   { url: "ui-pagination", component: <UiPagination /> },
   { url: "ui-typography", component: <UiTypography /> },
   { url: "ui-grid", component: <UiGrid /> }, 

    /// Plugin
    
    { url: "uc-select2", component: <Select2 /> },
    { url: "uc-sweetalert", component: <MainSweetAlert /> },
    { url: "uc-toastr", component: <Toastr /> },
    { url: "map-jqvmap", component: <JqvMap /> },
    { url: "uc-lightgallery", component: <Lightgallery /> },


    /// Widget
    { url: "widget-basic", component: <Widget /> },


    // Form
    { url: "form-element", component: <Element /> },
    { url: "form-wizard", component: <Wizard /> },
    { url: "form-ckeditor", component: <CkEditor /> },
    { url: "form-pickers", component: <Pickers /> },
    { url: "form-validation", component: <FormValidation /> },


    /// table	
    { url: "table-datatable-basic", component: <DataTable/> },    
    { url: 'table-filtering', component: <FilteringTable /> },
    { url: 'table-sorting', component: <SortingTable /> },
    { url: "table-bootstrap-basic", component: <BootstrapTable /> },

    /// pages    
    { url: "empty", component: <EmptyPage/> },
    { url: 'todo', component: <Todo/> },
  ]


  function NotFound(){    
    const url = allroutes.map((route) => route.url);
    let path = window.location.pathname
    path = path.split('/')
    path = path[path.length - 1]    
      
    if(url.indexOf(path) <= 0){     
      return <Error404 />
    }
  }   

  return (
       <>
         <Routes>              
            <Route path='/page-lock-screen' element= {<LockScreen />} />
            <Route path='/page-error-400' element={<Error400/>} />            
            <Route path='/page-error-403' element={<Error403/>} />
            <Route path='/page-error-404' element={<Error404/>} />
            <Route path='/page-error-500' element={<Error500/>} />
            <Route path='/page-error-503' element={<Error503/>} />     
            <Route  element={<MainLayout />} > 
                {allroutes.map((data, i) => (
                  <Route
                    key={i}
                    exact
                    path={`${data.url}`}
                    element={data.component}
                  />
                ))}
            </Route>                
            <Route path='*' element={<NotFound/>} />               
        </Routes>        
        <ScrollToTop />
       </>
  )
}

function MainLayout(){  
  const sideMenu = useSelector(state => state.sideMenu);
  return (
    <div id="main-wrapper" className={`show  ${ sideMenu ? "menu-toggle" : ""}`}>  
        <Nav />
        <div className="content-body" >          
          <div className="container-fluid" style={{ minHeight: window.screen.height - 45 }}>
             <Outlet />   
          </div>
        </div>
        <Footer />
    </div>
  )
};

export default Markup;
