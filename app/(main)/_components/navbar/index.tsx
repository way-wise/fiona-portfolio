import { getSession } from "@/lib/auth";
import PortfolioNavbar from "./portfolio-navbar";

const Navbar = async () => {
  const session = await getSession();

  return <PortfolioNavbar session={session} />;
};

export default Navbar;
