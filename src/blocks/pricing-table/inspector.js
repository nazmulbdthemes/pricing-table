/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	CardDivider,
	GradientPicker,
	TextControl,
} from '@wordpress/components';
const { Fragment } = wp.element;

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
	ICON_SIZE,
	ICON_ROUND_SIZE,
	ICON_GAP,
	ITEM_PADDING,
	ITEM_BORDER_RADIUS,
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
		titleColor,
		designationColor,
		contentBgColor,
		iconColor,
		iconBgNormalColor,
		iconBgGradientColor,
		textAlign,
		itemBgColor,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

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
					title={__('Pricing Plan', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<TextControl
						label={__('Title', 'bdt-pricing-plan')}
						onChange={(value) =>
							setAttributes({ pricingPlan: value })
						}
						value={pricingPlan}
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
					<CardDivider />
					<ResRangleControl
						label={__('Font Size', 'bdt-pricing-plan')}
						controlName={PLAN_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
				</PanelBody>
				<PanelBody
					title={__('Item Box', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Padding', 'bdt-pricing-plan')}
						controlName={ITEM_PADDING}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Border Radius', 'bdt-pricing-plan')}
						controlName={ITEM_BORDER_RADIUS}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<ColorControl
						label={__('Background Color', 'bdt-pricing-plan')}
						color={itemBgColor}
						colorName="itemBgColor"
						onChange={setAttributes}
					/>
				</PanelBody>
				<PanelBody
					title={__('Content', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Name Font Size', 'bdt-pricing-plan')}
						controlName={NAME_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Designation Font Size', 'bdt-pricing-plan')}
						controlName={DESG_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<Alignment
						label={__('Alignment', 'bdt-pricing-plan')}
						attribute={textAlign}
						attributeName="textAlign"
						setAttributes={setAttributes}
						options={aligns}
					/>
					<CardDivider />
					<ColorControl
						label={__('Title Color', 'bdt-pricing-plan')}
						color={titleColor}
						colorName="titleColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__('Designation Color', 'bdt-pricing-plan')}
						color={designationColor}
						colorName="designationColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__(
							'Content Background Color',
							'bdt-pricing-plan'
						)}
						color={contentBgColor}
						colorName="contentBgColor"
						onChange={setAttributes}
					/>
				</PanelBody>
				<PanelBody
					title={__('Social Profiles', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					<ColorControl
						label={__('Icon Color', 'bdt-pricing-plan')}
						color={iconColor}
						colorName="iconColor"
						onChange={setAttributes}
					/>
					<p className="bdt-icon-color-title">
						{__('Icon Background Color', 'bdt-pricing-plan')}
					</p>
					<TabPanelControl
						normalComponents={
							<Fragment>
								<ColorControl
									label={__(
										'Normal Background',
										'bdt-pricing-plan'
									)}
									color={iconBgNormalColor}
									colorName="iconBgNormalColor"
									onChange={setAttributes}
								/>
							</Fragment>
						}
						hoverComponents={
							<Fragment>
								<GradientPicker
									value={iconBgGradientColor}
									onChange={(value) =>
										setAttributes({
											iconBgGradientColor: value,
										})
									}
									gradients={[
										{
											name: 'Vivid cyan blue to vivid purple',
											gradient:
												'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
											slug: 'vivid-cyan-blue-to-vivid-purple',
										},
										{
											name: 'Light green cyan to vivid green cyan',
											gradient:
												'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
											slug: 'light-green-cyan-to-vivid-green-cyan',
										},
										{
											name: 'Luminous vivid amber to luminous vivid orange',
											gradient:
												'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
											slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
										},
										{
											name: 'Luminous vivid orange to vivid red',
											gradient:
												'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
											slug: 'luminous-vivid-orange-to-vivid-red',
										},
										{
											name: 'Very light gray to cyan bluish gray',
											gradient:
												'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
											slug: 'very-light-gray-to-cyan-bluish-gray',
										},
										{
											name: 'Cool to warm spectrum',
											gradient:
												'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
											slug: 'cool-to-warm-spectrum',
										},
									]}
								/>
							</Fragment>
						}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Icon Size', 'bdt-pricing-plan')}
						controlName={ICON_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ResRangleControl
						label={__('Icon Round Size', 'bdt-pricing-plan')}
						controlName={ICON_ROUND_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ResRangleControl
						label={__('Icon Gap', 'bdt-pricing-plan')}
						controlName={ICON_GAP}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
				</PanelBody>
			</Fragment>
		</InspectorControls>
	);
};

export default Inspector;
