import React, {Component, useEffect} from 'react';
import FileBase from 'react-file-base64';
import '../styling/InputForm.css';
import firebase from "../Firebase"
import axios from 'axios';

const InputForm = () => {

    const [picture, setPicture] = React.useState("");
    const [pictureSubmitted, setPictureSubmitted] = React.useState(false);
    const storage = firebase.storage();


    const handleFileUpload = async (e) => {
        setPictureSubmitted(true);
        const image = e.target.files[0];
        console.log("image is " + image.name);
        if (image.name != undefined) {
            console.log(storage);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on( 
                "state_changed",
                snapshot => {
                  // progress function ...
                  const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  );
                  //this.setState({ progress });
                },
                error => {
                  // Error function ...
                  console.log(error);
                },
                () => {
                  // complete function ...
                  storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                      setPicture({ url });
                    });
                }
              );
        }
        console.log(picture);
        
        try {
            console.log("test results ");
            const test = await axios.post("http://localhost:5000/machine_learning", {'url': picture});
            console.log(test);
        } catch (error) {
            console.log(error.message);
            console.log("in error")
        }
    }

    

    return (
        <div className="UploadSection">
            <form action="#">
                <div className="InputWrapper">
                    <label className="UploadNewPhotoButton" for="photo-upload"> Upload Homework 
                        <input className="FileChooser" type='file' id='photo-upload' onChange={handleFileUpload} accept='image/*' />
                    </label>
                    <div>
                        
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => console.log(base64)} />
                    </div>

                    {/* {pictureSubmitted && <button className="ConfirmSubmit" onClick={confirmPhotoUpload}>Submit</button>} */}
                </div>
            </form>
        </div>
     ); 
}

export default InputForm;