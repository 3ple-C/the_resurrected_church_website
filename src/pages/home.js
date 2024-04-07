import '../assets/css/main.css';

import HeaderImg from '../assets/images/Frame 1567.png';
import HeaderImg2 from '../assets/images/Frame 1659.png';

// components
import Nav from '../sections/nav.jsx';
import Header from '../sections/header1.jsx';
import Welcome from '../sections/welcome.jsx';
import PicText  from "../sections/pic_text.jsx";
import Connect from '../sections/connect';
import Messages from '../sections/messages.jsx';
import Service from '../sections/serving.jsx';
import Header2 from '../sections/header2';
import Join from '../sections/join.jsx';
import Footer from '../sections/footer.jsx';


function Home() {
    return (
        <div>
            <Nav />
            <Header src={HeaderImg} src2={HeaderImg2}/>
            <Welcome /> 
            <PicText />
            <Connect />
            <Header2 />
            <Messages />
            <Service />
            <Join />
            <Footer />
        </div>
    );
}

export default Home;
