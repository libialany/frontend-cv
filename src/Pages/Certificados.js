import axiosClient from '../config/axios';//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Certificado from './Certificado';
import uuid from 'react-uuid'
function Certificados() {
  const [certificados, setCertificados] = useState([])
  useEffect(() => {
    (async () => {
      const res = await axiosClient.get('/certificate')
      setCertificados(res.data);
    })()
  }, []);

  return (

    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {certificados?.length?certificados.map((certificado) =>
        <Certificado certificado={certificado} key={uuid()} />
      ):<p>No certificados</p>
      }
    </div>
  )
}

export default Certificados
