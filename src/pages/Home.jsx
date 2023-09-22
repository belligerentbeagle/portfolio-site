import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<AboutMeProvider>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					className="container mx-auto"
				>
					<AboutClients />
				</motion.div>
			</AboutMeProvider>
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>


			<div className="mt-8 sm:mt-10 flex justify-center">
				{/* eslint-disable-next-line react/style-prop-object*/}
				<iframe title="spotify-playlist"  src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZdLqpoFOt65?utm_source=generator" width="100%" height="532" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
			</div>

		</div>
	);
};

export default Home;
