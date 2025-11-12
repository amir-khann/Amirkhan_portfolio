import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the actual window pathname (before React Router basename stripping)
    const windowPath = window.location.pathname;
    const routerPath = location.pathname;
    
    // Check if we're at the root path (with or without basename)
    if (windowPath === "/Amirkhan_portfolio/" || windowPath === "/Amirkhan_portfolio" || 
        routerPath === "/" || routerPath === "") {
      navigate("/", { replace: true });
      return;
    }
    // Only log error if it's not the root path
    if (routerPath !== "/" && routerPath !== "") {
      console.error("404 Error: User attempted to access non-existent route:", routerPath, "Window path:", windowPath);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
