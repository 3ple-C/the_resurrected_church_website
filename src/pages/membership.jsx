
import HeaderImg from '../assets/images/Frame 1627.png'
import HeaderImg2 from '../assets/images/Frame 1699 (3).png'

// components
import Button from "../components/rtcBtn";
import { Input } from '../components/input';
import { Select } from "../components/input";
import Navbar from "../sections/nav";
import Header1 from "../sections/header1";
import Footer from '../sections/footer';
import FormHeader from '../components/formHeader';

const Membership = () => {


    return (
        <body>
            <Navbar />
            <Header1 src={HeaderImg} src2={HeaderImg2} />
            <div class="xl:w-[60%] md:w-[75%] mx-auto px-6 pt-5 form-container space-y-5 lg:space-y-10 md:space-y-7">
                <FormHeader header="E-Membership Form" subHeader="Become a member of The Resurrected Church Family" />

                <form action="https://fabform.io/f/insert-form-id" method="POST" className="space-y-6 lg:space-y-10 md:space-y-6">
                    <Input label="First Name" type="text" placeholder="John" />

                    <Input label="Last Name" type="text" placeholder="Doe" />

                    <Input label="Phone Number" type="number" placeholder="+23480000..." />

                    <Input label="Email" type="email" placeholder="Hello@gmail.com" />

                    <Input label="How did you hear about TRC?" type="text" placeholder="" />

                    <Input label="When did you start attending TRC?" type="text" placeholder="" />

                    <Select message="Would you like to be part of the workforce at TRC? please select your unit of interest?" placeholder="Type in the Membership....." />

                    <div>
                        <Button name="Submit" />
                    </div>
                </form>
            </div>
            <Footer className='xl:mt-[35rem] mt-[30rem]' />
        </body>

    );
};

export default Membership;