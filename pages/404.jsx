import Router from 'next/router'
import { useEffect, useState } from 'react'

function FourOhFour() {
  const [seconds, setSeconds] = useState(5)

  if (seconds === 0) window.location.href = '/'
  if (seconds > 0)
    setTimeout(() => {
      setSeconds(seconds - 1)
    }, 1000)

  return (
    <div className="flex flex-col items-center justify-center h-full px-5 py-20">
      <h2>Страница на которую вы перешли - не существует.</h2>
      <div>
        Вы будете перенаправлены на главную страницу через {seconds} сек
      </div>
    </div>
  )
}

export default FourOhFour
