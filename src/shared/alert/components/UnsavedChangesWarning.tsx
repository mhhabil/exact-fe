import { useEffect } from "react";
import { useRouter } from "next/router";

const useWarnIfUnsavedChanges = (unsavedChanges: boolean, callback: () => boolean) => {
  const router = useRouter()
  useEffect(() => {
    if (unsavedChanges) {
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
  }, [unsavedChanges])
}

export default useWarnIfUnsavedChanges;
