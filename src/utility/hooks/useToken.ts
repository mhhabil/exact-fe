export const getToken = (authorizationToken: string | undefined) => {
  if (!authorizationToken) {
    return undefined;
  }
  const tokens = authorizationToken.split(' ');
  if (tokens.length <= 1) {
    return undefined;
  }
  return tokens[1].replace(/"/g, '');
}
