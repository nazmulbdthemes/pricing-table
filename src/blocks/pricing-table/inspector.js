/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	CardDivider,
	Button,
	TextControl,
} from '@wordpress/components';
import { useState, Fragment } from '@wordpress/element';

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
		priceColor,
		userCountColor,
		durationColor,
		iconBgNormalColor,
		iconBgGradientColor,
		textAlign,
		itemBgColor,
		featureTitle,
		featureSubTitle,
		textValues,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	// const [texts, setTexts] = useState([
	// 	'Default Text',
	// 	'Default Text',
	// 	'Default Text',
	// ]); // State to store the array of texts

	// const updateText = (index, value) => {
	// 	const newtexts = [...texts];
	// 	newtexts[index] = value;
	// 	setTexts(newtexts);
	// };

	// const addText = () => {
	// 	const newtexts = [...texts, 'Default Text'];
	// 	setTexts(newtexts);
	// };

	// const removeText = (index) => {
	// 	const newtexts = [...texts];
	// 	newtexts.splice(index, 1);
	// 	setTexts(newtexts);
	// };

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
					<CardDivider />
				</PanelBody>
				<PanelBody
					title={__('Features', 'bdt-pricing-plan')}
					initialOpen={false}
				>
					{/* <PanelBody title="Texts" initialOpen={true}>
						{texts.map((text, index) => (
							<div key={index}>
								<TextControl
									value={text}
									onChange={(value) =>
										updateText(index, value)
									}
									label={`Text ${index + 1}`}
								/>
								<Button onClick={() => removeText(index)}>
									Remove
								</Button>
							</div>
						))}
						<Button isPrimary onClick={addText}>
							Add Text
						</Button>
					</PanelBody> */}
					<TextControl
						label={__('Feature Title', 'bdt-pricing-plan')}
						onChange={(value) =>
							setAttributes({ featureTitle: value })
						}
						value={featureTitle}
					/>
					<TextControl
						label={__('Feature Sub Title', 'bdt-pricing-plan')}
						onChange={(value) =>
							setAttributes({ featureSubTitle: value })
						}
						value={featureSubTitle}
					/>
					<div>
						{textValues.map((value, index) => (
							<div key={index}>
								<TextControl
									value={value}
									onChange={(newValue) =>
										onChangeText(newValue, index)
									}
								/>
								<button onClick={() => removeTextField(index)}>
									Remove
								</button>
							</div>
						))}
						<button onClick={addTextField}>Add</button>
					</div>
				</PanelBody>
			</Fragment>
		</InspectorControls>
	);
};

export default Inspector;
