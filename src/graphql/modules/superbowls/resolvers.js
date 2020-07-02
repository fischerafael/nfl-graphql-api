import Superbowl from '../../../models/superbowl'

export default {
    Query: {
        superbowls: () => Superbowl.find(),
        superbowl: (_, { year }) => Superbowl.find(year),
    },
    Mutation: {
        createTeam: (_, { data }) => Superbowl.create(data),
        updateTeam: (_, { year, data }) => Superbowl.findOneAndUpdate(year, data, { new: true }),
        deleteTeam: async (_, { year }) => {
            const deletedSB = await Superbowl.findOneAndDelete(year)
            return !!deletedSB
        }
    },
}