ig.module(
	'game.entities.creatures.unarmed_human'
)
	.requires(
	'plusplus.abstractities.creature',
	'plusplus.core.config',
	'plusplus.helpers.utils',
	'plusplus.helpers.pathfinding'
)
	.defines(function() {
		"use strict";

		var _c = ig.CONFIG;
		var _ut = ig.utils;
		var _pf = ig.pathfinding;

		ig.EntityUnarmedHuman = ig.global.EntityUnarmedHuman = ig.Creature.extend({
			
		});

	});
