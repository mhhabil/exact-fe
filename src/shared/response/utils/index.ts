export const isSuccessResponse = (response: any) => {
  return (response && response.data && (response.data.statusCode === 200 || response.data.statusCode === 201));
}

export const getResponseData = (response: any) => {
  return (isSuccessResponse(response)) ? response.data.data : undefined;
}
