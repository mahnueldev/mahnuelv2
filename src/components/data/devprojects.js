import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    id: uuidv4(),
    name: 'Calculator',
    desc: 'A custom calculator app with light and dark mode properties and vast functions',
    img: require('../../images/calculator.png'),
    vid: null,
    link: null,
    github: null,
    status: false,
    type: 'mobile',
    stacks: ['css', 'react-native'],
  },
  {
    id: uuidv4(),
    name: 'Foodly',
    desc: 'Foodly helps query informaton of food products on scan of its bacode and also add food information to database. ',
    img: require('../../images/foodly.png'),
    vid: null,
    link: 'https://mega.nz/file/kpl3kAjK#euAaKOFyyC2JIjPoRWcFEA0oyTQu4UP6c9d9u0nIdL8',
    github: 'https://github.com/mahnueldev/foodly',
    status: true,
    type: 'mobile',
    stacks: ['css', 'react-native', 'firebase'],
  },
  {
    id: uuidv4(),
    name: 'Mahnuel v1',
    desc: 'Portfolio site version 1',
    img: require('../../images/mahnuelv1.png'),
    vid: null,
    link: null,
    github: 'https://github.com/mahnueldev/mahnueldev',
    status: false,
    type: 'web',
    stacks: ['css', 'react' ],
  },
  {
    id: uuidv4(),
    name: 'Comp',
    desc: 'Developing a design for a job application app',
    img: null,
    vid: require('../../videos/fitnesstrack.mp4'),
    link: 'https://www.behance.net/gallery/137354333/JobEye-UI-UX-Design',
    github: null,
    status: true,
    type: 'web',
    stacks: ['html', 'css', 'javascript', 'react', 'react-native'],
  },
];

export default projects;
