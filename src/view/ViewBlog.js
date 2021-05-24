import React,{useState,useEffect} from 'react';
import MainLayout from '../component/MainLayout';
import BlogApi from '../service/apiBlog';
import {Card, Row, Col} from 'antd'

import '../component/index.css';


const ViewBlog=({match})=>{
    const[blog,setBlog]=useState({}); // set... is function hooks
    const blogId= match.params.blogId
    useEffect(()=>{
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
 
<img src={blog.photo}  style={{width:"50%"}}/> 
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