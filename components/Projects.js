
import React from 'react';
import crudImg from '../public/projects/crud.png'
import mystoreImg from '../public/projects/mystore.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title=' User management crud application'
            backgroundImg={crudImg}
            tech='React JS'
          />
          <ProjectItem
            title='E-commerce-website'
            backgroundImg={mystoreImg}
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
