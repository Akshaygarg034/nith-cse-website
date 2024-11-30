# NITH CSE WEBSITE

Welcome to the NITH CSE Website, a dynamic platform built with Next.js to represent the Computer Science and Engineering Department of NIT Hamirpur. This website offers detailed insights into the department's academics, faculty, students, and events, while also providing students with personalized, editable portfolios. The website is designed with modern UI frameworks and optimized for seamless performance and user experience.

![Website Screenshot](https://res.cloudinary.com/dz1vsgxm5/image/upload/Portfolio/ovhdvxa9hqx7tl0ray5p)

## Live Demo

You can view the live version of this websiteni at [https://nith-cse.vercel.app](https://nith-cse.vercel.app)

## Sections 
✔️ **Home** : Introduction to the CSE department with an overview of the website and upcoming events. \
✔️ **About** : Brief history of the department, its mission, and focus on education and research in Computer Science & Engineering.\
✔️ **Faculty** : Profiles of faculty members with their designations, areas of interest, and contributions to research and education.\
✔️ **Students** : Displays student profiles, including CGPI, ranks, social media links, and portfolios.\
✔️ **More Details** : Additional information such as research publications, contact details, and other departmental resources.

## Features

### Modern UI & Good Lighthouse Scores

- The website features a modern, visually appealing UI with a responsive design, ensuring an excellent user experience across all devices and screen sizes.
- Achieved impressive Lighthouse scores of over 90 in all categories, including performance, accessibility, best practices, and SEO, ensuring high-quality, optimized web performance.

  ![Lighthouse Screenshot](https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/oyq1h14jtvbevcb8eizv)
  
### Departmental Details & Events

- Displays the department's vision, mission, and curriculum.
- Lists upcoming events like seminars and workshops.
- Upcoming Event details are updated daily via web scraping.

  ![Upcoming Events Screenshot](https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/hyraqy99eiyd6ew4rggn)

### Faculty Information

- Showcases detailed profiles of all CSE department faculty, including their designations, areas of interest, and portfolios.
- Faculty information is updated annually through automated web scraping to ensure accuracy and relevance.
 
  ![Faculty Screenshot](https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/esgd5x0kazsjcag8fuiv)


### Students Information

- Displays detailed profiles of all CSE department students, including their CGPI, ranks, social media links, and portfolios.
- Student information is updated annually through automated web scraping to maintain accuracy and relevance.
 
  ![Students Screenshot](https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/tzxegp7tv6loy1cgxfgp)

- Features dedicated student portfolios that showcase essential academic and personal details. 
  
  ![Students portfolio Screenshot](https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/dkizxq9qerhjk941pa18)
  
- Only logged-in students can edit their own portfolio details using a simple form. Students cannot edit other students' information. Any changes made are instantly updated on the live website.

  ![Student Form Screenshot](https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/fzv4xwmsos49quu141zo)


### Student Login Feature

- The website employs secure authentication through NextAuth, allowing only NITH students to log in. Students are required to use their NITH domain email addresses to login and update their portfolios.


## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Akshaygarg034/nith-cse-website.git
   ```

2. Navigate to the project directory:

    ```bash
    cd nith-cse-website
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the Development Server:

    ```bash
    npm run dev
    ```

5. Open your web browser and visit <http://localhost:3000/> to view the project locally.
   
6. **Web Scraping**: The code for Web scraping is located in `/scrape` folder. It is used for updating data in MongoDB. To run this Scraping code:
   
- Navigate to the scrape folder:
  
   ```bash
   cd scrape
   ```

- Install required dependencies:
   ```bash
   npm install
   ```

- Run Scraping server
  ```bash
   npm start
   ```
- The server will start running at <http://localhost:5000/>

## Technologies Used

- **Frontend**: Next.js, TypeScript, Material-UI, Ant Design, CSS.

- **Backend**: ExpressJS, MongoDB, Cloudinary API.

- **Web Scraping**: Puppeteer, Node.js, Cron

- **Authentication**: Next Auth

- **Animations**: React Reveal

## Contact

If you have any questions, feedback, or would like to get in touch with me, feel free to reach out to me:
- **Email**: [gargakshay034@gmail.com](gargakshay034@gmail.com)
- **Linkedin**: [https://www.linkedin.com/in/akshay-garg-360281213](https://www.linkedin.com/in/akshay-garg-360281213/)


## License

This project is licensed under the MIT License. See the LICENSE file for details.
