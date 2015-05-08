ig.module(
	'game.ui.ui-hunger-meter'
)
	.requires(
	'plusplus.core.config',
	'plusplus.ui.ui-meter'
)
	.defines(function() {
		"use strict";

		var _c = ig.CONFIG;

		/**
		 * Toggle for graphics performance.
		 **/
		ig.UIHungerMeter = ig.global.UIHungerMeter = ig.UIMeter.extend({
			barSize: {
				x: 200,
				y: 8
			},
			fillStyle: 'rgb(255,54,90)',
			backgroundStyle: 'rgb(50,50,50)',
			margin: { x: 0.02, y: 0.02 },
			borderWidth: 1,
			borderStyle: ''
		});

	});