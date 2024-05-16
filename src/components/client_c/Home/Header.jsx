import React from "react";
import { BsCart2, BsFillLightningChargeFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "./../../../assets/demo/logo.svg";
import Navbar from "../Navbar";

const Header = () => {
	return (
		<header>
			<div className='border-b-[1px] border-gray-300'>
				<div className='text-center flex justify-center items-center text-[13px] gap-2 py-3 bg-[#3E84B6] text-white'>
					<BsFillLightningChargeFill size={16} />
					<strong>GP Anniversary </strong>
					<Link> Sale! 23% off with code 23YEARS.</Link>
					Max $50. Ends 5/31/24.
				</div>
				<div className='container mx-auto py-6 flex items-center justify-between'>
					<div>
						<img src={logo} alt='' className='h-[50px]' />
					</div>
					<div className='rounded-full p-2 gap-1 border-2 border-gray-300 flex items-center w-[350px]'>
						<CiSearch size={20} />
						<input
							type='text'
							placeholder='Search for product of service...'
							className='w-full outline-none border-none text-sm'
						/>
						<IoMdClose size={20} />
					</div>
					<div className='flex items-center'>
						<Link className='border-r-2 px-3 text-sm'>Corporate Partner</Link>
						<Link className='border-r-2 px-3 text-sm'>Reseller</Link>
						<Link className='px-3 text-sm'>Contact</Link>
						<Link className='px-3 flex items-center gap-1 font-semibold text-base border-r-2'>
							<CgProfile size={24} /> Login
						</Link>
						<Link className='px-3 font-semibold text-base'>Sign Up</Link>
						<div className='px-2'>
							<BsCart2 size={36} />
						</div>
					</div>
				</div>
			</div>
			<Navbar />
		</header>
	);
};

export default Header;
