
import { useParams } from 'react-router-dom'
import LoadingPage from 'src/Components/LoadingPage/LoadingPage'
import { usePostDetailsQuery } from 'src/graphql'
import { useAppSelector, } from 'src/utils/hooks'
import TrendingCard from '../../Components/TrendingCard/TrendingCard'
import AuthorCard from './Components/AuthorCard/AuthorCard'
import PageContent from './Components/PageContent/PageContent'
import PostActions from './Components/PostActions/PostActions'
import styles from './styles.module.scss'


export default function PostDetailsPage() {

    const { type, id } = useParams()
    const postDetailsQuery = usePostDetailsQuery({
        variables: {
            id: Number(id!),
            type: type as any
        },
        skip: isNaN(Number(id)),
    })

    const { navHeight } = useAppSelector((state) => ({
        navHeight: state.ui.navHeight
    }));

    if (postDetailsQuery.loading)
        return <LoadingPage />

    const post = postDetailsQuery.data?.getPostById;

    if (!post)
        return <h2>404</h2>

    return (
        <div
            className={`page-container grid pt-16 w-full gap-32 ${styles.grid}`}
        >
            <aside id='actions' className='no-scrollbar'>
                <div className="sticky"
                    style={{
                        top: `${navHeight + 16}px`,
                        maxHeight: `calc(100vh - ${navHeight}px - 16px)`,
                    }}>
                    <PostActions post={post} />
                </div>
            </aside>


            <PageContent post={post} />
            <aside id='author' className='no-scrollbar'>
                <div className="flex flex-col gap-24"
                    style={{
                        top: `${navHeight + 16}px`,
                        maxHeight: `calc(100vh - ${navHeight}px - 16px)`,
                        overflowY: "scroll",
                    }}>
                    <AuthorCard author={post.author} />
                    <TrendingCard />
                </div>
            </aside>
        </div>
    )
}
