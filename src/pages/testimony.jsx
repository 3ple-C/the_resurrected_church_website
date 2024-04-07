
import HeaderImg from '../assets/images/Frame 1644.png'
import HeaderImg2 from '../assets/images/Frame 1699 (2).png'

// components
import Button from "../components/rtcBtn";
import { Input } from '../components/input';
import { Textarea } from "../components/input";
import Navbar from "../sections/nav";
import Header1 from "../sections/header1";
import Footer from '../sections/footer';

const Testimony = () => {
   

    return (
        <body>
            <Navbar />
            <Header1 src={HeaderImg} src2={HeaderImg2}/>
            <div class="xl:w-[60%] md:w-[75%] mx-auto p-8 pt-32 form-container space-y-5 lg:space-y-10 md:space-y-7">
                <form action="https://fabform.io/f/insert-form-id" method="POST" className="space-y-6 lg:space-y-10 md:space-y-6">
                    <Input label="Full Name" type="text" placeholder="+23480000..." />

                    <Input label="Phone Number" type="number" placeholder="+23480000..." />

                    <Input label="Email" type="email" placeholder="Hello@gmail.com" />

                    <Input label="Link" type="text" placeholder="Link to Picture/video ( if any)" />

                    <Input label="Location" type="text" placeholder="" />

                    <Textarea message="Testimony" placeholder="Type in the Testimony....." />

                    <div>
                        <Button name="Submit" />
                    </div>
                </form>
            </div>
            <Footer className='xl:mt-[35rem] mt-[30rem]'/>
        </body>

    );
};

export default Testimony;