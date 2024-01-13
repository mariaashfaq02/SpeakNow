import React from 'react'
import { useState } from 'react'
import {MdCloudUpload,MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import ReactPlayer from 'react-player'
import './Uploader.css'

const Uploader = () => {

    const [video,setVideo]=useState(null);
    const [fileName,setFileName]=useState("No selected file");
  return (
    <div className='container-fluid uploaderContainer'>
        <main className='container-fluid containerMain'>
            <div className="container-fluid UploaderFormContainer">
            <form className='container-fluid UploaderForm' onClick={()=>document.querySelector(".input-field").click()}
            >
                <input 
                  type="file"  
                  className='input-field' 
                  hidden 
                  onChange={({target:{files}})=>{
                    files[0]&&setFileName(files[0].name)
                    if(files){
                        setVideo(URL.createObjectURL(files[0]))
                    }
                  }
                }/>
                {video ?
                <ReactPlayer
                  url={video}
                  playing={true}
                  volume={0.5}
                  controls={true}
                />
                :
                <>
                <MdCloudUpload color='#a772ea' size={100}/>
                <p className='lead iconText'>Browse Files to Upload</p>
                </>
                }
            </form>
            </div>
            
            <div className="container-fluid uploaded-rowContainer">
            <div className='uploaded-row'> 
                <AiFillFileImage color='#a772ea'/>
                <span className='upload-content'>
                    {fileName}
                    <MdDelete 
                       onClick={()=>{setFileName("No selected file");
                       setVideo(null)
                    }}
                    color='#a772ea'/>
                </span>
            </div>
            </div>



        </main>
    </div>

  )
}

export default Uploader
