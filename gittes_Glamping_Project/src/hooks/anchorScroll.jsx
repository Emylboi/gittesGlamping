import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const useAnchorScroll = () => {
    
    const location = useLocation()
    const lastHash = useRef('')


    useEffect(() => {

        if (location.hash.length > 0) {
          lastHash.current = location.hash.slice(1)
        }

        if ((lastHash.current.length > 0) && (document.getElementById(lastHash.current) != null)) {
      
            setTimeout(() => {

              const element = document
                .getElementById(lastHash.current)
        
              if (element) {

                const elementPosition = element.getBoundingClientRect().top + window.scrollY
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                })
                
              }

          }, 250)
        }
      }, [location])


    return {

    }
};
export default useAnchorScroll;