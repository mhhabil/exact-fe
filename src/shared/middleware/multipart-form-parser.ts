import formidable from 'formidable'

const  form = formidable({ multiples:  false }); // multiples means req.files will be an array

export  default  async  function  parseMultipartForm(req: any, res: any, next: any) {
  const  contentType = req.headers['content-type']
  if (contentType && contentType.indexOf('multipart/form-data') !== -1) {
    form.parse(req, (err, fields, files) => {
      if (!err) {
        req.body = {
          ...fields,
          ...files,
        }
// sets the body field in the request object
      }
      next(); // continues to the next middleware or to the route
    })
  } else {
    next();
  }
}

