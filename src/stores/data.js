import { defineStore } from 'pinia'
import { ref } from 'vue';
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '@/js/firebase.js'

export const useDataStore = defineStore('data', () => {

  const social = [
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/triben-c-5a066b131",
      styleClass: "fab fa-linkedin"
    },
    {
      id: "github",
      link: "https://github.com/Triben-Choudhary",
      styleClass: "fab fa-github"
    },
    {
      id: "facebook",
      link: "https://www.facebook.com/danieal.tribs",
      styleClass: "fab fa-facebook"
    },
    {
      id: "instagram",
      link: "https://www.instagram.com/triben_tribs/",
      styleClass: "fab fa-instagram"
    }
  ]

  const projects = ref([
    // {
    //   id: 1,
    //   img: "public/img/Screenshot (88).jpg",
    //   title: "Online Attendance Management",
    //   description: ["Helps user to keep a record of students attendance digitally", "Shows whether the student is passed minimum attendance required", "User can directly download XL sheet of students attendance"],
    //   githubLink: "https://github.com/Triben-Choudhary/Online-Attendance-Management",
    //   liveLink: "https://online-attendance-management.herokuapp.com/"
    // },
    // {
    //   id: 2,
    //   img: "public/img/Screenshot (112).jpg",
    //   title: "Assam Travel",
    //   description: ["Front End Development", "Created a website that suggests some good places in Assam for tourists", "Used HTML, CSS, Bootstrap"],
    //   githubLink: "https://github.com/Triben-Choudhary/TravelAssam",
    //   liveLink: "https://admiring-mahavira-560ec3.netlify.app"
    // },
    // {
    //   id: 3,
    //   img: "public/img/Screenshot (115).png",
    //   title: "Quiz Web App",
    //   description: ["Used HTML, CSS, JS", "Created a web app in which users can play quiz", "Score is given at the end of the quiz"],
    //   githubLink: "https://github.com/Triben-Choudhary/QuizApp",
    //   liveLink: "https://sad-nobel-3a54b1.netlify.app"
    // },
    // {
    //   id: 4,
    //   img: "public/img/Screenshot (114).png",
    //   title: "Tic Tac Toe Game",
    //   description: ["Front End Development", "Users can play tic tac toe game", "User can undo moves", "Used ReactJS, Sass"],
    //   githubLink: "https://github.com/Triben-Choudhary/TicTacToe",
    //   liveLink: "https://bit.ly/toetactic"
    // },
    // {
    //   id: 5,
    //   img: "public/img/Screenshot (116).png",
    //   title: "Weather web app",
    //   description: ["Used openweather API to get Weather report", "User can see latest weather", "Used NodeJS, HTML, CSS"],
    //   githubLink: "https://github.com/Triben-Choudhary/Weather-web-app",
    //   liveLink: "https://weatherapp-node-js-tribs.herokuapp.com/"
    // },
    // {
    //   id: 6,
    //   img: "public/img/telebot.jpg",
    //   title: "Trading Telegram bot",
    //   description: ["Used Python to make a telegram bot", "This bot can show the price difference of cryptocurrency between various exchanges", "Gives an alert when the prices vary between exchanges"],
    //   githubLink: "https://github.com/Triben-Choudhary/Trading-Telegram-Bot",
    //   liveLink: "#"
    // }

  ])

  // const resume = "https://drive.google.com/file/d/1_kKAEQUcHBfYsKRTKcei4fgo0Tn1p0uv/view"
  const resume = ref("")

  const isDataLoaded=ref(false)

  const init = async () => {
    const docRef = doc(db, "resumes", "hgR5WUNyZhh55fteUZ66");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      resume.value=docSnap.data().resume
    } else {
      console.log("No such document!");
    }
    isDataLoaded.value=true
    
    const querySnapshot = await getDocs(collection(db, "projects"));
    let project=[]
    querySnapshot.forEach((doc) => {
      project.push({
        id:doc.id,
        img:doc.data().img,
        title:doc.data().title,
        description:doc.data().description,
        githubLink:doc.data().githubLink,
        liveLink:doc.data().liveLink
      })
    });
    projects.value=project

  }

  return { social, projects, resume,init,isDataLoaded }
})
