import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import API_URLS from '../api/constants'
import { useAuth } from '../hooks/useAuth'
import { IoMdNotifications } from "react-icons/io";
import { formatAPIDate } from '../utils/Dates';
import ReactTimeago from 'react-timeago';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const NotifyBadge = () => {
    const [notifyCount, setNotifyCount] = useState(0)
    const [notifyData, setNotifyData] = useState([])
    const [openNotifyBar,setOpenNotifyBar]=useState(false) 
    const { user } = useAuth()

    const getNotifications = () => {
        axios.get(API_URLS.notificationSummary, {
            headers: {
                'Authorization': `Bearer ${user?.token?.access}`
            }
        }).then(resp => {
            const data = resp.data
            setNotifyCount(data?.unread_notifications)
            setNotifyData(data?.latest_notifications)
        })
    }

    useEffect(() => {
        const timer = setInterval(getNotifications, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleDropdownClick = () => {
        // Handle click to show dropdown or perform other actions
        setOpenNotifyBar(!openNotifyBar)
        if (!openNotifyBar){
            axios.post(API_URLS.notificationMarkAll,{},{
                headers:{
                    'Authorization': `Bearer ${user?.token?.access}`
                }
            }).then(resp=>{
                //
            })
        }
    };


    return (
        <div className="relative cursor-pointer text-gray-600">
            <div onClick={handleDropdownClick}>
                <IoMdNotifications className='text-4xl' />
                {notifyCount > 0 && (
                    <span className="absolute top-0 right-0 inline-block bg-red-500 text-white rounded-full px-1 py-0 text-xs">{notifyCount}</span>
                )}
            </div>
            {/* Dropdown content */}
            {openNotifyBar && (
                <div className="absolute right-0 mt-2 z-50 w-64 max-h-64 shadow-xl bg-white border border-gray-200 rounded px-2 pb-3  overflow-auto">
                    <div className='py-2 bg-white w-full sticky top-0'>
                    <h3 className="text-lg font-bold ">Notifications</h3>
                    </div>
                    {notifyData.map(notification => (
                        <div key={notification.id} className={`mb-2 p-2 rounded ${notification.is_read ? 'bg-gray-300':'bg-sky-200'} `}>
                            <p className="text-sm">{notification.message}</p>
                            {/* <p className="text-xs text-gray-500">{formatAPIDate(notification.created_at)}</p> */}
                            <ReactTimeago  date={notification.created_at}/>
                        </div>
                    ))}
                    <div className='w-full h-1 bg-gray-500 my-2'/>
                    <Link to='/notifications' className='px-3 py-2 w-full outline outline-1 rounded'>See All</Link>
                </div>
            )}
        </div>
    )
}

export default NotifyBadge