'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.4);
  return (
    <section ref={ref} id='projects' className=' scroll-mt-28'>
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
