import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "./../../../../assets/demo/acrylic_boards_info_banner_desktop.jpg";

const Hero = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${img})`,
				backgroundPositionX: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className='container mx-auto py-20'>
				<div className='mx-44'>
					<Breadcrumb
						spacing='8px'
						separator={<MdOutlineKeyboardDoubleArrowRight color='gray.500' />}
					>
						<BreadcrumbItem>
							<BreadcrumbLink href='#' color={"#3e84b6"}>
								Home
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink href='#'>Acrylic Boards</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>

					<h1 className='text-4xl font-extrabold text-gray-700 mt-5'>
						Acrylic Boards
					</h1>
					<h6 className='text-xl text-gray-700 mb-5'>
						Durable, affordable, & sleek signage ideal <br /> for branding,
						events, & much more.
					</h6>

					<Link className='rounded-full py-2 px-5 border-[1px] border-gray-800 font-bold'>
						Shop Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
