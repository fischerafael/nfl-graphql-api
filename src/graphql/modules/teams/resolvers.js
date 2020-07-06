import Team from '../../../models/team'

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
        createTeam: async (_, { data }) => {
            const createdTeam = await Team.create(data)
            return createdTeam
        },
        updateTeam: async (_, { _id, data }) => {        
            const updatedTeam = Team.findByIdAndUpdate(_id, data, { new: true })
            return updatedTeam
        },
        deleteTeam: async (_, { _id }) => {
            const deletedTeam = await Team.findByIdAndDelete(_id)
            return !!deletedTeam
        }
    },
}