var express = require('express');
var router = express.Router();

/* GET member roster listing. */
router.get('/', function(req, res, next) {
    res.render('roster', {
        officers : [
            {
                username : 'SpockYoda',
                aliases : ['SpockYoda', 'The Mask Murdock'],
                get aliasString() {
                  return this.aliases.join(', ');
                },
                contact : 'jacob@gildedalchemists.com'
            },
            {
                username : 'Monkeysnott',
                aliases : ['Monkeysnott'],
                get aliasString() {
                  return this.aliases.join(', ');
                },
                contact : 'monkeysnott@gildedalchemists.com'
            }
        ],
        members : []
    });
});

module.exports = router;
