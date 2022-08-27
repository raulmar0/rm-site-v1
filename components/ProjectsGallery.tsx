/* eslint-disable @next/next/no-img-element */
const ProjectsGallery = ({ projects }) => {
  return (

      <div className="mt-0 grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((items, key) => (
          <article
            className="project min-w-full max-w-sm mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <img
              src={items.img}
              loading="lazy"
              alt={items.title}
              className="w-full h-48 rounded-t-md"
            />
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">{items.title}</h3>
              <div className="flex flex-wrap">
                {items.categories.map((category, key) => (
                    <span className="mt-1 px-2 py-0 mr-1 text-xs text-gray-800  bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-900" key={key}>{category}</span>
                ))}
              </div>
            </div>
            <div className="ml-4 mr-2 mb-3">
              <a target="_blank" href={items.demo} rel="noreferrer">
                <button className="mr-2 px-2 py-1 text-base font-bold text-white uppercase transition-colors duration-200 transform bg-indigo-800 rounded dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 dark:focus:bg-indigo-600">Demo</button>
              </a>
              <a target="_blank" href={items.github} rel="noreferrer">
                <button className="mr-2 px-2 py-1 text-base font-bold text-white uppercase transition-colors duration-200 transform bg-indigo-800 rounded dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700 dark:focus:bg-indigo-600">GitHub</button>
              </a>
            </div>
          </article>
        ))}
        <style jsx>
          {`
            .project :global(a:hover) {
              @apply no-underline;
            }
          `}
        </style>
      </div>

  );
};

export {ProjectsGallery};
