ig.module(
	'game.ui.ui-currentAge'
)
	.requires(
	'plusplus.core.config',
	'plusplus.ui.ui-text'
)
	.defines(function() {
		"use strict";

		var _c = ig.CONFIG;

		/**
		 * Toggle for graphics performance.
		 **/
		ig.UICurrentAge = ig.global.UICurrentAge = ig.UIText.extend({
			align: { x: -0.2, y: -4 },
			text: '',
			textDisplay: '',
			textOverflow: ''
		});

	});