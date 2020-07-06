import Superbowl from '../../../models/superbowl'

export default {
    Query: {
        superbowls: async () => {
            const superbowls = await Superbowl.find().populate('team')            
            return superbowls
        },
        superbowl: async (_, { year }) => {
            const superbowl = await Superbowl.findOne({ year }).populate('team')            
            return superbowl
        },
    },
    Mutation: {
        createSuperbowl: async (_, { data }) => {
            const sbExists = await Superbowl.findOne({ year: data.year })            
            if (sbExists) throw new Error('Superbowl alread exists')

            const createdSuperbowl = await Superbowl.create(data)
            await createdSuperbowl.populate('team').execPopulate()
            return createdSuperbowl
        },
        updateSuperbowl: async (_, { year, data }) => {
            const sbExists = await Superbowl.findOne({ year: data.year })            
            if (sbExists) throw new Error('Superbowl alread exists') 
            
            const updatedSuperbowl = Superbowl.findOneAndUpdate({ year }, data, { new: true }).populate('team')
            return updatedSuperbowl
        },
        deleteSuperbowl: async (_, { year }) => {
            const deletedSB = await Superbowl.findOneAndDelete(year)
            return !!deletedSB
        }
    },
}