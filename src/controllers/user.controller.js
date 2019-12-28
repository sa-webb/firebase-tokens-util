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

exports.grant_admin = async (req, res) => {
  let uid = req.params.id;
  admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
    res.status(200).json({ message: 'updated user'})
  })
}

exports.check_admin = async (req, res) => {
  let uid = req.params.id;
  admin.auth().getUser(uid).then((userRecord) => {
    if (userRecord.customClaims.admin === true) {
      res.status(200).json({ message: 'Is admin'})
      console.log('Is admin');
    } else {
      res.status(200).json({ message: 'Is not admin'})
      console.log('Not admin');
    }
  })
}