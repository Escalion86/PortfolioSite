import Codes from '@models/Codes'
import CodesCheckHistory from '@models/CodesCheckHistory'
import dbConnect from '@utils/dbConnect'

export default async function handler(req, res) {
  const { query, method, body } = req
  await dbConnect()
  if (method === 'POST') {
    try {
      const code = body?.code
      if (code) {
        // console.log('req :>> ', Object.keys(req))
        console.log('req.headers :>> ', req.headers)
        console.log('eq.socket?.remoteAddress :>> ', req.socket?.remoteAddress)
        const clientIP =
          req.headers['x-real-ip']?.split(',').shift() ||
          req.socket?.remoteAddress
        // const clientIP = requestIp.getClientIp(req)

        // Смотрим историю проверок кода (возможно его подбирают)
        const histories = await CodesCheckHistory.find({
          clientIP,
        })
          .sort({ createdAt: -1 })
          .limit(3)

        if (histories?.length >= 3) {
          const serverDate = new Date()
          let j = 0
          for (let i = 0; i < histories.length; i++) {
            const historyDate = histories[i].createdAt
            const differenceInDays = Math.round(
              (serverDate.getTime() - historyDate.getTime()) /
                (1000 * 3600 * 24)
            )
            if (differenceInDays < 1) j++
          }
          if (j >= 3)
            return res?.status(400).json({
              success: false,
              error: 'Слишком много попыток ввода',
              errorCode: 'too many tries',
              data: {
                nextTryDate: new Date(
                  histories[histories.length - 1].createdAt.getTime() +
                    1000 * 3600 * 24
                ),
              },
            })
        }

        // Проверяем есть ли код и его валидность
        if (typeof code !== 'number' || code < 10000000 || code > 99999999) {
          const history = await CodesCheckHistory.create({
            date: new Date(),
            data: { errorCode: 'wrong code', code },
            clientIP,
          })
          return res?.status(400).json({
            success: false,
            error: 'Код не верен',
            errorCode: 'wrong code',
          })
        }
        // Проверяем есть ли этот код в системе для ForceCalc
        const result = await Codes.findOne({
          code,
          programName: 'ForceCalc',
        })
        if (!result) {
          const history = await CodesCheckHistory.create({
            date: new Date(),
            data: { errorCode: 'code not exist', code },
            clientIP,
          })
          return res?.status(400).json({
            success: false,
            error: 'Такого кода не существует',
            errorCode: 'code not exist',
          })
        }

        const history = await CodesCheckHistory.create({
          date: new Date(),
          data: body?.data,
          codeId: result._id,
          clientIP,
        })
        return res
          ?.status(201)
          .json({ success: true, data: { userName: result?.userName } })
      }

      return res?.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res?.status(400).json({ success: false, error })
    }
  }

  if (method === 'GET') {
    try {
      console.log('query :>> ', query)
      // const { email, token } = query
      // if (!email)
      //   return res
      //     ?.status(400)
      //     .json({ success: false, error: 'Отсутствует email' })
      // if (!token)
      //   return res
      //     ?.status(400)
      //     .json({ success: false, error: 'Отсутствует токен' })
      // try {
      //   const data = await EmailConfirmations.findOne({ email, token })
      //   if (!data) {
      //     return res
      //       ?.status(400)
      //       .json({ success: false, error: 'Нет данных по токену' })
      //   }
      //   const newUser = await Users.create({
      //     email,
      //     password: data.password,
      //     name: '',
      //   })
      //   if (!newUser)
      //     return res
      //       ?.status(400)
      //       .json({ success: false, error: 'Не удалось создать пользователя' })

      return res?.status(201).json({ success: true })
    } catch (error) {
      console.log(error)
      return res?.status(400).json({ success: false, error })
    }
  }
}
