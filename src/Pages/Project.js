import React from 'react'

function Project({ project }) {
  return (
    <div>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon"> <i className="bx bxl-mailchimp"></i> </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">{project.projectTechUsed}</h6> <span ><a href={project.projectDownloadLink} >project DownloadLink</a></span>
                  </div>
                </div>
                {/* <div className="badge"> <span>Design</span> </div> */}
              </div>
              <div className="mt-5">
                <h3 className="heading">{project.projectName}<br />{project.projectDescription}</h3>
                <div className="mt-5">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ "width": "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="mt-3"> <span className="text1">Applied Knowledge<span className="text2"> 100 capacity</span></span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
