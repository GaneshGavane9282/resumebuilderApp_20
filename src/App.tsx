import "./App.css";
import ResumePdf from "./ResumePdf";
import { ResumeProps } from "./ResumePdf";

const Resume: ResumeProps = {
  name: "Ganesh Gavane",
  title: "Associate Software Engineer",
  contactInfo: {
    address: "Bangalore",
    phone: "8080726716",
    email: "imganeshgavane@gmail.com",
  },
  summary:
    "Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",

  experiences: [
    {
      company: "Tata Consultancy Services (TCS)",
      location: "Pune",
      positions: [
        {
          title: "Developer",
          dates: "May 2021 - August 2021",
          responsibilities: [
            "Worked on a project to develop an AI-based chatbot for customer service.",
            "Developed and maintained the codebase using Java, Spring Boot, Hibernate.",
          ],
        },
      ],
    },
  ],
  education: [{
    school: "SGU",
    location: "Kolhapur",
    degree: "Master of Science in Computer Science & Engineering",
    graduationDate: "May 2021 - August 2021",
    awards: ["First Price in Quiz", "University Topper in SGU"],
  }],
  skills: ["Java", "C++", "C#", "Hibernate", "sql"],
  certificate: [
    "Certified Programmer in C++",
    "Oracle Certified Associate DBA",
  ],
};

function App() {
  return (
    <>
      <ResumePdf {...Resume} />
    </>
  );
}

export default App;
