import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const Blog = () => {
	return (
		<AboutMeProvider>
            
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<h1>Working Experience with GovTech</h1>
                <div> </div>
                <h3>
                    A great deal of learning. I encountered the best boss in my life, so good that now I'm depressed in every other job. Just kidding. But find someone who has a seat at the table, yet so involved in your growth, patient and understanding, treats you as an equal, talk and discuss the future over lunch. I've never felt more accepted and comfortable at my workplace. 
                    Over at this internship, I did many many things. In that short 2 months, on my plate I've done:
                    Built an AI Automated Email Chatbot (Phishing for White Hat purposes) with recurrent neural net (RNN)
                    Social Engineering
                    DeepFake
                    Hardware Hacking
                    Physical Hacking: e.g. Lock picking, RFID card cloning
                    General Penetration Testing Techniques - DVWA Hacking 
                </h3>
                <a href="testimoniallink.pdf"> Testimonial Link </a>

			</motion.div>

			{/** Counter without paddings */}
			

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</AboutMeProvider>
	);
};

export default Blog;
