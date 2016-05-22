var express = require('express'),
app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 8081);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});