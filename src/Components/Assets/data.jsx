import lady from '../Assets/laddy1.jpg'
import lady2 from '../Assets/ladyy.jpg'
import { FaCentos } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";

export const navlinks = [
    { id:1 , title : 'Home', link: '#home'},
    { id:1 , title : 'About', link: '#about'},
    { id:1 , title : 'Service', link: '#service'},
    { id:1 , title : 'Blog', link: '#blog'}
]
export const about = [
    {
        number : '01.',
        head : 'Digital Marketing',
        text : 'Drive traffics, leads and conversion with our tailored strategies'
    },
    {
        number : '02.',
        head : 'Email Marketing',
        text : 'Nurture leads and foster customers relationships through personalized campaigns',
    },
    {
        number : '03.',
        head : 'SEO Optimization',
        text : 'Increase your search visibility and rank heigher on search engines'
    },
    {
        number : '04.',
        head : 'Social Media Management',
        text : 'Build a strong online presence and engage your audience',
    }
];

export const services = [
    {
        icon: <FaCentos />,
        head : 'Service 1',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Service 2',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Service 3',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Service 4',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Service 5',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Service 6',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
];

export const more = [
    {
        head : 'Business Has Only Two Function - Marketing And Innovation',
        desc : 'Type a very reassuring and encouraging text to keep clients elated and expect the best from you Type a very reassuring and encouraging text to keep clients elated and expect the best from you Type a very reassuring and encouraging text to keep clients elated and expect the best from you',
    }
];

export const feedback =[
    {
      image: lady,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady2,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
  
  ]