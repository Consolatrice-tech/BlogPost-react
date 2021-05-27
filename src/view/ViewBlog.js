import React,{useState,useEffect} from 'react';
import MainLayout from '../component/MainLayout';
import BlogApi from '../service/apiBlog';
import {Card, Row, Col} from 'antd';
import {notification} from 'antd';
import { useHistory} from 'react-router-dom'
import '../component/index.css';
import store from "store";



const ViewBlog=({match})=>{
    const history=useHistory();

    const[blog,setBlog]=useState({}); // set... is function hooks
    const blogId= match.params.blogId
    useEffect(()=>{
        const user = store.get('user')
        if (!user){
            notification.warn({
                message:'please login'
            })
            return history.push('/signin')
        }
        BlogApi.getOneBlog(blogId)
        .then((res)=>{setBlog(res.data)
        })}
        ,[]);
    return(
    <MainLayout>
      
   <Card className="viewone">
   <Row>
     <Col span={8} className="columnview">
<h1> {blog.title}  </h1> 
 
<img src={blog.photo} alt="" style={{width:"50%"}} /> 
<p> posted on: {blog.timeStamp}</p>
</Col>
<Col span={8} className="columnview">
<p> {blog.content}</p>
{/* <p> {blog.content}</p>
<p>      </p>
<p> {blog.userId}</p>
    <h1> posted on: {blog.timeStamp}</h1>
     */}
</Col>

   
</Row>
 </Card>
 
   </MainLayout>

    )
    
};


  

export default ViewBlog;