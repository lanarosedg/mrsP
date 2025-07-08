import school1 from './assets/women/school/school1.png';
import school2 from './assets/women/school/school2.png';
import school3 from './assets/women/school/school3.png';
import school4 from './assets/women/school/school4.png';

import stilettos1 from './assets/women/stilettos/stilettos1.png';
import stilettos2 from './assets/women/stilettos/stilettos2.png';
import stilettos3 from './assets/women/stilettos/stilettos3.png';
import stilettos4 from './assets/women/stilettos/stilettos4.png';

import block1 from './assets/women/block/block1.png';
import block2 from './assets/women/block/block2.png';
import block3 from './assets/women/block/block3.png';
import block4 from './assets/women/block/block4.png';

import NavigationBar from './NavigationBar'
import Footer from './Footer';

function WomenSchool () {
    return (
        <>
        <NavigationBar/>
        <div className="productsContainer">
            <p className="productCategory">
                Black Shoes
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
                Stilettos
            </p>
                <div className="productItem1">
                    <img 
                        src={stilettos1} 
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
                        src={stilettos2}
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
                        src={stilettos3}
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
                        src={stilettos4}
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
                Block heels
            </p>
                <div className="productItem1">
                    <img 
                        src={block1} 
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
                        src={block2}
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
                        src={block3}
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
                        src={block4}
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

export default WomenSchool;