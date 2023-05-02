import { Lay } from './layout.styled';
import Menu from '../Menu';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return(
        <Lay>
            <Menu />
            <div>{children}</div>
            <Footer />
        </Lay>
    );
}

export default Layout;