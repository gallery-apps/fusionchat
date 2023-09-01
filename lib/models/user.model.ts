import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id: { type: String, requered: true },
    username: { type: String, requered: true, unique: true },
    name: { type: String, requered: true },
    image: String,
    onboarded: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User