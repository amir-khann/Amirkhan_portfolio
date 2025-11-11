import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm sm:text-base">
            Designed & Built by{" "}
            <span className="text-primary font-semibold">Amir Khan</span>
            <FiHeart className="text-accent animate-pulse" />
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
