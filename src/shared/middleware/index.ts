import  multipartFormParser  from  './multipart-form-parser';
import  nextConnect  from  'next-connect';

const  middleware = nextConnect();

middleware.use(multipartFormParser)

export  default  middleware;
