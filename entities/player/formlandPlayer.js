ig.module(
	'game.entities.player.formlandPlayer'
)
	.requires(
	'plusplus.abstractities.player',
	'plusplus.core.config',
	'plusplus.helpers.utils'
)
	.defines(function() {
		"use strict";

		var _c = ig.CONFIG;
		var _ut = ig.utils;

		ig.EntityFormlandPlayer = ig.global.EntityFormlandPlayer = ig.Player.extend({
			currentForm: '',
			currentSize: '',
			currentFoodChainStatus: '',
			currentMetabolism: '',
			currentEyesight: '',
			currentActivityTime: '',
			currentSmellLevel: '',
			canGnaw: false,
			isStrong: false,
			canFly: false,
			canBurrow: false,
			hasNightVision: false,

			size: {x: 8, y: 14},
			offset: {x: 4, y: 2},
			animSheet: new ig.AnimationSheet( "media/player.png", 16, 16),
			animInit: "idleX",
			animSettings: {
				idleX: { sequence: [0], frameTime: 0.1 }
			},

			//Size (tiny, small, medium, large)
			//Food Chain (bottom, near-bottom, middle, near-top, top)
			//Metabolism (slow, average, fast)
			//Eye Sight (low, average, high)
			//Smell Level (low, average, high)
			//Activity Time (day, night)
			forms: {
				mouse: {
					size: 'small',
					foodChainStatus: 'near-bottom',
					metabolism: 'fast',
					eyesight: 'average',
					smellLevel: 'average',
					activityTime: 'night',
					canGnaw: true,
					isStrong: false,
					canFly: false,
					canBurrow: false,
					hasNightVision: false
				},
				bear: {
					size: 'large',
					foodChainStatus: 'top',
					metabolism: 'average',
					eyesight: 'low',
					smellLevel: 'high',
					activityTime: 'night',
					canGnaw: false,
					isStrong: true,
					canFly: false,
					canBurrow: false,
					hasNightVision: false
				},
				bobcat: {
					size: 'medium',
					foodChainStatus: 'near-top',
					metabolism: 'average',
					eyesight: 'high',
					smellLevel: 'average',
					activityTime: 'night',
					canGnaw: false,
					isStrong: false,
					canFly: false,
					canBurrow: false,
					hasNightVision: true
				},
				owl: {
					size: 'small',
					foodChainStatus: 'middle',
					metabolism: 'slow',
					eyesight: 'high',
					smellLevel: 'low',
					activityTime: 'night',
					canGnaw: false,
					isStrong: false,
					canFly: true,
					canBurrow: false,
					hasNightVision: true
				},
				beetle: {
					size: 'tiny',
					foodChainStatus: 'bottom',
					metabolism: 'slow',
					eyesight: 'low',
					smellLevel: 'low',
					activityTime: 'day',
					canGnaw: false,
					isStrong: false,
					canFly: false,
					canBurrow: true,
					hasNightVision: false
				}
			},

			init: function(){
				this.parent();
			},
			initProperties: function() {
				this.parent();
			},
			handleInput: function() {
				this.parent();
			}
		});
	});
