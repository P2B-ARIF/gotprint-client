import React from "react";
import {
	FaBloggerB,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./../../assets/demo/logo.svg";

const Footer = () => {
	return (
		<footer className='bg-[#484848] py-16'>
			<div className='container mx-auto text-gray-100'>
				<div className='grid grid-cols-4 gap-10 mx-44'>
					<div>
						<h1 className='text-xl font-semibold mb-3'>Get Started</h1>
						<div className='text-sm flex-col flex text-gray-300'>
							<Link>Request Sample Kit</Link>
							<Link>My Account</Link>
							<Link>All Products</Link>
							<Link>Ways to Order</Link>
							<Link>Preparing Files</Link>
							<Link>Download Templates</Link>
							<Link>Check List</Link>
							<Link>Special Instructions</Link>
							<Link>Design Services</Link>
							<Link>Logo Design Services</Link>
							<Link>EDDM® Services</Link>
							<Link>Mailing Services</Link>
							<Link>Direct Marketing Packages</Link>
							<Link>Coupons</Link>
						</div>
					</div>

					<div>
						<h1 className='text-xl font-semibold mb-3'>Learn More</h1>
						<div className='text-sm flex-col flex text-gray-300'>
							<Link>Guarantee</Link>
							<Link>Production Time</Link>
							<Link>Paper Stocks</Link>
							<Link>Print Brokers</Link>
							<Link>GP App</Link>
							<Link>Site Map</Link>
							<Link>Blog</Link>
							<Link>FAQ</Link>
							<Link>Support</Link>
						</div>
					</div>

					<div>
						<h1 className='text-xl font-semibold mb-3'>Who We Are</h1>
						<div className='text-sm flex-col flex text-gray-300'>
							<Link>About Us</Link>
							<Link>Locations</Link>
							<Link>Capabilities</Link>
							<Link>Our Equipment</Link>
							<Link>GP Advantage</Link>
							<Link>GotGreen</Link>
							<Link>Corporate Partnerships</Link>
							<Link>Sponsorships/Non-Profits</Link>
							<Link>Careers</Link>
						</div>
					</div>
					<div>
						<h1 className='text-xl font-semibold mb-3'>Stay In Touch</h1>
						<div className='text-sm flex-col flex text-gray-300'>
							<Link>Accessibility</Link>
							<Link>Report an Order Issue</Link>
							<Link>Collaborations</Link>
							<Link>Feedback</Link>
							<Link>Contact Us</Link>
						</div>
					</div>
				</div>

				<div className='mx-44 my-10 border-t border-white'></div>

				<div className='mx-44 flex items-center justify-between'>
					<div>
						<img src={logo} alt='' className='w-[150px]' />
					</div>
					<div className='flex items-center gap-7'>
						<FaFacebookF size={36} />
						<FaTwitter size={36} />
						<FaInstagram size={36} />
						<FaTiktok size={36} />
						<FaBloggerB size={36} />
						<FaYoutube size={36} />
						<FaLinkedinIn size={36} />
					</div>
					<div>
						<img src={logo} alt='' className='w-[150px]' />
					</div>
				</div>

				<div className="mx-44 text-center mt-10 text-xs flex items-center justify-center gap-5">
					<p>© Copyright 2024 GotPrint. All rights reserved</p>
          <Link className="border-l pl-5">Privacy Policy</Link>
          <Link className="border-l pl-5">Terms of Use</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
