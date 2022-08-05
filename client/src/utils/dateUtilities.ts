export function countDownFromDate(date: string) {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const differenceInTime = targetDate.getTime() - currentDate.getTime()
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))

  return differenceInDays
}