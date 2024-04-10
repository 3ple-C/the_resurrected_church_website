// stylesheet
import '../assets/css/main.css'

// Images
import HeaderImg from '../assets/images/Frame 1627.png';
import HeaderImg2 from '../assets/images/Frame 1699 (3).png';
import EmailIcon from '../assets/images/Frame 132.png';
import Location from '../assets/images/Frame 129.png';
import Whatsapp from '../assets/images/Frame 131.png';
import CallIcon from '../assets/images/Frame 130.png';


// components
import Contacts from '../components/contactItems';
import { Input } from '../components/input';
import { Textarea } from "../components/input";
import Navbar from "../sections/nav";
import Header1 from "../sections/header1";
import Footer from '../sections/footer';
import FormHeader from '../components/formHeader';
import Button from '../components/rtcBtn';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Header1 src={HeaderImg} src2={HeaderImg2} />

            <section className='flex xl:px-28 lg:pt-32 lg:px-10 '  >
                <div className='w-[50%] flex flex-col gap-12' id='contacts'>
                    <Contacts source={EmailIcon} name="Email Address" contacts="Info@theresurrectedchurchng.org" />
                    <Contacts source={Whatsapp} name="Whatsapp" contacts="09139107522" />
                    <Contacts source={Location} name="Location" contacts="Lagos, Nigeria" />
                    <Contacts source={CallIcon} name="Phone Number" contacts="09139107522" />
                </div>

                <div className='lg:relative xl:w-[60%] md:w-[75%] md:mt-[1.85rem] px-4 pt-5 mx-auto' >
                    <div id='border-control'></div>

                    <div className="bg-white form-container space-y-7 xl:px-7 xl:py-2 xl:rounded-md lg:space-y-10 md:space-y-7 lg:shadow-lg" id='contact' >
                        <FormHeader header="Send us a message" subHeader="Can’t find what you’re looking for? Need help? Feel free by sending us a message." className='pt-0' />

                        <div className='md:w-[50%] flex flex-col gap-12' id='contacts2'>
                            <Contacts source={EmailIcon} name="Email Address" contacts="Info@theresurrectedchurchng.org" />
                            <Contacts source={Whatsapp} name="Whatsapp" contacts="09139107522" />
                            <Contacts source={Location} name="Location" contacts="Lagos, Nigeria" />
                            <Contacts source={CallIcon} name="Phone Number" contacts="09139107522" />
                        </div>

                        <form action="https://fabform.io/f/insert-form-id" method="POST" className="space-y-6 lg:space-y-10 md:space-y-6 pb-6">
                            <Input label="Full Name" type="text" placeholder="Full Name" />

                            <Input label="Email" type="email" placeholder="Enter email address" />

                            <Textarea message="Message" placeholder="Write your message" />

                           <Button name="Send Message" />
                        </form>
                    </div>
                </div>
            </section>

            <Footer className='xl:mt-[35rem] mt-[30rem]' />
        </div>

    );
};

export default Contact;





