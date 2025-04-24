import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
        <span>Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="expand" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="Notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg"
            alt="user"
          />
          <span>John</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
