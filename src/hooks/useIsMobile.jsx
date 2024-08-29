import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786);

  useEffect(() => {
    function handleResize() {
      console.log('damhq :',document.documentElement.clientWidth )
      setIsMobile(document.documentElement.clientWidth  <= 786);
    }

    window.addEventListener('resize', handleResize);

    // 清除事件监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default useIsMobile;
