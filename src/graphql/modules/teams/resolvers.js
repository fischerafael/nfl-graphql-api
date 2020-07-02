import Team from '../../../models/team'

export default {
    Query: {
        teams: () => Team.find(),
        team: (_, { _id }) => Team.findById(_id),
    },
    Mutation: {
        createTeam: (_, { data }) => Team.create(data),
        updateTeam: (_, { _id, data }) => Team.findByIdAndUpdate(_id, data, { new: true }),
        deleteTeam: async (_, { _id }) => {
            const deletedTeam = await Team.findByIdAndDelete(_id)
            return !!deletedTeam
        }
    },
}