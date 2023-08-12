import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image }) => {
	return (
		<motion.div
			whileHover={{scale: 1.1 }}
			initial={{ opacity: 0 }}
			animate={{opacity: 1, delay: 0 }}
			drag
			whiledrag={{scale: 1.5}}
			transition={{
				ease: 'easeInOut',
				duration: 0.2,
				delay: 0.00,
			}}
		>
			<Link to="/projects/single-project" aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
