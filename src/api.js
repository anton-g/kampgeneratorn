export const getActivities = async (count) => {
  return await fetch('/.netlify/functions/activities').then((r) => r.json())
}
