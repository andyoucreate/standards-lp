import Footer from "../Footer";
import Header from "../Header";

type LayoutProps = {
  hideFooter?: boolean;
  children: React.ReactNode;
};

const Layout = ({ hideFooter, children }: LayoutProps) => (
  <div className="pt-[6.25rem] lg:pt-[6.75rem] overflow-x-hidden">
    <Header />
    {children}
    {hideFooter ? null : <Footer />}
  </div>
);

export default Layout;
