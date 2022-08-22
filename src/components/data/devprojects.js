import { v4 as uuidv4 } from 'uuid';


const projects = [

    {
        id: uuidv4(),
        name: 'Calculator',
        desc:
        'Developing a design for a job application app',
        img: require('../../images/calculator.png'),
        vid: null,
        link: null,
        status:false,
        type: 'mobile',
        stacks:[
          {react:'true'},
          {javascript:true}, 
        ],
      },
      {
        id: uuidv4(),
        name: 'Foodly',
        desc:
        'Developing a design for a job application app',
        img: require('../../images/foodly.png'),
        vid: null,
        link: 'https://www.behance.net/gallery/137354333/JobEye-UI-UX-Design',
        status:true,
        type: 'mobile',
        stacks:[
          {react:'true'},
          {javascript:true}, 
        ],
       
      },
    {
        id: uuidv4(),
        name: 'Comp',
        desc:
        'Developing a design for a job application app',
        img: null,
        vid: require('../../videos/newtest.mp4'),
        link: 'https://www.behance.net/gallery/137354333/JobEye-UI-UX-Design',
        status:true,
        type: 'web',
        stacks:[
          {react:'true'},
          {javascript:true}, 
        ],
      },
    {
        id: uuidv4(),
        name: 'Comp',
        desc:
        'Developing a design for a job application app',
        img: null,
        vid: require('../../videos/newtest.mp4'),
        link: 'https://www.behance.net/gallery/137354333/JobEye-UI-UX-Design',
        status:true,
        type: 'web',
        stacks:[
          {react:'true'},
          {javascript:true}, 
        ],
      },
]


export default projects;