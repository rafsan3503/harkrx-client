import React, { useContext } from 'react';
import useCurrentUser from '../hooks/useCurrentUser';
import { AuthContext } from '../UserContext';
import loadingImg from "../assets/loading (2).gif";
import Navbar from './shared/Navbar';
import UserFeed from '../components/UserFeed';
import Contacts from '../components/Contacts';
import OtherUser from '../components/OtherUser';
import { useLoaderData } from 'react-router-dom';

const FeedUser = () => {
    const { user } = useContext(AuthContext);

    const feedUsers = useLoaderData();
    console.log(feedUsers);

    // const {
    //   data: profileUser,
    //   loading,
    //   refetch,
    // } = useQuery({
    //   queryKey: ["profileUser"],
    //   queryFn: () =>
    //     fetch(`https://harkrx-server.vercel.app/user/${id}`).then((res) => {
    //       return res.json();
    //     }),
    // });

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-6 min-h-screen flex gap-6 ">
                <div className="w-[75%]">
                    <OtherUser feedUsers={feedUsers} />
                </div>
                <div className="w-[25%]">
                    <Contacts />
                </div>
            </div>
        </>
    );
};

export default FeedUser;