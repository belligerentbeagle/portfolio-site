// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Working Experience with GovTech',
		publishDate: '1 Jul, 2023',
		tags: 'AI, Security, FrontEnd, Django, Python',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://www.tech.gov.sg/',
			},
			{
				id: 4,
				title: 'Phone',
				details: 'NIL',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'noth',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					"AI", 
					"Security", 
					"FrontEnd", 
					"Django", 
					"Python"
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"A great deal of learning. I encountered the best boss in my life, so good that now I'm depressed in every other job. Just kidding. But find someone who has a seat at the table, yet so involved in your growth, patient and understanding, treats you as an equal, talk and discuss the future over lunch. I've never felt more accepted and comfortable at my workplace. Over at this internship, I did many many things. In that short 2 months, on my plate I've done:",
			},
			{
				id: 2,
				details:
					'Built an AI Automated Email Chatbot (Phishing for White Hat purposes) with recurrent neural net (RNN) Social Engineering, DeepFake, Hardware Hacking, Physical Hacking: e.g. Lock picking, RFID card cloning, General Penetration Testing Techniques - DVWA Hacking ',
			},
			{
				id: 3,
				details:
					'',
			},
			{
				id: 4,
				details:
					'',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
