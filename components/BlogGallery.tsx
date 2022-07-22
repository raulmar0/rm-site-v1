import React from "react";

import Link from "next/link";

import { format } from "date-fns";

// import { Pagination, IPaginationProps } from '../pagination/Pagination';
// import { PostItems } from '../utils/Content';

// export type IBlogGalleryProps = {
//   posts: PostItems[];
//   pagination: IPaginationProps;
// };

const BlogGallery = () => (
  <>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="px-5 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">

          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Bitters hashtag waistcoat fashion axe chia unicorn
              </h2>
            </div>
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </>
);

export { BlogGallery };
