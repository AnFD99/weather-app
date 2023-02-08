/* eslint-disable array-callback-return */
export const filterList = (data, days) => {
   const dayNow = new Date()

   return data.list.filter((value) => {
      const date = new Date(value.dt_txt).getDate()
      const dayTomorrow = dayNow.getDate() + days

      if (date === dayTomorrow) {
         return value
      }
   })
}
