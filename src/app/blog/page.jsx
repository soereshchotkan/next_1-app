import PostCard from '@/components/postCard/PostCard'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='flex flex-col md:flex-row p-5'>
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}

export default BlogPage