import React, { useEffect, useState } from 'react'
import Project from './Project';
import uuid from 'react-uuid';
import axiosClient from '../config/axios';//;import axios from 'axios';
function Projects({ type }) {

  const [projects, setProjects] = useState([])
  useEffect(() => {
    (async () => {
      const res = await axiosClient.get(`/project/getAllProjectCategory/${type}`)
      setProjects(res.data);
    })()
  }, []);
  //gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
  return (
    <div className="row">
      {
        projects?.length ? projects.map((project) =>
          <Project project={project} key={uuid()} />
        ) : <p>No Proyectos</p>
      }
    </div>
  )
}

export default Projects
