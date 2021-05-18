export const getActivities = async (count) => {
  return await fetch(`/.netlify/functions/activities?count=${count}`).then(
    (r) => r.json()
  )
}
