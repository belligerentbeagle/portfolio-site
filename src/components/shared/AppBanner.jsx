import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import ProfilePic from '../../images/Head_Product_EthanWei.jpeg';
import DarkPic from '../../images/darkEthanWei.png';
import { motion } from 'framer-motion';
import TestComponent from './testComponent';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();
	const imageSrc = activeTheme === 'dark' ? ProfilePic : DarkPic;
	// Append a unique query string to the image URL
	const imageUrl = `${imageSrc}?${new Date().getTime()}`;


	return (
		<div>
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			
			<div className="w-full md:w-1/3 text-left m-9">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 2.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hi, I am Ethan
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
					>
					CS + Psych, loves football, loves piano, loves dogs, loves reading, and loves your mom.
					<br></br>
					<br></br>
					I am a &nbsp;<TestComponent></TestComponent>
					
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="Resume 2023 Ethan Wei.pdf"
						href="/files/Resume 2023 Ethan Wei.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume">
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Snag my CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 m-8" 
			>
				{/* <img
					src={
						`${activeTheme === 'dark' ? ProfilePic : DarkPic}?${new Date().getTime()}` // add query string to force refresh
					}
					alt="Developer"
					
				/> */}
				<img
				src={imageUrl}
				alt="Developer"
				key={activeTheme}
				/>
			</motion.div>
		</motion.section>
		</div>
	);
};

export default AppBanner;
