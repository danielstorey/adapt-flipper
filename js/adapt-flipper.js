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
            var $items = this.$(".flipper-item");
            var $container = this.$(".flipper-container");
            var numItems = $items.length;

            _.each($items, function(el, i) {
                if (i % 2 !== 0) $(el).addClass("back");
            }, this);

            var $clone = $items.eq(0).clone().appendTo($items.parent());

            if (numItems % 2 !== 0) {
                $clone.addClass("back");
            }

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
            _.each(this.$(".flipper-item"), function(el, i) {
                if(stage === i) {
                    el.className = el.className.replace(/state-\d+/, 'state-1');
                } else if(stage - 1 === i) {
                    el.className = el.className.replace(/state-\d+/, 'state-2');
                } else {
                    el.className = el.className.replace(/state-\d+/, 'state-0');
                }
            }, this);
        },

        onClick: function() {
            if (this.locked) return;

            this.setLock();

            var stage = this.model.get("_stage") + 1;
            if (stage + 1 === this.model.get("_items").length) {
                this.onComplete();
            } else if (stage === this.model.get("_items").length) {
                this.resetFlipper();
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
        },

        onComplete: function() {
            this.setCompletionStatus();

        },

        resetFlipper: function() {
            setTimeout(function() {
                this.setStage(0);
            }.bind(this), 600);
        }

    });

    Adapt.register('flipper', Flipper);

    return Flipper;

});
