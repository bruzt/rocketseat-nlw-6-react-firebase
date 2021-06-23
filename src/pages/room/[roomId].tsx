import { useEffect } from 'react';
import { useRouter } from 'next/router';

import RoomPage from '../../components/roomComponents/RoomPage';
import { useAuth } from '../../contexts/authContext';

export default function Room(){

    /*const router = useRouter();
    const authContext = useAuth();

    useEffect( () => {
        if(!authContext.userState) router.replace('/');
    }, []);*/

    return <RoomPage />
}
