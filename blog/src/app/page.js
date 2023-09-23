'use client' 
import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [name,setName]= useState('nira');
  const anotherarray = (items,num)=>{
    // alert(items+"value is"+num);
 
      setName('nirajan das');
    
  }
const router = useRouter();
  const InnerComp = ()=>{
    return (
      <>
      another inner component
      </>
    )
  }
  return (
    <main className={styles.main}>
     <h1>hello</h1>
     <User user="nirajan"/>
     <button onClick={()=>anotherarray ()}>{name } </button>
     <Link href="/login">Go to login page</Link>
     {InnerComp()}//this is ineffecient method to call the component as the recolliation algorithm may be violated using this.
     <button onClick={()=>useRouter().push('/login')}>routing functionality using the useRouter</button>
    </main>
  )
}

const User = (props)=>{
  return(
    <div>
      <h1>the user name is {props.user}</h1>

    </div>
  )
}