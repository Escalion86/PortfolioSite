const Bar = ({ value: { Icon, level, name } }) => {
  const bar_width = `${level}%`
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <div
        className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary"
        style={{
          width: bar_width,
        }}
      >
        <Icon className="w-3 h-3 mr-1 min-w-min" /> {name}
      </div>
    </div>
  )
}
export default Bar
