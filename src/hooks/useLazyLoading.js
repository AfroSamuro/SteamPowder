import { useEffect, useState } from 'react';

export default function useLazyLoading (initialCount = 1, offset = 0, maxCount = 100, step = 10){
    const [count, setCount] = useState(initialCount);

    const onScroll = () => {
      const scrolled = Math.ceil(window.scrollY + window.innerHeight + offset);
      const scrollHeight =  document.documentElement.scrollHeight;

      // console.log(scrolled, scrollHeight)
  
      if(count + step <= maxCount &&  scrolled  >= scrollHeight) {
        setCount((c) => c + step)
      }
    }

    useEffect(() => {
      document.addEventListener('scroll', onScroll);
      return () =>  document.removeEventListener('scroll', onScroll);
    },[])

    return {
        count,
        setCount,
    }
}