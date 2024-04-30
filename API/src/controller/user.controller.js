const UserService = require('..//services/user.services');

const UserController = {
    getUsers: (req, res) =>{
        UserService.getDBUsers().
        then((result) =>{
            res.json({success: true, users: result});
        }).catch((error) =>{
            res.status(500).json({success: false, error: error});
        })
    },
    getUserById: (req, res) =>{
        const userId = req.params.id;
        UserService.getDBUserById(userId).
        then((result) =>{
            res.json({success: true, user: result});
        }).catch((error) =>{
            res.status(500).json({success: false, error: error});
        })
    },
    updateData: (req, res) => {
        const data = req.body;
        CommentService.updateData(data).then( () =>{
            res.json({success: true, message: 'Dado atualizado com sucesso!'})
        }).catch(error => {
            res.status(500).json({success: false, error: `Internal server error: ${error.message}`})
        });
    }
}

module.exports = UserController;