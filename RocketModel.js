var RocketModel = Backbone.Model.extend({
    defaults: {
        name: 'name',
        description: 'desc',
        size: 100
    },

    validate: function(attrs) {
        if (attrs.size> 200 || attrs.size <1) {
            console.log('incorrect size');
            return 'incorrect size';
        }
    }
});