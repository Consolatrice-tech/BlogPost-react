import React, {useEffect,useState} from 'react';
import MainLayout from '../component/MainLayout';
import {Link} from 'react-router-dom';
import BlogApi from '../service/apiBlog';
import {Card} from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

const Home=()=>{
  useEffect(()=>{ 
    BlogApi.getAllBlog().then((res)=>{setResponse(res)
    setBlog(res.data)
    console.log(res)
    })
  },[]);
  const [res,setResponse]=useState({});
  const [blogs,setBlog]=useState([]);
  
    return(

<MainLayout>
  <h1 > hhJDLnbsbfcsfm </h1>
  <Form className="Signup-content"   initialValues={{ remember: true }}
        >
<Form.Item
        label="Firstname"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your Firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      </Form>
  {
  blogs.map((blog,index)=>{
return(
    <Card.Grid>
    <Link to={`/view/blog/${blog._id}`}>
    <h1>{blog.title} </h1>
<img src={blog.photo}  style={{width:"100%"}}/> 

<h4> posted by: {blog.userId.firstName}</h4>
         <h4> posted on: {blog.timeStamp.substring(0,25)}</h4>
         <h4> country: {blog.country}</h4>
 </Link>  </Card.Grid> 

)

   } )
  }
 

</MainLayout>

    )
}
export default Home;