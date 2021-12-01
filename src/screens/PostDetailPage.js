import React from 'react'
import { useSelector } from 'react-redux'
import CollectionDetails from '../components/CollectionDetails'
import Faqs from '../components/Faqs'
import PostDetailFeature from '../components/PostDetailFeature'
import RecentActivityTable from '../components/RecentActivityTable'

const PostDetailPage = () => {
    const data = useSelector(s => s)
    console.log(data)
    return (
        <div>
            <PostDetailFeature />
            <RecentActivityTable />
            <CollectionDetails />
            <Faqs />
            
        </div>
    )
}

export default PostDetailPage
