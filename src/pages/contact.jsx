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

            <section className='flex xl:px-28    lg:pt-32 lg:px-10 '  >
                <div className='w-[50%] flex flex-col gap-12' id='contacts'>
                    <Contacts source={EmailIcon} name="Email Address" contacts="Info@theresurrectedchurchng.org" />
                    <Contacts source={Whatsapp} name="Whatsapp" contacts="09139107522" />
                    <Contacts source={Location} name="Location" contacts="Lagos, Nigeria" />
                    <Contacts source={CallIcon} name="Phone Number" contacts="09139107522" />
                </div>

                <div className=' md:relative xl:w-[60%] md:w-[75%] md:mt-[1.85rem] ' >
                    <div id='border-control'></div>

                    <div className="bg-white px-4 pt-4 form-container space-y-12 lg:space-y-10 md:space-y-7 md:shadow-xl" id='contact' >
                        <FormHeader header="Send us a message" subHeader="Can’t find what you’re looking for? Need help? Feel free by sending us a message." className='pt-0' />

                        <div className=' md:w-[50%] flex flex-col gap-12' id='contacts2'>
                            <Contacts source={EmailIcon} name="Email Address" contacts="Info@theresurrectedchurchng.org" />
                            <Contacts source={Whatsapp} name="Whatsapp" contacts="09139107522" />
                            <Contacts source={Location} name="Location" contacts="Lagos, Nigeria" />
                            <Contacts source={CallIcon} name="Phone Number" contacts="09139107522" />
                        </div>

                        <form action="https://fabform.io/f/insert-form-id" method="POST" className="space-y-6 lg:space-y-10 md:space-y-6 pb-6">
                            <Input label="Full Name" type="text" placeholder="Full Name" />

                            <Input label="Email" type="email" placeholder="Enter email address" />

                            <Textarea message="Message" placeholder="Write your message" />
                            {/* <div>
                                <Button name="Send Message" className='text-sm'/>
                            </div> */}

                           <Button name="Send Message" />
                        </form>
                    </div>

                    {/* <div id='border-control'></div> */}


                </div>
            </section>

            <Footer className='xl:mt-[35rem] mt-[30rem]' />
        </div>

    );
};

export default Contact;





// import React from 'react';

// function App() {
// 	const containerStyle = {
// 		position: 'relative',
// 		textAlign: 'center',
// 		fontFamily: 'Arial, sans-serif',
// 		left: '30%',
// 		top: "30%",
// 		position: "absolute",
// 	};

// 	const imgStyle = {
// 		position: 'absolute',
// 		left: '0',
// 		top: '0',
// 		zIndex: -1,
// 		// Lower z-index value
// 		boxShadow: '0px 0px 10px 0px black',
// 		borderRadius: "10px",
// 		width: 400,
// 		height: 400,
// 	};

// 	const headingStyle = {
// 		zIndex: 1,
// 		// Higher z-index value
// 		padding: '10px',
// 		borderRadius: '5px',
// 		margin: '0',
// 		textShadow: '2px 2px 4px white',
// 	};

// 	const textStyle = {
// 		margin: '10px',
// 		textShadow: '2px 2px 4px white',
// 	};

// 	return (
// 		<div style={containerStyle}>
// 			<h1 style={headingStyle}>
// 				The z-index Property
// 			</h1>
// 			<img
// 				src=
// "https://media.geeksforgeeks.org/wp-content/uploads/20230816223829/geeksgforgeeks-logo-1.png"
// 				width="100"
// 				height="140"
// 				style={imgStyle}
// 				alt="Image"
// 			/>
// 			<p style={textStyle}>
// 				The image is going to be positioned
// 				behind the heading because it has
// 				a z-index of -1.
// 			</p>
// 		</div>
// 	);
// }

// export default App;
