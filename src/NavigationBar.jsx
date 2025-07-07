import navLogo from './assets/logo.png';
import menu from './assets/menu.png';

function NavigationBar() {
    return (
        <>
        <div className="navParent">
            <div className="navTop">
                <div className="navTopFlex">
                    <img 
                        src={navLogo} 
                        alt="" 
                        className="navLogo" 
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
                    <a href="">
                        Women
                    </a>
                    <a href="">
                        Men
                    </a>
                    <a href="">
                        Kids
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default NavigationBar;