// Icon Images
import instagram from '../assets/images/bi_instagram.png';
import facebook from '../assets/images/Vector (1).png';
import youtube from '../assets/images/Vector.png';
import HeaderImg from '../assets/images/Frame 1646.png'
import HeaderImg2 from '../assets/images/Frame 1699 (4).png'
// import
// components
import Navbar from '../sections/nav';
import Header from '../sections/header1';
import { LiveBox } from "../components/message";
import FormHeader from '../components/formHeader';
import Footer from '../sections/footer';

const Live = () => {
    return (
        <main className=''>
            <Navbar />
            <Header src={HeaderImg} src2={HeaderImg2} />
            <div className='flex flex-col items-center pb-72 md:pb-96 pt-4 xl:pt-10' >
                <FormHeader header="STREAMING PLATFORMS" subHeader="" />
                <p className='font-medium'>Kindly Select Your Preferred Option</p>
                <div className='w-full flex flex-col justify-center items-center mt-12 md:mt-24 md:flex-row gap-8  md:flex-wrap' >
                    <LiveBox name="Join Us" source={instagram} social="Instagram" alt="RTC media links" />
                    <LiveBox name="Join Us" source={facebook} social="Facebook" alt="RTC media links" />
                    <LiveBox name="Join Us" source={youtube} social="Youtube" alt="RTC media links" />
                </div>

            </div>
            <Footer />
        </main>
    )
}

export default Live;