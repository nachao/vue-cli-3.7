import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

export const dcuDevice = {
    namespaced: true,
    mutations,
    getters,
    actions
}
