import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom'

import { AiOutlineHome } from "react-icons/ai";

import './ProjectPage.css'
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'

function ProjectPage() {

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
    })

   

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | Projects</title>
            </Helmet>
            <div className="projectPage-header" style={{backgroundColor:theme.primary}}>
                <Link to="/" style={{
    "--secondary-color": theme.secondary,
    "--tertiary-color": theme.tertiary,
  }}>
                        <AiOutlineHome  className="icon-home"/>
                </Link>
                <h1 style={{color: theme.secondary}}>Projects</h1>
            </div>
           <div className="projectPage-container">
             
               <div className="project-container">
                   <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.map(project => (
                            <SingleProject
                                theme={theme}
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image} 
                            />
                        ))}
                   </Grid>
               </div>
           </div>    
        </div>
    )
}

export default ProjectPage
