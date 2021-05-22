const ServiceCard = ({ service: { Icon, about, title } }) => {
  const createMarkup = () => {
    return {
      __html: about['ru'],
    }
  }
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-8 h-8 text-primary" style={{ minWidth: '2rem' }} />
      <div>
        <h4 className="font-bold">{title['ru']}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default ServiceCard
