import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';

export default function Projects() {
  return (
    <section id='projects' className=' scroll-mt-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((projectData, index) => (
          <React.Fragment key={index}>
            <Project {...projectData} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
