
import HeaderImg from '../assets/images/Frame 1639.png'
import HeaderImg2 from '../assets/images/Frame 1699.png'

// components
import Button from "../components/rtcBtn";
import { Input } from '../components/input';
import { Textarea } from "../components/input";
import FormHeader from "../components/formHeader";
import Navbar from "../sections/nav";
import Header1 from "../sections/header1";
import Footer from '../sections/footer';

const Prayer = () => {
   

    return (
        <body>
            <Navbar />
            <Header1 src={HeaderImg} src2={HeaderImg2}/>
            <div class="xl:w-[60%] md:w-[75%] mx-auto px-6 pt-4 form-container space-y-5 lg:space-y-10 md:space-y-7">

                <FormHeader header="Submit your Prayer Request" subHeader="Release your faith with us."/>
                <form action="https://fabform.io/f/insert-form-id" method="POST" className="space-y-6 lg:space-y-10 md:space-y-6">
                    <Input label="Full Name" type="text" placeholder="+23480000..." />

                    <Input label="Phone Number" type="number" placeholder="+23480000..." />

                    <Input label="Email" type="email" placeholder="Hello@gmail.com" />

                    <Input label="Location" type="text" placeholder="" />

                    <Textarea message="Prayer Request" placeholder="Type prayer request here....." />

                    <div>
                        <Button name="Submit" />
                    </div>
                </form>
            </div>
            <Footer className='mt-[35rem]'/>
        </body>

    );
};

export default Prayer;