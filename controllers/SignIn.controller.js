
//signIn
exports.signIn = (req, res, next) => {
    // auth.signInWithEmailAndPassword(req.body.email, req.body.password)
    //     .then((user) => {
    //         console.log(user);
    //         res.send({
    //             message: 'sign sucessfully'
    //         });
    //     })
    //     .catch(function (err) {
    //         return res.status(200).json({
    //             error: err.code,
    //             message: err.message
    //         })
    //     });
}

//reset password
exports.resetPassword = (req, res, next) => {
    auth.sendPasswordResetEmail(req.body.email)
        .then((user) => {
            res.send({
                message: 'Password reset Link send to your Email'
            });
        })
        .catch(function (err) {
            return res.status(200).json({
                error: err.code,
                message: err.message
            })
        });
}

//facebook signIn
exports.facebookSignIn = (req, res, next) => {

}

