import React from 'react'
import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'


const home = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [posts, setPosts] = React.useState<{ title: string; content: string }[]>([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handlePostSubmit = (title: string, content: string) => {
        setPosts((prevPosts) => [...prevPosts, { title, content }]);
    };
  return (
    <div>
        <Header />
        <main className='pt-20'>
        <h1 className='flex justify-center'>Home page</h1>
        <div className='space-y-4'>
        <Card title="Welcome to ALX ProDev" content="This is the homepage of the ALX ProDev project." />
        <Card title="Card 2" content="content of this card is unknown" />
        </div>
        <button
        onClick={openModal}
        style={{
          padding: '10px 20px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Create a Modal
      </button>
      <div className="space-y-4 mt-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handlePostSubmit}
      />
        </main>
    </div>
  )
}

export default home