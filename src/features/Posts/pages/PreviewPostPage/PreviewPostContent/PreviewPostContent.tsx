import Header from "src/features/Posts/Components/PostCard/Header/Header"
import { marked } from 'marked';
import styles from '../../PostDetailsPage/Components/PageContent/styles.module.css'
import Badge from "src/Components/Badge/Badge";
import { BiComment } from "react-icons/bi";
import { RiFlashlightLine } from "react-icons/ri";
import { numberFormatter } from "src/utils/helperFunctions";
import { Post } from "src/graphql";


interface Props {
    post: Pick<Post,
        | 'title'
        | 'createdAt'
        | 'body'
        | 'author'
    > & {
        tags: Array<{ title: string }>
    }
}

export default function PreviewPostContent({ post }: Props) {
    return (
        <>
            <div id="content" className="bg-white p-32 border rounded-16">
                <div className="flex flex-col gap-24">
                    <Header size="lg" showTimeAgo={false} author={post.author} date={post.createdAt} />
                    <h1 className="text-h2 font-bolder">{post.title}</h1>
                    {post.tags.length > 0 && <div className="flex gap-8">
                        {post.tags.map((tag, idx) => <Badge key={idx} size='sm'>
                            {tag.title}
                        </Badge>)}
                    </div>}
                    <div className="flex gap-24">
                        <div className="text-black font-medium">
                            <RiFlashlightLine /> <span className="align-middle text-body5">{numberFormatter(123)} votes</span>
                        </div>
                        <div className="text-black font-medium">
                            <BiComment /> <span className="align-middle text-body5">{17} Comments</span>
                        </div>
                    </div>
                </div>

                <div className={`mt-42 ${styles.body}`} dangerouslySetInnerHTML={{ __html: marked.parse(post.body) }}>
                </div>
            </div>
            {/* <div id="comments" className="mt-10 comments_col">
                <CommentsSection comments={story.comments} />
            </div> */}
        </>
    )
}