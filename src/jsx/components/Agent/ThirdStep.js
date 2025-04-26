import React from 'react';
import { Uploader } from 'rsuite';

const ThirdStep = () => {
    return (
        <>
            <div className="dropzone-main dropzone-admin">
                <label className="form-label required">Media</label>                
                    <Uploader className="dropzone"  action="//jsonplaceholder.typicode.com/posts/" draggable>
                        <div className="dz-message needsclick"><i className="fas fa-cloud-upload-alt"></i>
                            <h6>Drop files here or click to upload.</h6>
                        </div>
                    </Uploader>
                
            </div>            
        </>
    );
};

export default ThirdStep;