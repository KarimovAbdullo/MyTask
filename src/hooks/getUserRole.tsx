import jwt from 'jwt-decode'

const getUserRole = (token: string) => {
  let parsedToken = jwt(token) as { auth: string | null }
  let app = parsedToken.auth
  const sentence = app?.replace(/\s+/g, ' ')?.trim()
  let role = sentence ? sentence.split(',') : []

  return role[0]
}

export default getUserRole
