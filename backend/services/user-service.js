import UserModel from '../models/user-model.js';
class UserService{
    async findUser(filter){
        const user = await UserModel.findOne(filter);
        return user;
    }

    async createUser(data){
        const user = await UserModel.create(data);
        return user;
    }

}
export default  new UserService();