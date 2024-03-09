import  {Sequelize} from 'sequelize'


const db =  new  Sequelize("auth_test","root","Nebraska1",{

    dialect:'mysql'
})

export default db;