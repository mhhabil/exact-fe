import { useRouter } from 'next/router';

import { getHomeRouteForLoggedInUser, getUserData, isUserLoggedIn } from '@utils';

const Index = () => {

  const router = useRouter();
  const { role } = getUserData();

  if (isUserLoggedIn() && role) {
    router.push(getHomeRouteForLoggedInUser(role)).then(() => {});
  }

  return null;
}

export default Index;
