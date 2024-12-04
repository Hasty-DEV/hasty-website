export type ProjectProps = {
  type: string;
  title: string;
  description: string;
  link: string;
  stacks: string[];
};

const ProjectCard = (props: ProjectProps) => {
  return (
    <div className="sm:px-8 lg:px-16 xl:px-20 flex flex-col items-start justify-center mt-6 rounded-lg shadow-lg bg-white pb-9 w-full h-auto px-10">
      <span className="text-base sm:text-lg lg:text-xl xl:text-2xl text-indigo-500 font-bold mb-2">
        {props.type}
      </span>
      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 font-bold text-gray-800">
        {props.title}
      </h3>
      <div className="mb-4 flex flex-wrap">
        {props.stacks.map((stack, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {stack}
          </span>
        ))}
      </div>
      <p className="mb-4 text-sm text-justify sm:text-base lg:text-lg xl:text-xl text-gray-700">
        {props.description}
      </p>
      <a
        href={props.link}
        rel="noopener noreferrer"
        target="_blank"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-block text-base"
      >
        Ver Site
      </a>
    </div>
  );
};

export default ProjectCard;
