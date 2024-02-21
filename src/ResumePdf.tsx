import { Chip, Stack } from "@mui/material";
import React from "react";

export interface ResumeProps {
  name: string;
  title: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  summary: string;
  experiences: {
    company: string;
    location: string;
    positions: {
      title: string;
      dates: string;
      responsibilities: string[];
    }[];
  }[];
  education: {
    school: string;
    location: string;
    degree: string;
    graduationDate: string;
    awards: string[];
  }[];
  skills: string[];
  certificate: string[];
}

const ResumePdf: React.FC<ResumeProps> = ({
  name,
  title,
  contactInfo,
  summary,
  experiences,
  education,
  skills,
  certificate,
}: ResumeProps) => {
  return (
    <div className="resume w-1/2 p-2 px-10 text-justify border-t-orange-600 border-t-[2rem] m-10 shadow-md pb-8 absolute ">
      <header className="resume-header p-5 border-b-2">
        <h1 className="text-center text-3xl">{name}</h1>
        <h2 className="text-center">{title}</h2>
        <ul className="contact-info flex gap-5 justify-center">
          <li>{contactInfo.address}</li> |<li>{contactInfo.phone}</li> |
          <li>{contactInfo.email}</li>
        </ul>
      </header>
      <section className="summary pt-6">
        <h2 className="text-2xl underline pb-5">Summary</h2>
        <p>{summary}</p>
      </section>
      <section className="experience">
        <h2 className="text-2xl underline py-5">Experience</h2>
        {experiences.map((experience) =>
          experience.positions.map((position) => (
            <div key={position.title} className="position">
              <h3 className="text-xl pb-1">{position.title}</h3>
              <p>{position.dates}</p>
              <ul className="list-disc">
                {position.responsibilities.map((responsibility) => (
                  <li className="py-1" key={responsibility}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </section>
      <section className="education">
        <h2 className="text-2xl underline py-5">Education</h2>
        {education.map((education) => (
          <div className="education-item" key={education.degree}>
            <h3>{education.degree}</h3>
            <h4>
              {education.school}, {education.location}
            </h4>
            <p>{education.graduationDate}</p>
            {education.awards.length > 0 && (
              <>
                <h2 className="text-2xl py-3 underline">Awards</h2>
                <ul className="">
                  {education.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </section>

      <section className="skills">
        <h2 className="text-2xl underline py-5">Skills</h2>
        <Stack direction="row" spacing={2}>
          {skills.map((skill) => {
            return <Chip label={skill} key={skill} />;
          })}
        </Stack>
      </section>

      <section className="certificate">
        <h2 className="text-2xl underline py-5">Certificate</h2>
        <ul className="list-disc">
          {certificate.map((certificate) => (
            <li key={certificate}>{certificate}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResumePdf;
