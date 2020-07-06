import Team from '../../../models/team'
import isAuth from '../../../utils/isAuth'

export default {
    Query: {
        teams: async () => {
            const teams = await Team.find()
            return teams
        },
        team: async (_, { _id }) => {
            const team = await Team.findById(_id)            
            return team                       
        },
    },
    Mutation: {
        createTeam: async (_, { data }, { authorization }) => {
            isAuth(authorization)

            const createdTeam = await Team.create(data)
            return createdTeam
        },
        updateTeam: async (_, { _id, data }, { authorization }) => {  
            isAuth(authorization)            
            
            const updatedTeam = await Team.findByIdAndUpdate(_id, data, { new: true })
            return updatedTeam
        },
        deleteTeam: async (_, { _id }, { authorization }) => {
            isAuth(authorization)

            const deletedTeam = await Team.findByIdAndDelete(_id)
            return !!deletedTeam
        }
    },
}