import Project from './Project'
import React, { useEffect, useState } from 'react'
import axiosClient from '../config/axios';//import axios from 'axios';
import uuid from 'react-uuid'

function Home() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    (async () => {
      const res = await axiosClient.get('/project')
      setProjects(res.data);
    })()
  }, []);

  return (
    <div className="row">
      {projects?.length? <ul>
        {projects.map((project) =>
          <Project project={project} key={uuid()} />
        )}</ul> : <p>Not Projects</p>}
    </div>


  )
}

export default Home
