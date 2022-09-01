import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    id: uuidv4(),
    name: 'Arthub',
    desc: 'Platform for creatives to showcase & market their creations',
    img: require('../../images/arthub.png'),
    vid: null,
    link: 'https://www.behance.net/gallery/142078703/Arthub-UX-Case-study',
    status: true,
    stacks: ['illustrator', 'xd', 'aftereffects'],
  },
  {
    id: uuidv4(),
    name: 'Soundcore',
    desc: 'A Soundcore web concept market place',
    img: null,
    vid: require('../../videos/soundcore.mp4'),
    link: 'https://www.behance.net/gallery/141105775/Soundcore-concept-web-design',
    status: true,
    stacks: ['photoshop', 'xd'],
  },
  {
    id: uuidv4(),
    name: 'Fitness Tracker',
    desc: 'An app to track outdoor fitness activities like running, cycling..',
    img: null,
    vid: require('../../videos/fitnesstrack.mp4'),
    link: null,
    status: false,
    stacks: ['illustrator', 'aftereffects'],
  },
  {
    id: uuidv4(),
    name: 'Workit',
    desc: 'Management tool used to track & manage work productivity',
    img: require('../../images/workit.png'),
    vid: null,
    link: 'https://www.behance.net/gallery/139973411/Workit-Branding-and-UI-Design',
    status: true,
    stacks: ['photoshop', 'illustrator', 'xd', 'aftereffects'],
  },
  {
    id: uuidv4(),
    name: 'JobEye',
    desc: 'A platform for connecting job seekers to employers',
    img: require('../../images/jobeyetn.png'),
    vid: null,
    link: 'https://www.behance.net/gallery/137354333/JobEye-UI-UX-Design',
    status: true,
    stacks: ['xd', 'aftereffects'],
  },
];

export default projects;
