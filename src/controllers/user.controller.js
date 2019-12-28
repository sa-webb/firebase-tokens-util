var admin = require('firebase-admin');

var serviceAccount = require('../../serviceAccountKey.json');

exports.get_user = async (req, res) => {
  let uid = req.params.id;
  admin.auth().getUser(uid)
  .then(function(userRecord) {
    res.json(userRecord)
    console.log('Successfully fetched user data:', userRecord.toJSON());
  })
  .catch(function(error) {
    res.status(404).json({ message: 'User not found' });
    console.log('Error fetching user data:', error);
  });
}