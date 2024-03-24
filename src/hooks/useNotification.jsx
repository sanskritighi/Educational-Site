import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { BACKEND_DOMAIN } from '../api/globals';
import API_URLS from '../api/constants';
import { toast } from 'react-toastify';

// Create a context for the notifications
const NotificationsContext = createContext();

// Custom hook to use the NotificationsContext
export const useNotifications = () => useContext(NotificationsContext);

// Component to provide the notifications context
export const NotificationsProvider = ({ children }) => {
    const [notificationCount, setNotificationCount] = useState(0);
    const [latestNotifications, setLatestNotifications] = useState([]);
    const { user } = useAuth()

    console.log('Stream',user)


    function parseData(rawData){
        const data = JSON.parse(rawData);
        if (data && data?.unread_notification !== 0) {
            setNotificationCount(data.unread_notification);
        }
        if (data && data.latest_notification) {
            toast.info(data?.latest_notification?.content)
            // Use a queue approach to limit to 10 notifications
            setLatestNotifications((prevNotifications) => {
                const updatedNotifications = [data.latest_notification, ...prevNotifications.slice(0, 9)];
                return updatedNotifications;
            });
        }
    }

    useEffect(() => {
        if (user) {


            // Connect to the EventSource
            const eventSource = new EventSource(`${BACKEND_DOMAIN}${API_URLS.notifications}/${user?.id}/`);

            // Listen for 'notification' events
            // eventSource.addEventListener('notification', (event) => {
            //     // Increment the notification count
                

                
            // });
            eventSource.onmessage=e=>{
                console.log('SSE',e)
                parseData(e.data)
            }

            eventSource.onerror=()=>{
                eventSource.close()
            }
            // Clean up the EventSource connection
            return () => {
                eventSource.close();
            };
        }
    }, []);

    return (
        <NotificationsContext.Provider value={{ notificationCount }}>
            {children}
        </NotificationsContext.Provider>
    );
};


