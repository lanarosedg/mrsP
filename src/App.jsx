import { BrowserRouter, Routes, Route} from 'react-router-dom';

import WomenSchool from './WomenSchool';
import Men from './Men.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<WomenSchool />} />
                    <Route path="/Men" element={<Men />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App