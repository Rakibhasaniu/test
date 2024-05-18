import prisma from "../../utils/prisma"


const getUserProfileFromDB = async(user:any) => {
    const result = await prisma.userProfile.findUniqueOrThrow({
        where:{
            userId:user.id,
        }
    });
    
    return result;
}

const updateUserProfileFromDB = async(req:any) => {
    const userId = req.user.id

    const data = req.body;
    
       const result = await prisma.userProfile.update({
           where:{
            userId:userId
           },
           data:data,
       })
      

       return result;
}

export const UserProfileServices = {
    getUserProfileFromDB,
    updateUserProfileFromDB
}