
export const EnvConfiguration = () => ({
    
    enviroment : process.env.NODE_ENV || 'dev',
    mongodb : process.env.MONGO_URL,
    port : +process.env.PORT || 3002,
    defaultLimit : +process.env.DEFAULT_LIMIT || 7


})