import Axios from 'axios';
import {notification} from 'antd';
const blogpostUrl="https://blogpost-shecancode-api.herokuapp.com/api/v1/blog/";
class BlogApi
    {
        async loginAuth(data){
            try{
            const res=await Axios.post(blogpostUrl+"auth/signin" ,data)
            return res.data;
          
        }
        catch(e){
            notification.error({message:"user not found"})
        }
        }

        async RegisterAuth(data){
            try{
            const res=await Axios.post(blogpostUrl+"auth/signup" ,data)
            return res.data;
          
        }
        catch(e){
            notification.error({message:"user exist"})
        }
        }

        async getAllBlog(data){
            try{
            const res=await Axios.get(blogpostUrl+"dash/all" )
            return res.data;
          
        }
        catch(e){
            notification.error({message:"user exist"})
        }


       }

async getOneBlog(id){
            try{
            const res=await Axios.get(blogpostUrl+"dash/"+id )
            return res.data;
          
        }
        catch(e){
            notification.error({message:"user exist"})
        }


       }


          
}
export default  new BlogApi();