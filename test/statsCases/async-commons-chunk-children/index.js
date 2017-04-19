require.ensure([], function() {
    require('./a');
}, 'a');

require.ensure([], function() {
    require('./b');
}, 'b');
