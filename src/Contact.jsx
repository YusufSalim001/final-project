import React from 'react'
import MainLogo from "../../logos/Meubel.svg"
import { Link } from 'react-router-dom'
import './Contact.css'
import CallIcion from "../../logos/callicon.svg"
import Location from "../../logos/location.svg"
import Time from "../../logos/time.svg"
import Trophy from "../../logos/trophy.svg"
import Warrantee from "../../logos/warrantee.svg"
import Hand from "../../logos/hand.svg"
import Call from "../../logos/call.svg"
import Dasharrow from "../../logos/dasharrow.svg"

const Contact = () => {
  return (
    <div>
        <section className='contactsection1'>
            <img src={MainLogo} alt="" />
            <h1>Contact</h1>
            <div className='linkdivider'>
                <Link className='linkage' to="/">Home</Link>
                <div>
                    <img src={Dasharrow} alt="" />
                </div>
                <Link className='linkage' to="/contact">Contact</Link>
            </div>
        </section>
        <section className='contactsection2'>
            <h2 className='s2h2'>Get In Touch With Us</h2>
            <p className='s2p'>For More Information About Our Product & Services. Please Feel Free To Drop <br />Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            <div className='consect'>
                <div>
                    <div className='consect1'>
                        <img src={Location} alt="" />
                        <div className='constext'>
                            <h4>Address</h4>
                            <p>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</p>
                        </div>
                    </div>
                    <div className='consect1'>
                        <img src={CallIcion} alt="" />
                        <div className='constext'>
                            <h4>Phone</h4>
                            <p>Mobile: +(84) 546-6789 <br />Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                    <div className='consect1'>
                        <img src={Time} alt="" />
                        <div className='constext'>
                            <h4>Working Time</h4>
                            <p>Monday-Friday: 9:00 - 22:00 <br />Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form className='consect2' action="" method="post">
                        <p>Your name <br /> <input type="text" placeholder='ABC' /></p>
                        <p>Email address <br /><input type="email" placeholder='abc@def.com' /></p>
                        <p>Subject <br /><input type="text" placeholder='This is an option' /></p>
                        <p>Message <br /><textarea className='message' type="text" placeholder='Hi! i’d like to ask about'></textarea></p>
                        <button className='s2bt'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
        <section className='contactsection3'>
            <div className='icontext'>
                <div className='icontext12'>
                    <img src={Trophy} alt="" />
                    <div>
                    <h4>High Quality</h4>
                    <p>crafted from top materials</p>
                    </div>
                </div>
                <div className='icontext12'>
                    <img src={Warrantee} alt="" />
                    <div>
                    <h4>Warranty Protection</h4>
                    <p>Over 2 years</p>
                    </div>
                </div>
                <div className='icontext12'>
                    <img src={Hand} alt="" />
                    <div>
                    <h4>Free Shipping</h4>
                    <p>Order over 150 $</p>
                    </div>
                </div>  
                <div className='icontext12'>
                    <img src={Call} alt="" />
                    <div>
                    <h4>24 / 7 Support</h4>
                    <p>Dedicated support</p>
                    </div>
                </div>
                
            </div>
        </section>
        
        
    </div>
  )
}

export default Contact