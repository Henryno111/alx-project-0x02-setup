import React from "react";
import Header from "@/components/layout/Header";


const posts = () => {
    return (
        <div>
            <Header />
            <main className='pt-20'>
                <h1 className='flex justify-center'>Posts page</h1>
                {/* <div className='space-y-4'>
                    <Card title="Post 1" content="This is the content of post 1" />
                    <Card title="Post 2" content="This is the content of post 2" />
                </div> */}
            </main>
        </div>
    );
};

export default posts;