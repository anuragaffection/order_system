import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { BiSolidUserCircle, BiLogOut } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { modifyAuth } from '../redux/slices/authSlice.js'


const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [adminInfo, setAdminInfo] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const api = await axios.get(`http://localhost:3000/admin/profile`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            console.log(api.data.admin);
            setAdminInfo(api.data.admin)
        }
        fetchUser();
    }, [])


    const logout = async () => {
        const api = await axios.get('http://localhost:3000/admin/logout', {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        toast.success(api.data.message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        dispatch(modifyAuth(false))

        setTimeout(() => {
            navigate('/');
        }, 1500);
    }


    const container = `bg-gray-900 flex flex-col justify-center items-center`;
    const wrapper = `flex flex-col gap-3 text-yellow-400 font-semibold m-4`;
    const iconsStyle = `flex flex-row justify-start items-center gap-2 `;
    const logoutStyle = `bg-gray-950 text-lime-600 text-lg font-semibold flex justify-center items-center  cursor-pointer hover:text-lime-400 p-2 rounded-md`;

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className={container}>
                <div className={wrapper}>
                    {
                        adminInfo &&
                        <>
                            <div className={iconsStyle}> <BiSolidUserCircle /> {" "} {adminInfo.name}</div>
                            <div className={iconsStyle}> <MdEmail /> {" "} {adminInfo.email}</div>
                        </>
                    }
                    <div className={logoutStyle} onClick={logout}> <BiLogOut /> Logout </div>
                </div>
                

                <div>
                    <div>Admin All Products</div>
                    <div>Launch New Products </div>
                </div>

            </div >
        </>
    )
}

export default Profile