import React, {useEffect, useState} from 'react';
import {Image} from 'react-bootstrap';
import axios from 'axios';

async function getAvatar(setAvatarImg){
    const response = await axios({
        url: 'http://localhost:8080/profile/avatar',
        method: 'get',
        responseType: 'blob',
        withCredentials: true,
    })
    if(response.status === 200) {
        console.log(response.data);
        setAvatarImg(URL.createObjectURL(response.data));
    }
}

const Avatar = () => {
    const [avatarImg, setAvatarImg] = useState(null);
    const [avatarSrc, setAvatarSrc] = useState(null);

    useEffect(() => {
        getAvatar(setAvatarImg);
    }, []);

    const handleAvatarChange = (event) => {
        setAvatarSrc(event.target.files[0]);
        setAvatarImg(URL.createObjectURL(event.target.files[0]));
    };

    const uploadAvatarHandler = async (e) => {
        e.preventDefault();

        if (!avatarSrc) {
            return;
        }

        const formData = new FormData();
        formData.append('avatar', avatarSrc);

        try {
            const response = await axios.post('http://localhost:8080/profile/upload_avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
            console.log(response);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="">
            <div className="mb-3">
                {avatarImg ? (
                    <div className="rounded-circle"
                         style={{width: '150px', height: '150px', backgroundColor: '#eeeeee'}}>
                        <Image src={avatarImg} roundedCircle width="150" height="150"/>
                    </div>
                ) : (
                    <div className="rounded-circle"
                         style={{width: '150px', height: '150px', backgroundColor: '#eeeeee'}}>
                        <i className="fas fa-user" style={{fontSize: '5rem', lineHeight: '150px'}}></i>
                    </div>
                )}
            </div>
            <div>
                <input
                    type="file"
                    onChange={handleAvatarChange}
                    id="upload-button"
                    style={{display: 'none'}}
                    accept="image/*"
                />
                {avatarImg ? (
                    <label className="btn btn-primary" onClick={uploadAvatarHandler}>
                        Upload Photo
                    </label>

                ) : (
                    <label className="btn btn-primary" htmlFor="upload-button">
                        Upload Photo
                    </label>
                )}

            </div>
        </div>
    );
};

export default Avatar;