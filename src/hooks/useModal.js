import { useEffect, useState } from "react";

export default function useModal (targetRef, options = {}) {

    const { open: defaultOpen = false, ignoreRefs =  [] } = options;

    const [isOpen, setIsOpen] = useState(defaultOpen);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(!isOpen);


   

    const onCLick = (e) => {
        const {current: target} = targetRef;

        const ignore = ignoreRefs.map(ref => ref.current);
        ignore.push(target);

        // console.log(target, target.contains(e.target))

       

        if(!target) return; 
        if( ignore.some(element => element.contains(e.target)) ) return;
        close()
    }

    useEffect(() => {
        document.addEventListener('click', onCLick)
        return () => document.removeEventListener('click', onCLick);
    }, [])

    return {
        open,
        close,
        toggle,
        isOpen,
        isClose: !isOpen,
        setIsOpen,
    }

}