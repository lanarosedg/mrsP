import { useNavigate } from 'react-router-dom';

import navLogo from './assets/logo.png';
import menu from './assets/menu.png';

function NavigationBar() {
    const navigate = useNavigate();
    return (
        <>
        <div className="navParent">
            <div className="navTop">
                <div className="navTopFlex">
                    <img 
                        src={navLogo} 
                        alt="" 
                        className="navLogo" 
                        onClick={() => navigate('/')}
                    />
                    <img 
                        src={menu} 
                        alt="" 
                        className="menu" 
                    />
                </div>
            </div>
            <div className="navBottom">
                <div className="navBottomFlex">
                    <button 
                        onClick={() => navigate('/')}>
                        Women
                    </button>
                    <button 
                        onClick={() => navigate('/Men')}>
                        Men
                    </button>
                    <button>
                        Kids
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default NavigationBar;