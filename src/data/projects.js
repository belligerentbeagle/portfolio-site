// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import JDIpic from '../images/jdiAI.png';

export const projectsData = [
	{
		id: 1,
		title: 'Internal AI tool for JDI', //why need repeat twice?
		category: 'Web Application',
		img: JDIpic,
		ProjectHeader: {
			title: 'Internal AI tool for JDI',
			publishDate: 'November 18, 2023',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'Military Duty Scheduler',
		category: 'Web Application',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Forex Trading',
		category: 'Finance',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'GovTech Internship',
		category: 'Web Application',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'FinTech Month Hacakthon 2023',
		category: 'Web Application',
		img: WebImage1,
	},
	{
		id: 7,
		title: 'Walkers On Wheels NGO',
		category: 'Welfare',
		img: WebImage1,
	},
	{
		id: 8,
		title: 'Surf | ChatGPT for Smart Contracts', //why need repeat twice?
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'Surf | ChatGPT for Smart Contracts',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	}
];
