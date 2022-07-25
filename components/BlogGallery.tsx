import React from "react";

import Link from "next/link";

import { format } from "date-fns";

// import { Pagination, IPaginationProps } from '../pagination/Pagination';
// import { PostItems } from '../utils/Content';

// export type IBlogGalleryProps = {
//   posts: PostItems[];
//   pagination: IPaginationProps;
// };



const BlogGallery = ({ posts }) => {

  return (
  <>    
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="px-5 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">

        {
          posts.map((post) => (
          // eslint-disable-next-line react/jsx-key
          <div className="py-8 flex flex-wrap md:flex-nowrap justify-between">
            <div className="md:flex-grow">
              <Link href='/posts/[slug]' as={`/posts/${post.slug}`}>
                <a className="bloglink">
                  <h2 className="text-2xl font-medium text-gray-900 title-font">
                    {post.title}
                  </h2>
                </a>
              </Link>
              <span className="mt-1 text-gray-500 text-sm">{post.reading_time === 0 ? 1 : post.reading_time} min read</span>
            </div>
            <div className="md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-500">
                {post.tags[0].name.toUpperCase()}
              </span>
              <span className="mt-1 text-gray-500 text-sm">{format(new Date(post.published_at), 'dd/MM/yyyy')}</span>
            </div>
          </div>
          ))
        }

          
        </div>
      </div>
    </section>
    <style jsx>
      {`
        .bloglink:hover {
          @apply no-underline;
        }
      `}
    </style>
  </>
  )
};

export { BlogGallery };
