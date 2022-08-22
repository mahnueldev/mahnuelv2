import { v4 as uuidv4 } from 'uuid';


const projects = [

    {
        id: uuidv4(),
        name: 'Calender heybjsvsv',
        desc:
        'Developing a design for a job application app',
        img: require('../../images/calenderui.jpg'),
        vid: null,
        link: 'https://www.behance.net/gallery/137354333/JobEye-UI-UX-Design',
        status: false,
        stacks:[
          {figma:true},
          {xd:false}, 
          {ae:true}, 
          {ai:false}, 
          {ps:false}, 
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
        stacks:[
          {figma:true},
          {xd:false}, 
          {ae:true}, 
          {ai:false}, 
          {ps:false}, 
        ],
       
      },
    {
        id: uuidv4(),
        name: 'JobEye',
        desc:
        'Developing a design for a job application app',
        img: require('../../images/jobeyetn.png'),
        vid: null,
        link: 'https://www.behance.net/gallery/137354333/JobEye-UI-UX-Design',
        status:true,
        stacks:[
          {figma:true},
          {xd:false}, 
          {ae:true}, 
          {ai:false}, 
          {ps:false}, 
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
        stacks:[
          {figma:true},
          {xd:false}, 
          {ae:true}, 
          {ai:false}, 
          {ps:false}, 
        ],
      },
]


export default projects;