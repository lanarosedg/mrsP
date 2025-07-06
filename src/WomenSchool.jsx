import school1 from './assets/school/school1.png';
import school2 from './assets/school/school2.png';
import school3 from './assets/school/school3.png';
import school4 from './assets/school/school4.png';

function Products () {
    return (
        <>
        <div className="productsContainer">
            <p className="productCategory">
                Category
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
        </>
    )
}

export default Products;