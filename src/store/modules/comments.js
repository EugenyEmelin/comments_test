import {getComments, getComment, addComment} from "../../api/modules/comments"

const state = {
  comments: []
}

const getters = {
  comments: state => state.comments
}

const mutations = {
  SET_COMMENTS(state, comments) {
    state.comments = comments
  },
  CLEAR_COMMENTS(state) {
    state.comments = []
  },
  ADD_COMMENT(comment) {
    state.comments.push(comment)
  },
  UPDATE_COMMENT(state, newComment) {
    state.comments.find(comment => {
       if (comment.id === newComment.id) {
         return true
       }
    })
  },
  DELETE_COMMENT(state, id) {
    state.comments.filter(comment => comment.id !== id)
  }

}

const actions = {
  async getComments({commit}) {
    const comments = await getComments()
    commit('SET_COMMENTS', comments.data)
    return comments.data
  },

  async getComment({commit}, id) {
    const comment = await getComment(id)
    console.log(id, 'id который пришёл в store getComment()')
    return comment.data
  },

  async addComment({commit}, form) {
    try {
      const comment = await addComment(form)
      commit('ADD_COMMENT', comment)
    } catch(e) {
      console.error(e)
    }
  },
  updateComment() {

  },
  deleteComment() {

  },


}

export default {
  state,
  getters,
  actions,
  mutations,
}