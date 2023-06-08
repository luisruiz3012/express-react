import { Link } from 'react-router-dom';
import notFound from '../../assets/notFound.svg';

export const NotFound = () => {
  return (
    <div className='flex items-center justify-center w-full py-28 flex-col bg-gray-900 text-white'>
      <img className='w-48 md:w-64 lg:w-96' src={notFound} />
      <h3 className='text-2xl font-semibold mt-10'>404 Page Not Found</h3>
      <p className='mt-2 px-6 text-center '>Looks like this page doesn't exist. Click <Link to="/" className='text-blue-500 underline'>here</Link> to go back</p>
    </div>
  )
}