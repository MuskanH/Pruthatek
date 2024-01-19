import React from 'react';
import CategoryOne from '../../Category Component/CategoryOne';
import CategotyTwo from '../../Category Component/CategotyTwo';
import Footer from '../../Comon/Footer';
import Navbar from '../../Comon/Navbar';
import './../Styles/Home.css'
import LatestStories from './LAtestStories';
import TopStories from './TopStories';
// import Select from 'react-select'

function Home(props) {
    document.title = "PruthaTek Blogs"
    // const options =
    //     [
    //         { value: 'React', label: 'React JS' },
    //         { value: 'Angular js', label: 'Angular JS' },
    //         { value: 'Next JS', label: 'Next JS' },
    //     ];
    // const [selectedOption, setSelectedOption] = useState(null);
    // console.log(selectedOption);
    // const sel = (e) => {
    //     setSelectedOption(e.value)
    // }
    return (
        <div className="main-bg">
            <Navbar />
            {/* <div style={{width : "12vw",marginLeft : "auto",marginRight:"auto"}}>
                <Select
                    defaultValue={selectedOption}
                    onChange={sel}
                    options={options}
                />
            </div> */}
            <div className="top-and-latest-stories">
                <TopStories />
                <LatestStories />
            </div>
            <CategoryOne />
            <CategotyTwo />
            {/* <Footer /> */}
        </div>
    );
}

export default Home;