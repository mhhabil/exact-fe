import { useEffect } from "react";
import { useRouter } from "next/router";

const useNoCompanyCodeWarn = (param: boolean, callback: () => boolean) => {
  const router = useRouter()
  useEffect(() => {
    if (param) {
      const routeChangeStart = () => {
        const ok = callback();
        if (!ok) {
          router.events.emit('routeChangeError');
          throw 'Redirect Intercepted'
        }
      }
      router.events.on('routeChangeStart', routeChangeStart);

      return () => {
        router.events.off('routeChangeStart', routeChangeStart);
      }
    }
  }, [param])
}

export default useNoCompanyCodeWarn;
