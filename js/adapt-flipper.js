define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Flipper = ComponentView.extend({
        events: {
            "click .flipper-container": "onClick"
        },

        preRender: function() {
            this.model.set("_stage", 0);
            this.locked = false;
        },

        postRender: function() {
            var $container = this.$(".flipper-container");

            if (this.model.get("width")) {
                $container.width(this.model.get("width"));
            }

            $container.imageready(this.onImageReady.bind(this));
        },

        onImageReady: function() {
            this.setItemVisibility();
            this.setItemHeights();
            this.setReadyStatus();
        },

        setItemHeights: function() {
            if (this.model.get("_equalHeights") === false) return;
            var $items = this.$(".flipper-item");
            var hMax = _.reduce($items, function(hMax, el) {
                var h = $(el).outerHeight();
                return h > hMax ? h : hMax;
            }, 0);
            $items.height(hMax);
            this.$(".flipper-container").height(hMax);
        },

        setItemVisibility: function() {
            var stage = this.model.get("_stage");
            var rx = /state-\d+/;
            _.each(this.$(".flipper-item"), function(el, i) {
                if (stage === i) {
                    el.className = el.className.replace(rx, 'state-1');
                } else if (stage - 1 === i || (stage === 0 && i === this.model.get('_items').length - 1)) {
                    el.className = el.className.replace(rx, 'state-2');
                } else {
                    el.className = el.className.replace(rx, 'state-0');
                }
            }, this);
        },

        onClick: function() {
            if (this.locked) return;

            this.setLock();

            var stage = this.model.get("_stage") + 1;
            var numItems = this.model.get("_items").length;
            if (stage + 1 === numItems) {
                this.setCompletionStatus();
            } else if (stage === numItems) {
                stage = 0;
            }

            this.setStage(stage);
        },

        setLock: function() {
            var $flipper = this.$(".flipper");
            $flipper.addClass("animating");
            this.locked = true;
            setTimeout(function() {
                $flipper.removeClass("animating");
                this.locked = false;
            }.bind(this), 600);
        },

        setStage: function(stage) {
            this.model.set("_stage", stage);
            var flipper = this.$(".flipper")[0];
            flipper.className = flipper.className.replace(/stage-\d+/, "stage-" + stage);
            this.setItemVisibility();
        }

    });

    Adapt.register('flipper', Flipper);

    return Flipper;

});
