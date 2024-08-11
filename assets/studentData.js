// var {Deta}=require('deta')

const studentData = [
    {
        id:1,
        name: "Akshay",
        rollno: "20BCS059",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs059@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:2,
        name: "Shyam",
        rollno: "19BCS070",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs070@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:3,
        name: "Arjun",
        rollno: "19BCS085",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs085@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:4,
        name: "Ashutosh",
        rollno: "20BCS069",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs069@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:5,
        name: "Lekhit",
        rollno: "21BCS064",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs064@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:6,
        name: "Akshay",
        rollno: "21BCS059",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs059@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:7,
        name: "Shyam",
        rollno: "21BCS070",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs070@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:8,
        name: "Arjun",
        rollno: "21BCS085",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs085@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:9,
        name: "Ashutosh",
        rollno: "22BCS069",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs069@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:10,
        name: "Lekhit",
        rollno: "22BCS064",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs064@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:11,
        name: "Akshay",
        rollno: "22BCS059",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs059@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:12,
        name: "Shyam",
        rollno: "20BCS070",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs070@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:13,
        name: "Arjun",
        rollno: "20BCS085",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs085@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:14,
        name: "Ashutosh",
        rollno: "20BCS069",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs069@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:15,
        name: "Lekhit",
        rollno: "20BCS064",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs064@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:16,
        name: "Akshay",
        rollno: "20BCS059",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs059@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:17,
        name: "Shyam",
        rollno: "20BCS070",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs070@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:18,
        name: "Arjun",
        rollno: "20BCS085",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs085@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:19,
        name: "Ashutosh",
        rollno: "20BCS069",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs069@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    },
    {
        id:20,
        name: "Lekhit",
        rollno: "20BCS064",
        skills: ["HTML", "ReactJS", "NextJS"],
        email:'20bcs064@nith.ac.in',
        phone: "+91-79-7152 4947",
        website: "www.google.com",
        address: "Vill- Gulabpura, PO- Panjehra, Teh- Nalagarh, Distt- Solan (HP) - 174101",
        education: ["Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996", "PGDM, (MBA with concentration in Marketing & Finance), Indian Institute of Management, Ahmedabad, India, 1987-1989", "Bachelor of Technology , Chemical Engg, Indian Institute of Technology, Kanpur, India, 1982-1986"],
        about: "Ph.D, Marketing Strategy & International Business, The University of Texas at Austin , 1992 -1996 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa earum aspernatur numquam ex alias hic magni exercitationem, unde sit enim facere distinctio eius aperiam molestiae autem eos a ab qui voluptatem!"
    }
]

export default studentData;
// const deta=Deta('c0acnnytluh_9eqZMHHkWEk2f92Mquy8CA9FdWverDq7')
// const db=deta.Base('users')
// const rs=db.putMany(studentData);
// console.log(rs)

