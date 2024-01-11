import React from 'react'
import BlogCard from "../herGebruik/BlogCard"

const PostCard = () => {
  return (
    <div className="container mx-auto px-4">
    <BlogCard
      title="Title"
      description="Desc"
      imageUrl="/path-to-your-image.jpg"
      date="Jan 11 2024"
    />
    {/* Andere componenten */}
  </div>
  )
}

export default PostCard