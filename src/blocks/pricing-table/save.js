/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';

export default function save({ attributes }) {
	const {
		uniqueId,
		style,
		pricingPlan,
		titleTag,
		showBadge,
		badgeText,
		price,
		userCount,
		duration,
		buttonLink,
		buttonText,
		newTab,
		featureTitle,
		featureSubTitle,
		featureContents,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `${uniqueId} ${style}`,
			})}
		>
			<div className="bdt-container">
				<div className="bdt-item">
					<div className="bdt-head-content">
						<RichText.Content
							tagName={titleTag}
							className="bdt-package-title"
							value={pricingPlan}
						/>
						{showBadge && (
							<RichText.Content
								tagName="div"
								className="bdt-popular-btn"
								value={badgeText}
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
							<RichText.Content
								tagName="a"
								className="bdt-buy-btn"
								href={buttonLink}
								target={newTab && '_blank'}
								rel={
									newTab ? 'noopener noreferrer' : 'noopener'
								}
								value={buttonText}
							/>
						</div>
					</div>
					<div className="bdt-features-info">
						<RichText.Content
							tagName="div"
							className="bdt-features-title"
							value={featureTitle}
						/>
						<RichText.Content
							tagName="div"
							className="bdt-features-desc"
							value={featureSubTitle}
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
											<span key={index}>{content}</span>
										</>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
