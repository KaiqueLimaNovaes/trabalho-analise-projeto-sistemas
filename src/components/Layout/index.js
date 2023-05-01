import { Lay } from './layout.styled';
import Menu from '../Menu';
import TopBar from '../Topbar';
import Space from '../Space';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return(
        <Lay>
            <TopBar />
            <Space top={0.5} />
            <Menu />
            <div>{children}</div>
            <Footer />
        </Lay>
    );
}

export default Layout;