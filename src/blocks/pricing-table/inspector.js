/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	CardDivider,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

import './editor.scss';
import aligns from '../../options/align';
const { ResRangleControl, ColorControl, Alignment } = Controls;
const {
	PLAN_FONT_SIZE,
	PRICE_FONT_SIZE,
	USERCOUNT_FONT_SIZE,
	DURATION_FONT_SIZE,
	BADGE_FONT_SIZE,
	BADGE_BORDER_RADIUS,
	BADGE_HORIZONTAL_PADDING,
	BADGE_VERTICAL_PADDING,
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
	ITEM_BORDER_RADIUS,
	ITEM_PADDING,
} = Constants;

import objAttributes from './attributes';
import TabPanelControl from '../../controls/tab-panel';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		style,
		pricingPlan,
		price,
		userCount,
		duration,
		titleTag,
		titleColor,
		priceColor,
		userCountColor,
		durationColor,
		featureTitle,
		featureSubTitle,
		textValues,
		buttonText,
		buttonLink,
		newTab,
		badgeText,
		showBadge,
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
		itemBgColor,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	const onChangeText = (newValue, index) => {
		const updatedValues = [...textValues];
		updatedValues[index] = newValue;
		setAttributes({ textValues: updatedValues });
	};

	// Function to add a new text field
	const addTextField = () => {
		const updatedValues = [...textValues, ''];
		setAttributes({ textValues: updatedValues });
	};

	// Function to remove a text field
	const removeTextField = (index) => {
		const updatedValues = [...textValues];
		updatedValues.splice(index, 1);
		setAttributes({ textValues: updatedValues });
	};
	return (
		<InspectorControls>
			<Fragment>
				<PanelBody
					title={__('Layout Style', 'bdt-pricing-plan')}
					initialOpen={true}
				>
					<SelectControl
						label={__('Select Layout Style', 'bdt-pricing-plan')}
						value={style}
						options={[
							{
								label: __('Style One', 'bdt-pricing-plan'),
								value: 'style-1',
							},
							{
								label: __('Style Two', 'bdt-pricing-plan'),
								value: 'style-2',
							},
						]}
						onChange={(size) => setAttributes({ style: size })}
					/>
				</PanelBody>
				<PanelBody
					title={__('Item Box', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<ColorControl
						label={__('Background Color', 'bdt-pricing-plan')}
						color={itemBgColor}
						colorName="itemBgColor"
						onChange={setAttributes}
					/>
					<ResRangleControl
						label={__('Border Radius', 'bdt-pricing-plan')}
						controlName={ITEM_BORDER_RADIUS}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ResRangleControl
						label={__('Padding', 'bdt-pricing-plan')}
						controlName={ITEM_PADDING}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
				</PanelBody>
				<PanelBody
					title={__('Plan Title', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<TextControl
						label={__('Title', 'bdt-pricing-plan')}
						onChange={(value) =>
							setAttributes({ pricingPlan: value })
						}
						value={pricingPlan}
					/>
					<SelectControl
						label={__('Select Tag', 'bdt-team-member')}
						options={[
							{ label: 'H1', value: 'h1' },
							{ label: 'H2', value: 'h2' },
							{ label: 'H3', value: 'h3' },
							{ label: 'H4', value: 'h4' },
							{ label: 'H5', value: 'h5' },
							{ label: 'H6', value: 'h6' },
							{ label: 'P', value: 'p' },
							{ label: 'Div', value: 'div' },
						]}
						onChange={(value) => {
							setAttributes({ titleTag: value });
						}}
						value={titleTag}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Font Size', 'bdt-pricing-plan')}
						controlName={PLAN_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ColorControl
						label={__('Color', 'bdt-pricing-plan')}
						color={titleColor}
						colorName="titleColor"
						onChange={setAttributes}
					/>
				</PanelBody>
				<PanelBody
					title={__('Price', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<TextControl
						label={__('Price', 'bdt-pricing-plan')}
						onChange={(value) => setAttributes({ price: value })}
						value={price}
					/>
					<ResRangleControl
						label={__('Font Size', 'bdt-pricing-plan')}
						controlName={PRICE_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ColorControl
						label={__('Color', 'bdt-pricing-plan')}
						color={priceColor}
						colorName="priceColor"
						onChange={setAttributes}
					/>
					<CardDivider />
					<TextControl
						label={__('User Count', 'bdt-pricing-plan')}
						onChange={(value) =>
							setAttributes({ userCount: value })
						}
						value={userCount}
					/>
					<ResRangleControl
						label={__('Font Size', 'bdt-pricing-plan')}
						controlName={USERCOUNT_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ColorControl
						label={__('Color', 'bdt-pricing-plan')}
						color={userCountColor}
						colorName="userCountColor"
						onChange={setAttributes}
					/>
					<CardDivider />
					<TextControl
						label={__('Duration', 'bdt-pricing-plan')}
						onChange={(value) => setAttributes({ duration: value })}
						value={duration}
					/>
					<ResRangleControl
						label={__('Font Size', 'bdt-pricing-plan')}
						controlName={DURATION_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ColorControl
						label={__('Color', 'bdt-pricing-plan')}
						color={durationColor}
						colorName="durationColor"
						onChange={setAttributes}
					/>
				</PanelBody>
				<PanelBody
					title={__('Features', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<TabPanelControl
						normalComponents={
							<Fragment>
								<TextControl
									label={__(
										'Feature Title',
										'bdt-pricing-plan'
									)}
									onChange={(value) =>
										setAttributes({ featureTitle: value })
									}
									value={featureTitle}
								/>
								<TextControl
									label={__(
										'Feature Sub Title',
										'bdt-pricing-plan'
									)}
									onChange={(value) =>
										setAttributes({
											featureSubTitle: value,
										})
									}
									value={featureSubTitle}
								/>
								<CardDivider />
								<p className="bdt-features-title">
									{__('Feature Items', 'bdt-pricing-plan')}
								</p>
								<div>
									{textValues &&
										textValues.map((value, index) => (
											<div
												key={index}
												className="bdt-feature-wrap"
											>
												<TextControl
													value={value}
													onChange={(newValue) =>
														onChangeText(
															newValue,
															index
														)
													}
													label={`Field ${index + 1}`}
												/>
												<button
													onClick={() =>
														removeTextField(index)
													}
													className="bdt-feature-remove"
												>
													{__(
														'Remove',
														'bdt-pricing-plan'
													)}
												</button>
											</div>
										))}
									<button
										onClick={addTextField}
										className="bdt-feature-add"
									>
										{__('Add Feature', 'bdt-pricing-plan')}
									</button>
								</div>
							</Fragment>
						}
						hoverComponents={
							<Fragment>
								<p className="bdt-features-title">
									{__('Feature Title', 'bdt-pricing-plan')}
								</p>
								<ResRangleControl
									label={__('Font Size', 'bdt-pricing-plan')}
									controlName={FEATURE_TITLE_FONT_SIZE}
									objAttrs={objAttrs}
									noUnits={false}
									min={0}
									max={100}
								/>
								<ColorControl
									label={__('Color', 'bdt-pricing-plan')}
									color={featureTitleColor}
									colorName="featureTitleColor"
									onChange={setAttributes}
								/>
								<CardDivider />
								<p className="bdt-features-title">
									{__(
										'Feature Sub Title',
										'bdt-pricing-plan'
									)}
								</p>
								<ResRangleControl
									label={__('Font Size', 'bdt-pricing-plan')}
									controlName={FEATURE_SUB_TITLE_FONT_SIZE}
									objAttrs={objAttrs}
									noUnits={false}
									min={0}
									max={100}
								/>
								<ColorControl
									label={__('Color', 'bdt-pricing-plan')}
									color={featureSubtitleColor}
									colorName="featureSubtitleColor"
									onChange={setAttributes}
								/>
								<CardDivider />
								<p className="bdt-features-title">
									{__('Feature Icon', 'bdt-pricing-plan')}
								</p>
								<ResRangleControl
									label={__('Icon Size', 'bdt-pricing-plan')}
									controlName={FEATURE_ICON_SIZE}
									objAttrs={objAttrs}
									noUnits={false}
									min={0}
									max={100}
								/>
								<ResRangleControl
									label={__(
										'Icon Round Size',
										'bdt-pricing-plan'
									)}
									controlName={FEATURE_ICON_ROUND_SIZE}
									objAttrs={objAttrs}
									noUnits={false}
									min={0}
									max={100}
								/>
								<ColorControl
									label={__('Color', 'bdt-pricing-plan')}
									color={featureIconColor}
									colorName="featureIconColor"
									onChange={setAttributes}
								/>
								<ColorControl
									label={__(
										'Background Color',
										'bdt-pricing-plan'
									)}
									color={featureIconBgColor}
									colorName="featureIconBgColor"
									onChange={setAttributes}
								/>
								<CardDivider />
								<p className="bdt-features-title">
									{__(
										'Feature Item Text',
										'bdt-pricing-plan'
									)}
								</p>
								<ResRangleControl
									label={__('Font Size', 'bdt-pricing-plan')}
									controlName={FEATURE_ITEM_TEXT_FONT_SIZE}
									objAttrs={objAttrs}
									noUnits={false}
									min={0}
									max={100}
								/>
								<ColorControl
									label={__('Color', 'bdt-pricing-plan')}
									color={featureItemTextColor}
									colorName="featureItemTextColor"
									onChange={setAttributes}
								/>
								<CardDivider />
								<ResRangleControl
									label={__(
										'Gap Between Icon & Text',
										'bdt-pricing-plan'
									)}
									controlName={FEATURE_ITEM_TEXT_GAP}
									objAttrs={objAttrs}
									noUnits={false}
									min={0}
									max={100}
								/>
								<ResRangleControl
									label={__(
										'Item Bottom Gap',
										'bdt-pricing-plan'
									)}
									controlName={FEATURE_ITEM_BOTTOM_GAP}
									objAttrs={objAttrs}
									noUnits={false}
									min={0}
									max={100}
								/>
							</Fragment>
						}
					/>
				</PanelBody>
				<PanelBody
					title={__('Badge', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Show Badge', 'bdt-team-member')}
						checked={showBadge}
						onChange={() =>
							setAttributes({
								showBadge: !showBadge,
							})
						}
					/>
					{showBadge && (
						<Fragment>
							<TextControl
								label={__('Badge Text', 'bdt-pricing-plan')}
								onChange={(value) =>
									setAttributes({ badgeText: value })
								}
								value={badgeText}
							/>
							<ResRangleControl
								label={__('Font Size', 'bdt-pricing-plan')}
								controlName={BADGE_FONT_SIZE}
								objAttrs={objAttrs}
								noUnits={false}
								min={0}
								max={100}
							/>
							<ColorControl
								label={__('Color', 'bdt-pricing-plan')}
								color={badgeColor}
								colorName="badgeColor"
								onChange={setAttributes}
							/>
							<ColorControl
								label={__(
									'Background Color',
									'bdt-pricing-plan'
								)}
								color={badgeBgColor}
								colorName="badgeBgColor"
								onChange={setAttributes}
							/>
							<ResRangleControl
								label={__('Border Radius', 'bdt-pricing-plan')}
								controlName={BADGE_BORDER_RADIUS}
								objAttrs={objAttrs}
								noUnits={false}
								min={0}
								max={100}
							/>
							<ResRangleControl
								label={__(
									'Horizontal Padding',
									'bdt-pricing-plan'
								)}
								controlName={BADGE_HORIZONTAL_PADDING}
								objAttrs={objAttrs}
								noUnits={false}
								min={0}
								max={100}
							/>
							<ResRangleControl
								label={__(
									'Vertical Padding',
									'bdt-pricing-plan'
								)}
								controlName={BADGE_VERTICAL_PADDING}
								objAttrs={objAttrs}
								noUnits={false}
								min={0}
								max={100}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelBody
					title={__('Button', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<TextControl
						label={__('Button Text', 'bdt-pricing-plan')}
						onChange={(value) =>
							setAttributes({ buttonText: value })
						}
						value={buttonText}
					/>
					<ResRangleControl
						label={__('Font Size', 'bdt-pricing-plan')}
						controlName={BUTTON_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ColorControl
						label={__('Color', 'bdt-pricing-plan')}
						color={buttonColor}
						colorName="buttonColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__('Background Color', 'bdt-pricing-plan')}
						color={buttonBgColor}
						colorName="buttonBgColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__('Hover Color', 'bdt-pricing-plan')}
						color={buttonHoverColor}
						colorName="buttonHoverColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__('Hover Background Color', 'bdt-pricing-plan')}
						color={buttonHoverBgColor}
						colorName="buttonHoverBgColor"
						onChange={setAttributes}
					/>
					<ResRangleControl
						label={__('Border Radius', 'bdt-pricing-plan')}
						controlName={BUTTON_BORDER_RADIUS}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ResRangleControl
						label={__('Padding', 'bdt-pricing-plan')}
						controlName={BUTTON_PADDING}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<TextControl
						label={__('Button Link', 'bdt-pricing-plan')}
						onChange={(value) =>
							setAttributes({ buttonLink: value })
						}
						value={buttonLink}
					/>
					<ToggleControl
						label={__('Open in a new tab', 'bdt-team-member')}
						checked={newTab}
						onChange={() =>
							setAttributes({
								newTab: !newTab,
							})
						}
					/>
				</PanelBody>
			</Fragment>
		</InspectorControls>
	);
};

export default Inspector;
