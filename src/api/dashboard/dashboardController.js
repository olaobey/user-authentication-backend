const getDashboard = async(req, res) => {
    const {username} = req.user;

    const message = `Welcome to your dashboard, ${username}!`;

    res.status(200).json({ message });
}

module.exports = {
    getDashboard
}