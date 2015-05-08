ig.module( 
	'game.main' 
)
.requires(
	'plusplus.core.plusplus',
	'impact.game',
	'impact.font',

	//UI Elements
	'plusplus.ui.ui-meter',
	'plusplus.ui.ui-text',
	'game.ui.ui-currentAge',
	'game.ui.ui-hunger-meter',

	'plusplus.debug.debug'
)
.defines(function(){
    "use strict";
    var _c = ig.CONFIG;

	var game = ig.GameExtended.extend({

		clearColor: "#111111",
		font: new ig.Font( 'media/04b03.font.png' ),
	
		init: function() {
			this.parent();
			// Initialize your game here; bind keys etc.

			this.initUI();
		},
	
		update: function() {
			// Update all entities and backgroundMaps
			this.parent();
		
			// Add your own, additional update code here
		},

		inputStart: function () {

		},

		inputEnd: function() {

		},

		initUI: function() {
			var uiHungerLabel = this.spawnEntity(ig.UIText,0,0,{
				text: 'Hunger Level',
				align: {
					x: -0.25,
					y: -1
				}
			});
			var uiHungerMeter = this.spawnEntity(ig.UIHungerMeter, 0, 0, {});
			var uiCurrentAge = this.spawnEntity(ig.UICurrentAge, 0, 0, {
				text: 'Current Age: 10',
				align: {
					x: -1.80,
					y: -1
				}
			});
		},
	
		draw: function() {
			this.parent();
		}
	});


		// now lets boot up impact with
		// our game and config settings
		// we've modified Impact++'s 'config-user.js' file
		// to override some of the default settings
		ig.main(
			'#canvas',
			game,
			60,
			_c.GAME_WIDTH,
			_c.GAME_HEIGHT,
			_c.SCALE,
			ig.LoaderExtended
		);

});
