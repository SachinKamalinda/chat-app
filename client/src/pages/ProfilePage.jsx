import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {

  const { authUser, updateProfile } = useContext(AuthContext)

  const [selectedImg, setSelectedImg] = useState(null)
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")

  const navigate = useNavigate();

  // ✅ Set values when authUser loads
  useEffect(() => {
    if (authUser) {
      setName(authUser.fullName || "")
      setBio(authUser.bio || "")
    }
  }, [authUser])

  // ✅ Handle form submit safely
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // No image selected
      if (!selectedImg) {
        await updateProfile({ fullName: name, bio });
        navigate('/');
        return;
      }

      // Image selected → convert to base64
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64data = reader.result;

        await updateProfile({
          profilePic: base64data,
          fullName: name,
          bio
        });

        navigate('/');
      };

      reader.readAsDataURL(selectedImg);

    } catch (error) {
      console.error(error);
    }
  }

  // ✅ Prevent crash while loading
  if (!authUser) {
    return <div className="text-white text-center mt-10">Loading...</div>
  }

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
          
          <h3 className='text-lg'>Profile Information</h3>

          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id='avatar'
              accept='.png, .jpg, .jpeg'
              hidden
            />

            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : authUser.profilePic || assets.avatar_icon
              }
              alt=""
              className='w-12 h-12 rounded-full'
            />

            upload profile picture
          </label>

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
            placeholder='your name'
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
          />

          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder='Write profile bio'
            required
            rows={4}
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
          ></textarea>

          <button
            type="submit"
            className='bg-gradient-to-r from-purple-400 to-violet-500 text-white p-2 rounded-full text-lg cursor-pointer'
          >
            Save
          </button>

        </form>

        <img
          className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10'
          src={selectedImg
            ? URL.createObjectURL(selectedImg)
            : authUser.profilePic || assets.logo_icon}
          alt=""
        />

      </div>
    </div>
  )
}

export default ProfilePage