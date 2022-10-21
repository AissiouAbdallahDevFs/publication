import { useNavigate } from 'react-router-dom';
import {PostData} from '../interfaces';


interface PostListProps{
allPosts : PostData[] | null;
}

const Postlist: React.FC<PostListProps> = ({allPosts}) => {
    const navigate = useNavigate()
    return(
        <ul className="Posts">
            {allPosts?.map(post => (
                <li key={post.id} onClick={()=> navigate(`/${post.id}`)}>
                    <h2>{post.title}</h2>
                    <p>Lire Article</p>
                </li>
            ))}
        </ul>
    )
}

export default Postlist