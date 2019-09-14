import { HTTP } from "../http"

export async function getComments() {
  return await HTTP.get('/comments')
}
export async function addComment(data) {
  return await HTTP.post('/comments', data)
}
export async function getComment(id) {
  return await HTTP.get(`/comments/${id}`)
}