import React, { useState } from 'react';
import { type PostModalProps } from '../../interfaces';

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

    if (!isOpen) return null;

    
    return (
        <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
            isOpen ? 'block' : 'hidden'
        }`}
        >
        <div className='bg-white p-4 rounded-lg'>
            <button onClick={onClose}>Close</button>
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder='Content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
    );

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
//         isOpen ? 'block' : 'hidden'
//       }`}
//     >
//       <div className='bg-white p-4 rounded-lg'>
//         <button onClick={onClose}>Close</button>
//         <form onSubmit={handleSubmit}>
//           <input
//             type='text'
//             placeholder='Title'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             placeholder='Content'
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
};

export default PostModal;