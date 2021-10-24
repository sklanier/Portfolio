import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
   return (
      <h1>
         {postData.id}
         <br />
         {postData.title}
         <br />
         {postData.date}
      </h1>
   )
}
export async function getStaticPaths() {
   const paths = getAllPostIds()
   return {
      paths,
      fallback: false
   }
}

export async function getStaticProps({ params }) {
   const postData = getPostData(params.id)
      return {
      props: {
         postData
      }
   }
}