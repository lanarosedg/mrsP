import school1 from './assets/men/school/menschool1.png';
import school2 from './assets/men/school/menschool2.png';
import school3 from './assets/men/school/menschool3.png';
import school4 from './assets/men/school/menschool4.png';

import brogues1 from './assets/men/brogues/brogues.png';
import brogues2 from './assets/men/brogues/brogues2.png';
import brogues3 from './assets/men/brogues/brogues3.png';
import brogues4 from './assets/men/brogues/brogues4.png';

import { useNavigate } from 'react-router-dom';

import NavigationBar from './NavigationBar'
import Footer from './Footer';

function Men () {
    const navigate = useNavigate();
    return (
        <>
        <NavigationBar/>
        <div className="productsContainer">
            <p className="productCategory">
                Men's Black Shoes
            </p>
                <div className="productItem1">
                    <img 
                        src={school1} 
                        alt=""
                        className="productImage1" 
                    />
                    <p className="productDescription">
                        $XX,XXX <br />
                        x inch
                    </p>
                </div>
                <div className="productItem2">
                    <img 
                        src={school2}
                        alt="" 
                        className="productImage2" 
                    />
                    <p className="productDescription">
                        $XX,XXX <br />
                        x inch
                    </p>
                </div>
                <div className="productItem3">
                    <img 
                        src={school3}
                        alt="" 
                        className="productImage3" 
                    />
                    <p className="productDescription">
                        $XX,XXX <br />
                        x inch
                    </p>
                </div>
                <div className="productItem4">
                    <img 
                        src={school4}
                        alt="" 
                        className="productImage4" 
                    />
                    <p className="productDescription">
                        $XX,XXX <br />
                        x inch
                    </p>
                </div>
            </div>

            <div className="productsContainer">
            <p className="productCategory">
                Brogues
            </p>
                <div className="productItem1">
                    <img 
                        src={brogues1} 
                        alt=""
                        className="productImage1" 
                    />
                    <p className="productDescription">
                        $XX,XXX <br />
                        x inch
                    </p>
                </div>
                <div className="productItem2">
                    <img 
                        src={brogues2}
                        alt="" 
                        className="productImage2" 
                    />
                    <p className="productDescription">
                        $XX,XXX <br />
                        x inch
                    </p>
                </div>
                <div className="productItem3">
                    <img 
                        src={brogues3}
                        alt="" 
                        className="productImage3" 
                    />
                    <p className="productDescription">
                        $XX,XXX <br />
                        x inch
                    </p>
                </div>
                <div className="productItem4">
                    <img 
                        src={brogues4}
                        alt="" 
                        className="productImage4" 
                    />
                    <p className="productDescription">
                        $XX,XXX <br />
                        x inch
                    </p>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Men;