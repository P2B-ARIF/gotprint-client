import {
	Button,
	Input,
	InputGroup,
	InputRightElement,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Register = ({ setAuthRoute }) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClick = () => setShowPassword(!showPassword);

	return (
		<Modal size={"xl"} isOpen={true} onClose={() => setAuthRoute("")}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					m={10}
					my={8}
					mb={3}
					backgroundColor={"#8cc63f"}
					borderRadius={"full"}
					fontSize={"sm"}
					p={"3px"}
					display={"grid"}
					gridTemplateColumns={"1fr 1fr"}
				>
					<button onClick={() => setAuthRoute("login")} className='text-white'>
						Login
					</button>
					<button className='bg-white rounded-full py-[7px]'>Sign Up</button>
				</ModalHeader>
				<ModalCloseButton top={"-30px"} color={"white"} fontSize={"14"} />
				<ModalBody mx={8} mb={5}>
					<h1 className='text-center text-2xl font-extrabold text-gray-700'>
						Sign Up
					</h1>
					<h5 className='text-center text-gray-600'>
						Sign up for faster checkout.
					</h5>

					<form>
						<Input
							variant='outline'
							placeholder='First Name'
							focusBorderColor='#8cc63f'
							my={3}
							py={5}
						/>
						<Input
							variant='outline'
							placeholder='Last Name'
							focusBorderColor='#8cc63f'
							my={3}
							py={5}
						/>
						<Input
							variant='outline'
							placeholder='Company (optional)'
							focusBorderColor='#8cc63f'
							my={3}
							py={5}
						/>
						<Input
							variant='outline'
							placeholder='Email Address'
							focusBorderColor='#8cc63f'
							my={3}
							py={5}
						/>
						<Input
							variant='outline'
							placeholder='Confirm Email Address'
							focusBorderColor='#8cc63f'
							my={3}
							py={5}
						/>

						<InputGroup size='md'>
							<Input
								pr='4.5rem'
								type={showPassword ? "text" : "password"}
								placeholder='Password'
								focusBorderColor='#8cc63f'
								py={5}
							/>
							<InputRightElement width='4.5rem'>
								<Button h='full' size='sm' mt={2} onClick={handleClick}>
									{showPassword ? "Hide" : "Show"}
								</Button>
							</InputRightElement>
						</InputGroup>

						<InputGroup size='md' my={4}>
							<Input
								pr='4.5rem'
								type={showPassword ? "text" : "password"}
								placeholder='Confirm Password'
								focusBorderColor='#8cc63f'
								py={5}
							/>
							<InputRightElement width='4.5rem'>
								<Button h='full' size='sm' mt={2} onClick={handleClick}>
									{showPassword ? "Hide" : "Show"}
								</Button>
							</InputRightElement>
						</InputGroup>
						{/* 
						<Text my={3} mb={5}>
							Forgot Password?
							<Link className='text-[#3e84b6]'> Reset it</Link>
						</Text> */}

						<button className='rounded-full text-white bg-[#3e84b6] py-2 px-5 font-extrabold flex mx-auto'>
							Sign Up
						</button>
						<button
							onClick={() => setAuthRoute("")}
							className='mx-auto flex text-sm py-1 text-[#3e84b6]'
						>
							Cancel
						</button>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default Register;
