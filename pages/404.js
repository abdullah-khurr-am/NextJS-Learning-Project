import { useRouter } from 'next/router';
import Link from 'next/link'
import { useEffect } from 'react';

const NotFound = () => {
    const router = useRouter();


    useEffect(()=>{
        setTimeout(()=>{
        router.push('/');        
        },3000);
    }, []);

    return ( <div className="not-found">
        <h1>It ain't here! Man! WTFF?!</h1>
        <h2>And no! I'm not gonna "go check the back" cuz IT AIN'T HERE! CHIEF!</h2>
        <p>Go back to the <Link href="/"><a>HomePage</a></Link> </p>
    </div> );
}
 
export default NotFound;