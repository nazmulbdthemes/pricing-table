import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const {
	GRID_GAP,
	ROW_GAP,
	PLAN_FONT_SIZE,
	PRICE_FONT_SIZE,
	USERCOUNT_FONT_SIZE,
	FEATURE_TITLE_FONT_SIZE,
	FEATURE_SUB_TITLE_FONT_SIZE,
	FEATURE_ICON_SIZE,
	FEATURE_ICON_ROUND_SIZE,
	FEATURE_ITEM_TEXT_FONT_SIZE,
	FEATURE_ITEM_TEXT_GAP,
	FEATURE_ITEM_BOTTOM_GAP,
	BUTTON_FONT_SIZE,
	BUTTON_PADDING,
	BUTTON_BORDER_RADIUS,
	BADGE_FONT_SIZE,
	BADGE_HORIZONTAL_PADDING,
	BADGE_VERTICAL_PADDING,
	ITEM_BORDER_RADIUS,
	ITEM_PADDING,
} = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	style: {
		type: 'string',
		default: 'style-1',
	},
	blockStyle: {
		type: 'object',
	},
	pricingPlan: {
		type: 'string',
		default: 'Basic Plan',
	},
	price: {
		type: 'string',
		default: 20,
	},
	userCount: {
		type: 'string',
		default: 'per user',
	},
	duration: {
		type: 'string',
		default: 'per month',
	},
	badge: {
		type: 'string',
		default: 'popular',
	},
	titleTag: {
		type: 'string',
		default: 'h2',
	},
	titleColor: {
		type: 'string',
	},
	priceColor: {
		type: 'string',
	},
	userCountColor: {
		type: 'string',
	},
	durationColor: {
		type: 'string',
	},
	iconBgGradientColor: {
		type: 'string',
	},
	contentBgColor: {
		type: 'string',
	},
	textAlign: {
		type: 'string',
		default: 'left',
	},
	itemBgColor: {
		type: 'string',
	},
	buttonText: {
		type: 'string',
		default: 'Get Started',
	},
	buttonLink: {
		type: 'string',
		default: '#',
	},
	newTab: {
		type: 'Boolean',
		default: true,
	},
	showBadge: {
		type: 'Boolean',
		default: true,
	},
	badgeText: {
		type: 'string',
		default: 'Popular',
	},
	featureTitle: {
		type: 'string',
		default: 'Features',
	},
	featureSubTitle: {
		type: 'string',
		default: '',
	},
	textValues: {
		type: 'array',
		default: ['One account', 'Unlimited songs', 'Customized playlist'],
	},
	...generateResRangleControlAttributes({
		controlName: GRID_GAP,
		defaults: {
			[`${GRID_GAP}DeskRange`]: 30,
			[`${GRID_GAP}TabRange`]: 30,
			[`${GRID_GAP}MobRange`]: 30,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ROW_GAP,
		defaults: {
			[`${ROW_GAP}DeskRange`]: 40,
			[`${ROW_GAP}TabRange`]: 40,
			[`${ROW_GAP}MobRange`]: 40,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: PLAN_FONT_SIZE,
		defaults: {
			[`${PLAN_FONT_SIZE}DeskRange`]: 23,
			[`${PLAN_FONT_SIZE}TabRange`]: 18,
			[`${PLAN_FONT_SIZE}MobRange`]: 16,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: PRICE_FONT_SIZE,
		defaults: {
			[`${PRICE_FONT_SIZE}DeskRange`]: 40,
			[`${PRICE_FONT_SIZE}TabRange`]: 30,
			[`${PRICE_FONT_SIZE}MobRange`]: 22,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: USERCOUNT_FONT_SIZE,
		defaults: {
			[`${USERCOUNT_FONT_SIZE}DeskRange`]: 14,
			[`${USERCOUNT_FONT_SIZE}TabRange`]: 14,
			[`${USERCOUNT_FONT_SIZE}MobRange`]: 14,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: FEATURE_TITLE_FONT_SIZE,
		defaults: {
			[`${FEATURE_TITLE_FONT_SIZE}DeskRange`]: 35,
			[`${FEATURE_TITLE_FONT_SIZE}TabRange`]: 35,
			[`${FEATURE_TITLE_FONT_SIZE}MobRange`]: 35,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: FEATURE_SUB_TITLE_FONT_SIZE,
		defaults: {
			[`${FEATURE_SUB_TITLE_FONT_SIZE}DeskRange`]: 14,
			[`${FEATURE_SUB_TITLE_FONT_SIZE}TabRange`]: 14,
			[`${FEATURE_SUB_TITLE_FONT_SIZE}MobRange`]: 14,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: FEATURE_ICON_SIZE,
		defaults: {
			[`${FEATURE_ICON_SIZE}DeskRange`]: 16,
			[`${FEATURE_ICON_SIZE}TabRange`]: 16,
			[`${FEATURE_ICON_SIZE}MobRange`]: 16,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: FEATURE_ICON_ROUND_SIZE,
		defaults: {
			[`${FEATURE_ICON_ROUND_SIZE}DeskRange`]: 18,
			[`${FEATURE_ICON_ROUND_SIZE}TabRange`]: 18,
			[`${FEATURE_ICON_ROUND_SIZE}MobRange`]: 18,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: FEATURE_ITEM_TEXT_FONT_SIZE,
		defaults: {
			[`${FEATURE_ITEM_TEXT_FONT_SIZE}DeskRange`]: 14,
			[`${FEATURE_ITEM_TEXT_FONT_SIZE}TabRange`]: 14,
			[`${FEATURE_ITEM_TEXT_FONT_SIZE}MobRange`]: 14,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: FEATURE_ITEM_TEXT_GAP,
		defaults: {
			[`${FEATURE_ITEM_TEXT_GAP}DeskRange`]: 10,
			[`${FEATURE_ITEM_TEXT_GAP}TabRange`]: 10,
			[`${FEATURE_ITEM_TEXT_GAP}MobRange`]: 10,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: FEATURE_ITEM_BOTTOM_GAP,
		defaults: {
			[`${FEATURE_ITEM_BOTTOM_GAP}DeskRange`]: 15,
			[`${FEATURE_ITEM_BOTTOM_GAP}TabRange`]: 15,
			[`${FEATURE_ITEM_BOTTOM_GAP}MobRange`]: 15,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: BUTTON_FONT_SIZE,
		defaults: {
			[`${BUTTON_FONT_SIZE}DeskRange`]: 14,
			[`${BUTTON_FONT_SIZE}TabRange`]: 14,
			[`${BUTTON_FONT_SIZE}MobRange`]: 14,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: BUTTON_BORDER_RADIUS,
		defaults: {
			[`${BUTTON_BORDER_RADIUS}DeskRange`]: 5,
			[`${BUTTON_BORDER_RADIUS}TabRange`]: 5,
			[`${BUTTON_BORDER_RADIUS}MobRange`]: 5,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: BUTTON_PADDING,
		defaults: {
			[`${BUTTON_PADDING}DeskRange`]: 15,
			[`${BUTTON_PADDING}TabRange`]: 15,
			[`${BUTTON_PADDING}MobRange`]: 15,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: BADGE_FONT_SIZE,
		defaults: {
			[`${BADGE_FONT_SIZE}DeskRange`]: 11,
			[`${BADGE_FONT_SIZE}TabRange`]: 11,
			[`${BADGE_FONT_SIZE}MobRange`]: 11,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: BADGE_HORIZONTAL_PADDING,
		defaults: {
			[`${BADGE_HORIZONTAL_PADDING}DeskRange`]: 10,
			[`${BADGE_HORIZONTAL_PADDING}TabRange`]: 10,
			[`${BADGE_HORIZONTAL_PADDING}MobRange`]: 10,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: BADGE_VERTICAL_PADDING,
		defaults: {
			[`${BADGE_VERTICAL_PADDING}DeskRange`]: 4,
			[`${BADGE_VERTICAL_PADDING}TabRange`]: 4,
			[`${BADGE_VERTICAL_PADDING}MobRange`]: 4,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_PADDING,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_BORDER_RADIUS,
		defaults: {},
	}),
};

export default attributes;
