import ClientPage from './components/client';
import styles from './page.module.css'
import dynamic from 'next/dynamic';

// dynamically importing page or normal component (both server and client) result in the same issue
const DynamicPage1 = dynamic(() => import('@/app/page1/page'));

//const TestPage1 = dynamic(() => import('@/app/components/test'));

export default function Home() {

  return (
    <>
      <ClientPage />
      <DynamicPage1 />
      <DynamicPage1 />
      <DynamicPage1 />
      <DynamicPage1 />
      <DynamicPage1 />
      <DynamicPage1 />
      <DynamicPage1 />
    </>
  )
}
