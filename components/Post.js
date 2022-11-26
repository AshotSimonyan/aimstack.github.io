import Link from 'next/link'
import { slugify, ImageUrl } from '../utils'
import Image from 'next/image'

export default function Post({ post }) {

  const date = new Date(post.date)
  return (
    <div className="card mb-4">
      {/*<a href={`/blog/${post.slug}`} > <img className="card-img-top" src={ImageUrl(post.image)} alt={post.title} /></a>*/}
        {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
      <a href={`/blog/${post.slug}`} >
          <Image   src={post.image} className="card-img-top"  alt={post.title} title="" width="1000" height="1000"/>
      </a>
      <div className="card-body">
        <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>
        <div> {
          post.tags.map(
            tag => {

              const slug = slugify(tag)

              return (<Link key={tag} href={`/tag/${slug}`} className='btn'>
                  <h6 className=' post-title'>#{tag}</h6>
              </Link>)
            }
          )
        } </div>
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.description}</p>
        <Link href={`/blog/${post.slug}`} className='btn'>
            Read More
        </Link>
      </div>
    </div>
  )
}
