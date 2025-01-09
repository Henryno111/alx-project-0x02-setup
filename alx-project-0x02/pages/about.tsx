import React from 'react'
import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

const about = () => {

    const handleButtonClick = (buttonLabel: string) => {
        alert(`You clicked the ${buttonLabel} button!`)
    };

  return (
    <div>
        <Header />
        <main className='pt-20'>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl mb-8">About Us</h1>

      <div className="space-x-4">
        <Button
          size="small"
          shape="rounded-sm"
          label="Small Button"
          onClick={() => handleButtonClick('small')}
        />
        <Button
          size="medium"
          shape="rounded-md"
          label="Medium Button"
          onClick={() => handleButtonClick('medium')}
        />
        <Button
          size="large"
          shape="rounded-full"
          label="Large Button"
          onClick={() => handleButtonClick('large')}
        />
      </div>
    </div>
        </main>
    </div>
  )
}

export default about