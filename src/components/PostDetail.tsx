
import {PostData} from '../interfaces'

interface PostdetailProps {
    onePost : PostData | null
}

const PostDetail: React.FC<PostdetailProps> = ({onePost}) => {
return(
   <div className="post">
    <h1>Publication id {onePost?.id}</h1>
    <h2>Publication tilte {onePost?.title}</h2>
    <p>{onePost?.body}</p>
   </div> 
)
}

export default PostDetail