export const MenuList = [
  //Dashboard
  {
    title: "Dashboard",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-dashboard-1" />,
    content: [
      {
        title: "Dashboard",
        to: "dashboard",
      },

      {
        title: "Analytics",
        to: "analytics",
      },
      {
        title: "Review",
        to: "review",
      },
      {
        title: "Order List",
        to: "order-list",
      },
      {
        title: "Customer",
        to: "customer-list",
      },
      {
        title: "Task",
        to: "task",
      },
    ],
  },
  {
    title: "Agents",
    update: "New",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-381-user-7" />,
    content: [
      {
        title: "Add Agent",
        to: "add-agent",
      },
      {
        title: "Add Agent Wizard",
        to: "add-agent-wizard",
      },
      {
        title: "All Agents",
        to: "all-agents",
      },
      {
        title: "Agent Profile",
        to: "agent-profile",
      },
    ],
  },
  {
    title: "Property",
    update: "New",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-381-layer-1" />,
    content: [
      {
        title: "Add Property",
        to: "add-property",
      },
      {
        title: "Property List",
        to: "property-list",
      },
      {
        title: "Property Details",
        to: "property-details",
      },
    ],
  },
  //Apps
  {
    title: "Apps",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-app" />,
    content: [
      {
        title: "Profile",
        to: "app-profile",
      },

      {
        title: "Post Details",
        to: "post-details",
      },
      {
        title: "Email",
        hasMenu: true,
        content: [
          {
            title: "Compose",
            to: "email-compose",
          },
          {
            title: "Inbox",
            to: "email-inbox",
          },
          {
            title: "Read",
            to: "email-read",
          },
        ],
      },
      {
        title: "Calendar",
        to: "app-calender",
      },
      {
        title: "Shop",
        //to: './',
        hasMenu: true,
        content: [
          {
            title: "Product Grid",
            to: "ecom-product-grid",
          },
          {
            title: "Product List",
            to: "ecom-product-list",
          },
          {
            title: "Product Details",
            to: "ecom-product-detail",
          },
          {
            title: "Order",
            to: "ecom-product-order",
          },
          {
            title: "Checkout",
            to: "ecom-checkout",
          },
          {
            title: "Invoice",
            to: "ecom-invoice",
          },
          {
            title: "Customers",
            to: "ecom-customers",
          },
        ],
      },
    ],
  },

  //Icons

  {
    title: "Icons",
    update: "New",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-381-file" />,
    content: [
      {
        title: "Flaticons",
        to: "flat-icons",
      },
      {
        title: "SVG Icons",
        to: "svg-icons",
      },
    ],
  },

  {
    title: "CMS",
    update: "New",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-381-database-1" />,
    content: [
      {
        title: "Content",
        to: "content",
      },
      {
        title: "Add Content",
        to: "add-content",
      },
      {
        title: "Menus",
        to: "menu",
      },
      {
        title: "Email Template",
        to: "email-template",
      },
      {
        title: "Add Email",
        to: "add-email",
      },
      {
        title: "Blog",
        to: "blog",
      },
      {
        title: "Add Blog",
        to: "add-blog",
      },
      {
        title: "Blog Category",
        to: "blog-category",
      },
    ],
  },

  //Charts
  {
    title: "Charts",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-bar-chart-2" />,
    content: [
      {
        title: "RechartJs",
        to: "chart-rechart",
      },
      {
        title: "Chartjs",
        to: "chart-chartjs",
      },
      {
        title: "Sparkline",
        to: "chart-sparkline",
      },
      {
        title: "Apexchart",
        to: "chart-apexchart",
      },
    ],
  },
  //Boosttrap
  {
    title: "Bootstrap",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-money" />,
    content: [
      {
        title: "Accordion",
        to: "ui-accordion",
      },
      {
        title: "Alert",
        to: "ui-alert",
      },
      {
        title: "Badge",
        to: "ui-badge",
      },
      {
        title: "Button",
        to: "ui-button",
      },
      {
        title: "Modal",
        to: "ui-modal",
      },
      {
        title: "Button Group",
        to: "ui-button-group",
      },
      {
        title: "List Group",
        to: "ui-list-group",
      },
      {
        title: "Media Object",
        to: "ui-media-object",
      },
      {
        title: "Cards",
        to: "ui-card",
      },
      {
        title: "Carousel",
        to: "ui-carousel",
      },
      {
        title: "Dropdown",
        to: "ui-dropdown",
      },
      {
        title: "Popover",
        to: "ui-popover",
      },
      {
        title: "Progressbar",
        to: "ui-progressbar",
      },
      {
        title: "Tab",
        to: "ui-tab",
      },
      {
        title: "Typography",
        to: "ui-typography",
      },
      {
        title: "Pagination",
        to: "ui-pagination",
      },
      {
        title: "Grid",
        to: "ui-grid",
      },
    ],
  },
  //plugins
  {
    title: "Plugins",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-plugin"></i>,
    content: [
      {
        title: "Select 2",
        to: "uc-select2",
      },
      {
        title: "Sweet Alert",
        to: "uc-sweetalert",
      },
      {
        title: "Toastr",
        to: "uc-toastr",
      },
      // {
      //     title:'Jqv Map',
      //     to: 'map-jqvmap',
      // },
      {
        title: "Light Gallery",
        to: "uc-lightgallery",
      },
    ],
  },
  //Widget
  {
    title: "Widget",
    //classsChange: 'mm-collapse',
    iconStyle: <i className="flaticon-settings" />,
    to: "widget-basic",
  },
  //Forms
  {
    title: "Forms",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-form-1" />,
    content: [
      {
        title: "Form Elements",
        to: "form-element",
      },
      {
        title: "Wizard",
        to: "form-wizard",
      },
      {
        title: "CkEditor",
        to: "form-ckeditor",
      },
      {
        title: "Pickers",
        to: "form-pickers",
      },
      {
        title: "Form Validate",
        to: "form-validation",
      },
    ],
  },
  //Table
  {
    title: "Table",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-table"></i>,
    content: [
      {
        title: "Table Filtering",
        to: "table-filtering",
      },
      {
        title: "Table Sorting",
        to: "table-sorting",
      },
      {
        title: "Bootstrap",
        to: "table-bootstrap-basic",
      },
      {
        title: "Tables",
        to: "table-datatable-basic",
      },
    ],
  },
  //Pages
  {
    title: "Pages",
    classsChange: "mm-collapse",
    iconStyle: <i className="flaticon-landing-page"></i>,
    content: [
      {
        title: "Error",
        hasMenu: true,
        content: [
          {
            title: "Error 400",
            to: "page-error-400",
          },
          {
            title: "Error 403",
            to: "page-error-403",
          },
          {
            title: "Error 404",
            to: "page-error-404",
          },
          {
            title: "Error 500",
            to: "page-error-500",
          },
          {
            title: "Error 503",
            to: "page-error-503",
          },
        ],
      },
      {
        title: "Lock Screen",
        to: "page-lock-screen",
      },
    ],
  },
];
