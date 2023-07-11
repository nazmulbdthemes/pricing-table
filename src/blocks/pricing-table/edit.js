/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';
const { Fragment, useEffect } = wp.element;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';
import './style.scss';
import * as Constants from './constants';
const {
	PLAN_FONT_SIZE,
	PRICE_FONT_SIZE,
	USERCOUNT_FONT_SIZE,
	DURATION_FONT_SIZE,
	ITEM_PADDING,
	ITEM_BORDER_RADIUS,
	BADGE_FONT_SIZE,
	BADGE_BORDER_RADIUS,
	BADGE_HORIZONTAL_PADDING,
	BADGE_VERTICAL_PADDING,
	FEATURE_TITLE_FONT_SIZE,
	FEATURE_SUB_TITLE_FONT_SIZE,
	FEATURE_ICON_SIZE,
	FEATURE_ICON_ROUND_SIZE,
	FEATURE_ITEM_TEXT_GAP,
	FEATURE_ITEM_BOTTOM_GAP,
	FEATURE_ITEM_TEXT_FONT_SIZE,
	BUTTON_FONT_SIZE,
	BUTTON_PADDING,
	BUTTON_BORDER_RADIUS,
} = Constants;

// Edit Function
export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		style,
		blockStyle,
		pricingPlan,
		price,
		userCount,
		duration,
		titleTag,
		titleColor,
		priceColor,
		userCountColor,
		durationColor,
		itemBgColor,
		featureTitle,
		featureSubTitle,
		featureContents,
		buttonText,
		buttonLink,
		newTab,
		showBadge,
		badgeText,
		badgeBgColor,
		badgeColor,
		featureTitleColor,
		featureSubtitleColor,
		featureIconColor,
		featureIconBgColor,
		featureItemTextColor,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
	} = attributes;
	// unique id
	useEffect(() => {
		setAttributes({
			uniqueId: `bdt-pricing-table-blocks-${clientId.slice(0, 8)}`,
		});
	}, []);

	// function to convert object to css
	const convertToCss = (obj) => {
		let cssResult;
		Object.keys(obj).reduce((cssString, key) => {
			// change key to css property
			const cssProperty = key.replace(
				/[A-Z]/g,
				(match) => `-${match.toLowerCase()}`
			);
			cssResult = `${cssString}${cssProperty}:${obj[key]};`;
			return cssResult;
		}, '');
		return cssResult;
	};

	// Plan Font Size
	const deskPricePlanFont = attributes[`${PLAN_FONT_SIZE}DeskRange`];
	const tabPricePlanFont = attributes[`${PLAN_FONT_SIZE}TabRange`];
	const mobPricePlanFont = attributes[`${PLAN_FONT_SIZE}MobRange`];
	const pricePlanUnit = attributes[`${PLAN_FONT_SIZE}Unit`];
	// Price Font Size
	const deskPriceFont = attributes[`${PRICE_FONT_SIZE}DeskRange`];
	const tabPriceFont = attributes[`${PRICE_FONT_SIZE}TabRange`];
	const mobPriceFont = attributes[`${PRICE_FONT_SIZE}MobRange`];
	const priceFontUnit = attributes[`${PRICE_FONT_SIZE}Unit`];
	// User Count Font Size
	const deskUserFont = attributes[`${USERCOUNT_FONT_SIZE}DeskRange`];
	const tabUserFont = attributes[`${USERCOUNT_FONT_SIZE}TabRange`];
	const mobUserFont = attributes[`${USERCOUNT_FONT_SIZE}MobRange`];
	const userFontUnit = attributes[`${USERCOUNT_FONT_SIZE}Unit`];
	// Duration Font Size
	const deskDurationSize = attributes[`${DURATION_FONT_SIZE}DeskRange`];
	const tabDurationSize = attributes[`${DURATION_FONT_SIZE}TabRange`];
	const mobDurationSize = attributes[`${DURATION_FONT_SIZE}MobRange`];
	const durationSizeUnit = attributes[`${DURATION_FONT_SIZE}Unit`];
	// Feature Title Font Size
	const deskFeatureTitleSize =
		attributes[`${FEATURE_TITLE_FONT_SIZE}DeskRange`];
	const tabFeatureTitleSize =
		attributes[`${FEATURE_TITLE_FONT_SIZE}TabRange`];
	const mobFeatureTitleSize =
		attributes[`${FEATURE_TITLE_FONT_SIZE}MobRange`];
	const featureTitleSizeUnit = attributes[`${FEATURE_TITLE_FONT_SIZE}Unit`];
	// Feature Sub Title Font Size
	const deskFeatureSubTitleSize =
		attributes[`${FEATURE_SUB_TITLE_FONT_SIZE}DeskRange`];
	const tabFeatureSubTitleSize =
		attributes[`${FEATURE_SUB_TITLE_FONT_SIZE}TabRange`];
	const mobFeatureSubTitleSize =
		attributes[`${FEATURE_SUB_TITLE_FONT_SIZE}MobRange`];
	const featureSubTitleSizeUnit =
		attributes[`${FEATURE_SUB_TITLE_FONT_SIZE}Unit`];
	// Feature Icon Size
	const deskFeatureIconSize = attributes[`${FEATURE_ICON_SIZE}DeskRange`];
	const tabFeatureIconSize = attributes[`${FEATURE_ICON_SIZE}TabRange`];
	const mobFeatureIconSize = attributes[`${FEATURE_ICON_SIZE}MobRange`];
	const featureIconSizeUnit = attributes[`${FEATURE_ICON_SIZE}Unit`];
	// Feature Icon Round Size
	const deskFeatureIconRoundSize =
		attributes[`${FEATURE_ICON_ROUND_SIZE}DeskRange`];
	const tabFeatureIconRoundSize =
		attributes[`${FEATURE_ICON_ROUND_SIZE}TabRange`];
	const mobFeatureIconRoundSize =
		attributes[`${FEATURE_ICON_ROUND_SIZE}MobRange`];
	const featureIconRoundSizeUnit =
		attributes[`${FEATURE_ICON_ROUND_SIZE}Unit`];
	// Feature Text Font Size
	const deskFeatureItemSize =
		attributes[`${FEATURE_ITEM_TEXT_FONT_SIZE}DeskRange`];
	const tabFeatureItemSize =
		attributes[`${FEATURE_ITEM_TEXT_FONT_SIZE}TabRange`];
	const mobFeatureItemSize =
		attributes[`${FEATURE_ITEM_TEXT_FONT_SIZE}MobRange`];
	const featureItemSizeUnit =
		attributes[`${FEATURE_ITEM_TEXT_FONT_SIZE}Unit`];
	// Feature Item Text Gap
	const deskFeatureItemGap = attributes[`${FEATURE_ITEM_TEXT_GAP}DeskRange`];
	const tabFeatureItemGap = attributes[`${FEATURE_ITEM_TEXT_GAP}TabRange`];
	const mobFeatureItemGap = attributes[`${FEATURE_ITEM_TEXT_GAP}MobRange`];
	const featureItemGapUnit = attributes[`${FEATURE_ITEM_TEXT_GAP}Unit`];
	// Feature Item Bottom Gap
	const deskFeatureItemBottomGap =
		attributes[`${FEATURE_ITEM_BOTTOM_GAP}DeskRange`];
	const tabFeatureItemBottomGap =
		attributes[`${FEATURE_ITEM_BOTTOM_GAP}TabRange`];
	const mobFeatureItemBottomGap =
		attributes[`${FEATURE_ITEM_BOTTOM_GAP}MobRange`];
	const featureItemBottomGapUnit =
		attributes[`${FEATURE_ITEM_BOTTOM_GAP}Unit`];
	// Button Font Size
	const deskButtonFontSize = attributes[`${BUTTON_FONT_SIZE}DeskRange`];
	const tabButtonFontSize = attributes[`${BUTTON_FONT_SIZE}TabRange`];
	const mobButtonFontSize = attributes[`${BUTTON_FONT_SIZE}MobRange`];
	const buttonFontSizeUnit = attributes[`${BUTTON_FONT_SIZE}Unit`];
	// Button Border Radius
	const deskButtonBorderRadius =
		attributes[`${BUTTON_BORDER_RADIUS}DeskRange`];
	const tabButtonBorderRadius = attributes[`${BUTTON_BORDER_RADIUS}TabRange`];
	const mobButtonBorderRadius = attributes[`${BUTTON_BORDER_RADIUS}MobRange`];
	const buttonBorderRadiusUnit = attributes[`${BUTTON_BORDER_RADIUS}Unit`];
	// Button Padding
	const deskButtonPadding = attributes[`${BUTTON_PADDING}DeskRange`];
	const tabButtonPadding = attributes[`${BUTTON_PADDING}TabRange`];
	const mobButtonPadding = attributes[`${BUTTON_PADDING}MobRange`];
	const buttonPaddingUnit = attributes[`${BUTTON_PADDING}Unit`];
	// Badge Font Size
	const deskBadgeFontSize = attributes[`${BADGE_FONT_SIZE}DeskRange`];
	const tabBadgeFontSize = attributes[`${BADGE_FONT_SIZE}TabRange`];
	const mobBadgeFontSize = attributes[`${BADGE_FONT_SIZE}MobRange`];
	const badgeFontSizeUnit = attributes[`${BADGE_FONT_SIZE}Unit`];
	// Badge Border Radius
	const deskBadgeBorderRadius = attributes[`${BADGE_BORDER_RADIUS}DeskRange`];
	const tabBadgeBorderRadius = attributes[`${BADGE_BORDER_RADIUS}TabRange`];
	const mobBadgeBorderRadius = attributes[`${BADGE_BORDER_RADIUS}MobRange`];
	const badgeBorderRadiusUnit = attributes[`${BADGE_BORDER_RADIUS}Unit`];
	// Badge Horizontal Padding
	const deskBadgeHorizontalPadding =
		attributes[`${BADGE_HORIZONTAL_PADDING}DeskRange`];
	const tabBadgeHorizontalPadding =
		attributes[`${BADGE_HORIZONTAL_PADDING}TabRange`];
	const mobBadgeHorizontalPadding =
		attributes[`${BADGE_HORIZONTAL_PADDING}MobRange`];
	const badgeHorizontalPaddingUnit =
		attributes[`${BADGE_HORIZONTAL_PADDING}Unit`];
	// Badge Vertical Padding
	const deskBadgeVerticalPadding =
		attributes[`${BADGE_VERTICAL_PADDING}DeskRange`];
	const tabBadgeVerticalPadding =
		attributes[`${BADGE_VERTICAL_PADDING}TabRange`];
	const mobBadgeVerticalPadding =
		attributes[`${BADGE_VERTICAL_PADDING}MobRange`];
	const badgeVerticalPaddingUnit =
		attributes[`${BADGE_VERTICAL_PADDING}Unit`];
	// Item Padding
	const deskItemPadding = attributes[`${ITEM_PADDING}DeskRange`];
	const tabItemPadding = attributes[`${ITEM_PADDING}TabRange`];
	const mobItemPadding = attributes[`${ITEM_PADDING}MobRange`];
	const itemPaddingUnit = attributes[`${ITEM_PADDING}Unit`];
	// Item Border Radius
	const deskItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}DeskRange`];
	const tabItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}TabRange`];
	const mobItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}MobRange`];
	const itemBorderRadiusUnit = attributes[`${ITEM_BORDER_RADIUS}Unit`];

	const itemDeskStyles = {
		...(deskItemPadding !== undefined &&
			deskItemPadding !== '' && {
				padding: `${deskItemPadding}${itemPaddingUnit}`,
			}),
		...(deskItemBorderRadius !== undefined &&
			deskItemBorderRadius !== '' && {
				borderRadius: `${deskItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
		...(itemBgColor !== undefined &&
			itemBgColor !== '' && {
				background: `${itemBgColor}`,
			}),
	};
	const itemTabStyles = {
		...(tabItemPadding !== undefined &&
			tabItemPadding !== '' && {
				padding: `${tabItemPadding}${itemPaddingUnit}`,
			}),
		...(tabItemBorderRadius !== undefined &&
			tabItemBorderRadius !== '' && {
				borderRadius: `${tabItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
	};
	const itemMobStyles = {
		...(mobItemPadding !== undefined &&
			mobItemPadding !== '' && {
				padding: `${mobItemPadding}${itemPaddingUnit}`,
			}),
		...(mobItemBorderRadius !== undefined &&
			mobItemBorderRadius !== '' && {
				borderRadius: `${mobItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
	};

	const deskStyles = `
		${
			Object.keys(itemDeskStyles).length > 0
				? `.${uniqueId} .bdt-container .bdt-item{${convertToCss(
						itemDeskStyles
				  )}}`
				: ' '
		}
		${
			deskPricePlanFont !== undefined && deskPricePlanFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-package-title {
					font-size: ${deskPricePlanFont}${pricePlanUnit};
				}`
				: ' '
		}
		${
			titleColor !== undefined && titleColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-package-title {
				color: ${titleColor};
			}`
				: ' '
		}
		${
			priceColor !== undefined && priceColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-price {
				color: ${priceColor};
			}`
				: ' '
		}
		${
			deskPriceFont !== undefined && deskPriceFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-price {
				font-size: ${deskPriceFont}${priceFontUnit};
			}`
				: ' '
		}
		${
			userCountColor !== undefined && userCountColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-user-month .bdt-user-text {
				color: ${userCountColor};
			}`
				: ' '
		}
		${
			deskUserFont !== undefined && deskUserFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-user-month .bdt-user-text {
				font-size: ${deskUserFont}${userFontUnit};
			}`
				: ' '
		}
		${
			deskDurationSize !== undefined && deskDurationSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-user-month .bdt-time-text {
				font-size: ${deskDurationSize}${durationSizeUnit};
			}`
				: ' '
		}
		${
			durationColor !== undefined && durationColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-user-month .bdt-time-text {
				color: ${durationColor};
			}`
				: ' '
		}
		${
			featureTitleColor !== undefined && featureTitleColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .bdt-features-title {
				color: ${featureTitleColor};
			}`
				: ' '
		}
		${
			deskFeatureTitleSize !== undefined && deskFeatureTitleSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .bdt-features-title {
				font-size: ${deskFeatureTitleSize}${featureTitleSizeUnit};
			}`
				: ' '
		}
		${
			featureSubtitleColor !== undefined && featureSubtitleColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .bdt-features-desc {
				color: ${featureSubtitleColor};
			}`
				: ' '
		}
		${
			deskFeatureSubTitleSize !== undefined &&
			deskFeatureSubTitleSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .bdt-features-desc {
				font-size: ${deskFeatureSubTitleSize}${featureSubTitleSizeUnit};
			}`
				: ' '
		}
		${
			featureIconColor !== undefined && featureIconColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-check-icon {
				color: ${featureIconColor};
			}`
				: ' '
		}
		${
			featureIconBgColor !== undefined && featureIconBgColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-check-icon {
				background: ${featureIconBgColor};
			}`
				: ' '
		}
		${
			deskFeatureIconSize !== undefined && deskFeatureIconSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-check-icon {
				font-size: ${deskFeatureIconSize}${featureIconSizeUnit};
			}`
				: ' '
		}
		${
			deskFeatureIconRoundSize !== undefined &&
			deskFeatureIconRoundSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-check-icon {
				width: ${deskFeatureIconRoundSize}${featureIconRoundSizeUnit};
				height: ${deskFeatureIconRoundSize}${featureIconRoundSizeUnit};
			}`
				: ' '
		}
		${
			featureItemTextColor !== undefined && featureItemTextColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-feature-item {
				color: ${featureItemTextColor};
			}`
				: ' '
		}
		${
			deskFeatureItemSize !== undefined && deskFeatureItemSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-feature-item {
				font-size: ${deskFeatureItemSize}${featureItemSizeUnit};
			}`
				: ' '
		}
		${
			deskFeatureItemGap !== undefined && deskFeatureItemGap !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features li {
				column-gap: ${deskFeatureItemGap}${featureItemGapUnit};
			}`
				: ' '
		}
		${
			deskFeatureItemBottomGap !== undefined &&
			deskFeatureItemBottomGap !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features {
				row-gap: ${deskFeatureItemBottomGap}${featureItemBottomGapUnit};
			}`
				: ' '
		}
		${
			buttonColor !== undefined && buttonColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				color: ${buttonColor};
			}`
				: ' '
		}
		${
			buttonBgColor !== undefined && buttonBgColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				background: ${buttonBgColor};
			}`
				: ' '
		}
		${
			buttonHoverColor !== undefined && buttonHoverColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a:hover {
				color: ${buttonHoverColor};
			}`
				: ' '
		}
		${
			buttonHoverBgColor !== undefined && buttonHoverBgColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a:hover {
				background: ${buttonHoverBgColor};
			}`
				: ' '
		}
		${
			deskButtonFontSize !== undefined && deskButtonFontSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				font-size: ${deskButtonFontSize}${buttonFontSizeUnit};
			}`
				: ' '
		}
		${
			deskButtonBorderRadius !== undefined &&
			deskButtonBorderRadius !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				border-radius: ${deskButtonBorderRadius}${buttonBorderRadiusUnit};
			}`
				: ' '
		}
		${
			deskButtonPadding !== undefined && deskButtonPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				padding: ${deskButtonPadding}${buttonPaddingUnit};
			}`
				: ' '
		}
		${
			badgeColor !== undefined && badgeColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				color: ${badgeColor};
			}`
				: ' '
		}
		${
			badgeBgColor !== undefined && badgeBgColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				background: ${badgeBgColor};
			}`
				: ' '
		}
		${
			deskBadgeFontSize !== undefined && deskBadgeFontSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				font-size: ${deskBadgeFontSize}${badgeFontSizeUnit};
			}`
				: ' '
		}
		${
			deskBadgeBorderRadius !== undefined && deskBadgeBorderRadius !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				border-radius: ${deskBadgeBorderRadius}${badgeBorderRadiusUnit};
			}`
				: ' '
		}
		${
			deskBadgeHorizontalPadding !== undefined &&
			deskBadgeHorizontalPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				padding-left: ${deskBadgeHorizontalPadding}${badgeHorizontalPaddingUnit};
				padding-right: ${deskBadgeHorizontalPadding}${badgeHorizontalPaddingUnit};
			}`
				: ' '
		}
		${
			deskBadgeVerticalPadding !== undefined &&
			deskBadgeVerticalPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				padding-top: ${deskBadgeVerticalPadding}${badgeVerticalPaddingUnit};
				padding-bottom: ${deskBadgeVerticalPadding}${badgeVerticalPaddingUnit};
			}`
				: ' '
		}
		${
			itemBgColor !== undefined && itemBgColor !== ''
				? `.${uniqueId} .bdt-container .bdt-item {
				background: ${itemBgColor};
			}`
				: ''
		}
	`;
	const tabStyles = `
		${
			Object.keys(itemTabStyles).length > 0
				? `.${uniqueId} .bdt-container .bdt-item{${convertToCss(
						itemTabStyles
				  )}}`
				: ' '
		}
		${
			tabPricePlanFont !== undefined && tabPricePlanFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-package-title {
					font-size: $ tabPricePlanFont}${pricePlanUnit};
				}`
				: ' '
		}
		${
			tabPriceFont !== undefined && tabPriceFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-price {
				font-size: ${tabPriceFont}${priceFontUnit};
			}`
				: ' '
		}
		${
			tabUserFont !== undefined && tabUserFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-user-month .bdt-user-text {
				font-size: ${tabUserFont}${userFontUnit};
			}`
				: ' '
		}
		${
			tabDurationSize !== undefined && tabDurationSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-user-month .bdt-time-text {
				font-size: ${tabDurationSize}${durationSizeUnit};
			}`
				: ' '
		}
		${
			tabFeatureTitleSize !== undefined && tabFeatureTitleSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .bdt-features-title {
				font-size: ${tabFeatureTitleSize}${featureTitleSizeUnit};
			}`
				: ' '
		}
		${
			tabFeatureSubTitleSize !== undefined &&
			tabFeatureSubTitleSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .bdt-features-desc {
				font-size: ${tabFeatureSubTitleSize}${featureSubTitleSizeUnit};
			}`
				: ' '
		}
		${
			tabFeatureIconSize !== undefined && tabFeatureIconSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-check-icon {
				font-size: ${tabFeatureIconSize}${featureIconSizeUnit};
			}`
				: ' '
		}
		${
			tabFeatureIconRoundSize !== undefined &&
			tabFeatureIconRoundSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-check-icon {
				width: ${tabFeatureIconRoundSize}${featureIconRoundSizeUnit};
				height: ${tabFeatureIconRoundSize}${featureIconRoundSizeUnit};
			}`
				: ' '
		}
		${
			tabFeatureItemSize !== undefined && tabFeatureItemSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-feature-item {
				font-size: ${tabFeatureItemSize}${featureItemSizeUnit};
			}`
				: ' '
		}
		${
			tabFeatureItemGap !== undefined && tabFeatureItemGap !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features li {
				column-gap: ${tabFeatureItemGap}${featureItemGapUnit};
			}`
				: ' '
		}
		${
			tabFeatureItemBottomGap !== undefined &&
			tabFeatureItemBottomGap !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features {
				row-gap: ${tabFeatureItemBottomGap}${featureItemBottomGapUnit};
			}`
				: ' '
		}
		${
			tabButtonFontSize !== undefined && tabButtonFontSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				font-size: ${tabButtonFontSize}${buttonFontSizeUnit};
			}`
				: ' '
		}
		${
			tabButtonBorderRadius !== undefined && tabButtonBorderRadius !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				border-radius: ${tabButtonBorderRadius}${buttonBorderRadiusUnit};
			}`
				: ' '
		}
		${
			tabButtonPadding !== undefined && tabButtonPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				padding: ${tabButtonPadding}${buttonPaddingUnit};
			}`
				: ' '
		}
		${
			tabBadgeFontSize !== undefined && tabBadgeFontSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				font-size: ${tabBadgeFontSize}${badgeFontSizeUnit};
			}`
				: ' '
		}
		${
			tabBadgeBorderRadius !== undefined && tabBadgeBorderRadius !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				border-radius: ${tabBadgeBorderRadius}${badgeBorderRadiusUnit};
			}`
				: ' '
		}
		${
			tabBadgeHorizontalPadding !== undefined &&
			tabBadgeHorizontalPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				padding-left: ${tabBadgeHorizontalPadding}${badgeHorizontalPaddingUnit};
				padding-right: ${tabBadgeHorizontalPadding}${badgeHorizontalPaddingUnit};
			}`
				: ' '
		}
		${
			tabBadgeVerticalPadding !== undefined &&
			tabBadgeVerticalPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				padding-top: ${tabBadgeVerticalPadding}${badgeVerticalPaddingUnit};
				padding-bottom: ${tabBadgeVerticalPadding}${badgeVerticalPaddingUnit};
			}`
				: ' '
		}
	`;
	const mobStyles = `
		${
			Object.keys(itemMobStyles).length > 0
				? `.${uniqueId} .bdt-container .bdt-item{${convertToCss(
						itemMobStyles
				  )}}`
				: ' '
		}
		${
			mobPricePlanFont !== undefined && mobPricePlanFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-package-title {
					font-size: ${mobPricePlanFont}${pricePlanUnit};
				}`
				: ' '
		}
		${
			mobPriceFont !== undefined && mobPriceFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-price {
				font-size: ${mobPriceFont}${priceFontUnit};
			}`
				: ' '
		}
		${
			mobUserFont !== undefined && mobUserFont !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-user-month .bdt-user-text {
				font-size: ${mobUserFont}${userFontUnit};
			}`
				: ' '
		}
		${
			mobDurationSize !== undefined && mobDurationSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-price-info .bdt-user-month .bdt-time-text {
				font-size: ${mobDurationSize}${durationSizeUnit};
			}`
				: ' '
		}
		${
			mobFeatureTitleSize !== undefined && mobFeatureTitleSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .bdt-features-title {
				font-size: ${mobFeatureTitleSize}${featureTitleSizeUnit};
			}`
				: ' '
		}
		${
			mobFeatureSubTitleSize !== undefined &&
			mobFeatureSubTitleSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .bdt-features-desc {
				font-size: ${mobFeatureSubTitleSize}${featureSubTitleSizeUnit};
			}`
				: ' '
		}
		${
			mobFeatureIconSize !== undefined && mobFeatureIconSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-check-icon {
				font-size: ${mobFeatureIconSize}${featureIconSizeUnit};
			}`
				: ' '
		}
		${
			mobFeatureIconRoundSize !== undefined &&
			mobFeatureIconRoundSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-check-icon {
				width: ${mobFeatureIconRoundSize}${featureIconRoundSizeUnit};
				height: ${mobFeatureIconRoundSize}${featureIconRoundSizeUnit};
			}`
				: ' '
		}
		${
			mobFeatureItemSize !== undefined && mobFeatureItemSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features .bdt-feature-item {
				font-size: ${mobFeatureItemSize}${featureItemSizeUnit};
			}`
				: ' '
		}
		${
			mobFeatureItemGap !== undefined && mobFeatureItemGap !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features li {
				column-gap: ${mobFeatureItemGap}${featureItemGapUnit};
			}`
				: ' '
		}
		${
			mobFeatureItemBottomGap !== undefined &&
			mobFeatureItemBottomGap !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-features-info .features {
				row-gap: ${mobFeatureItemBottomGap}${featureItemBottomGapUnit};
			}`
				: ' '
		}
		${
			mobButtonFontSize !== undefined && mobButtonFontSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				font-size: ${mobButtonFontSize}${buttonFontSizeUnit};
			}`
				: ' '
		}
		${
			mobButtonBorderRadius !== undefined && mobButtonBorderRadius !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				border-radius: ${mobButtonBorderRadius}${buttonBorderRadiusUnit};
			}`
				: ' '
		}
		${
			mobButtonPadding !== undefined && mobButtonPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-link-btn a {
				padding: ${mobButtonPadding}${buttonPaddingUnit};
			}`
				: ' '
		}
		${
			mobBadgeFontSize !== undefined && mobBadgeFontSize !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				font-size: ${mobBadgeFontSize}${badgeFontSizeUnit};
			}`
				: ' '
		}
		${
			mobBadgeBorderRadius !== undefined && mobBadgeBorderRadius !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				border-radius: ${mobBadgeBorderRadius}${badgeBorderRadiusUnit};
			}`
				: ' '
		}
		${
			mobBadgeHorizontalPadding !== undefined &&
			mobBadgeHorizontalPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				padding-left: ${mobBadgeHorizontalPadding}${badgeHorizontalPaddingUnit};
				padding-right: ${mobBadgeHorizontalPadding}${badgeHorizontalPaddingUnit};
			}`
				: ' '
		}
		${
			mobBadgeVerticalPadding !== undefined &&
			mobBadgeVerticalPadding !== ''
				? `.${uniqueId} .bdt-container .bdt-item .bdt-head-content .bdt-popular-btn {
				padding-top: ${mobBadgeVerticalPadding}${badgeVerticalPaddingUnit};
				padding-bottom: ${mobBadgeVerticalPadding}${badgeVerticalPaddingUnit};
			}`
				: ' '
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: `${uniqueId} ${style}`,
				})}
			>
				<div className="bdt-container">
					<div className="bdt-item">
						<div className="bdt-head-content">
							<RichText
								tagName={titleTag}
								className="bdt-package-title"
								value={pricingPlan}
								onChange={(value) =>
									setAttributes({
										pricingPlan: value,
									})
								}
								placeholder={__(
									'Write pricing plan title…',
									'bdt-pricing-table'
								)}
							/>
							{showBadge && (
								<RichText
									tagName="div"
									className="bdt-popular-btn"
									value={badgeText}
									onChange={(value) =>
										setAttributes({
											badgeText: value,
										})
									}
									placeholder={__(
										'Badge…',
										'bdt-pricing-table'
									)}
								/>
							)}
							<div className="bdt-price-info">
								<div className="bdt-price">{price}</div>
								<div className="bdt-user-month">
									<span className="bdt-user-text">
										{userCount}
									</span>
									<span className="bdt-time-text">
										{duration}
									</span>
								</div>
							</div>
							<div className="bdt-link-btn">
								<RichText
									tagName="a"
									className="bdt-buy-btn"
									href={buttonLink}
									target={newTab && '_blank'}
									rel={
										newTab
											? 'noopener noreferrer'
											: 'noopener'
									}
									value={buttonText}
									onChange={(value) =>
										setAttributes({
											buttonText: value,
										})
									}
									placeholder={__(
										'Write button text…',
										'bdt-pricing-table'
									)}
								/>
							</div>
						</div>
						<div className="bdt-features-info">
							<RichText
								tagName="div"
								className="bdt-features-title"
								value={featureTitle}
								onChange={(value) =>
									setAttributes({
										featureTitle: value,
									})
								}
								placeholder={__(
									'Feature title here…',
									'bdt-pricing-table'
								)}
							/>
							<RichText
								tagName="div"
								className="bdt-features-desc"
								value={featureSubTitle}
								onChange={(value) =>
									setAttributes({
										featureSubTitle: value,
									})
								}
								placeholder={__(
									'Feature sub title here…',
									'bdt-pricing-table'
								)}
							/>
							<ul className="features">
								{featureContents &&
									featureContents.map((content, index) => (
										<li key={index}>
											<>
												<span
													key={index}
													className="bdt-check-icon"
												>
													<Dashicon icon="yes" />
												</span>

												<span
													key={index}
													className="bdt-feature-item"
												>
													{content}
												</span>
											</>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
