import Image from 'next/image'

function ProjectCard({
  project: {
    id,
    name,
    image_url,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  // showDetail,
  onClick,
}) {
  return (
    <div
      className="p-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-dark-200"
      onClick={onClick}
    >
      <div className="aspect-[3/2] w-full max-w-full relative">
        <Image
          className="object-cover object-center"
          src={image_url}
          alt={name['ru']}
          // layout="fill"
          fill={true}
          // height={200}
          // width={300}
        />
      </div>
      <p className="my-2 text-center">{name && name['ru']}</p>
    </div>
  )
}

export default ProjectCard
