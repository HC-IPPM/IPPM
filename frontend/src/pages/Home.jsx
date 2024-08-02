// src/pages/Home.jsx
import { GcdsContainer } from "@cdssnc/gcds-components-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function HomePage() {
	const { t, i18n } = useTranslation()

	const ServiceCatOverview = () => {
		const [catalogue, setCatalogue] = useState([])

		useEffect(() => {
			fetch("/catalogue.json")
				.then(response => response.json())
				.then(data => setCatalogue(data))
				.catch(error => console.error("Error fetching the JSON:", error))
		}, [])

		const contentStyle = {
			display: "flex",
			alignItems: "center",
			marginBottom: "20px",
			padding: "20px",
			borderRadius: "5px",
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
			backgroundColor: "#ddd",
		}

		const imageStyle = {
			maxWidth: "200px",
			maxHeight: "200px",
			objectFit: "cover",
		}

		const textStyle = {
			flex: 1,
		}

		return (
			<div>
				{catalogue.map(catalogue => {
					const isEven = catalogue.id % 2 === 0

					return (
						<div key={catalogue.id} style={contentStyle}>
							{!isEven && catalogue.image && <img src={catalogue.image} alt={catalogue.title} style={imageStyle} />}
							<div
								style={{
									...textStyle,
									paddingLeft: isEven ? "0px" : "20px",
									paddingRight: isEven ? "20px" : "0",
									justifyContent: isEven ? "space-between" : "flex-start",
									textAlign: isEven ? "right" : "left",
								}}
							>
								{catalogue[i18n.language] && catalogue[i18n.language].title && <h2>{catalogue[i18n.language].title}</h2>}
								{catalogue.en.subtitle && <h3>{catalogue.en.subtitle}</h3>}
								{catalogue.en.paragraph && <p>{catalogue.en.paragraph}</p>}
							</div>
							{isEven && catalogue.image && <img src={catalogue.image} alt={catalogue.title} style={imageStyle} />}
						</div>
					)
				})}
			</div>
		)
	}

	return (
		<>
			{/* Start of map and welcome section */}
			<div
				style={{
					position: "relative",
					overflow: "hidden",
					padding: "10vh 10vw",
					display: "flex",
					minHeight: "30vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{/* Background map image with blur effect */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `url('image.png')`,
						backgroundAttachment: "fixed",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						filter: "blur(4px)", // Apply blur effect to background image
						zIndex: -1, // Ensure the background is behind other content
					}}
					aria-hidden="true" // Hide this element from assistive technologies
				></div>
				{/* Welcome message container */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "rgba(38, 55, 74, 0.9)", // Semi-transparent background for text
						boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)", // White box shadow for text container
						borderRadius: "5px",
						color: "white",
						padding: "60px 15vw",
						textAlign: "center",
						position: "relative", // Ensure this is above the blurred background
						zIndex: 1,
					}}
				>
					<h1>{t("homePage.title")}</h1>
				</div>
			</div>

			<GcdsContainer
				size="xl"
				centered
				color="black"
				style={{ flexGrow: "1" }}
				padding="200"
				id="main-content"
				role="main" // Landmark role for main content
				aria-labelledby="main-title" // Associate container with a heading
			>
				{/* End of map and welcome section */}
				<h2>Empower Your Business with Custom Cloud Applications</h2>
				<p>
					Our accomplished cloud development team excels in crafting bespoke applications meticulously designed to align with your unique business requirements. Beginning with a
					comprehensive initial design consultation and continuing through to the final deployment, our approach is holistic and detail-oriented. We oversee every facet of the
					development process to ensure that your application is not only fortified with robust security measures but also engineered for scalability and tuned for optimal
					performance in the cloud environment.
				</p>
				<section aria-labelledby="section1-title">
					{/* Heading and description for the main content */}
					{/* <h2 id="section1-title" style={{ textAlign: "justify", fontWeight: "normal", paddingTop: "15px", paddingBottom: "15px" }}>
						{t("pages.landingPage.underHeader")}
					</h2>
					<LandingPageCardFLipSection />
					<h3 style={{ textAlign: "justify", fontWeight: "normal", paddingTop: "15px", paddingBottom: "15px" }}>
						{t("pages.landingPage.cardFlipCaption")}
					</h3> */}
				</section>
				<section>
					<ServiceCatOverview />
				</section>

				<section>
					<h2> Mandate, Mission, and Vision </h2>
					<p>
						Our mandate is to innovate and enhance Canadian public health and healthcare operations built on the foundation of a secure, transparent, and advanced cloud platform.
						We support current projects and facilitate future workloads through proven technologies and design, and strategic collaborations. We host and develop solutions that
						prioritize a collaborative and transparent approach. Our team aligns closely with yours, ensuring the final product meets your needs throughout the entire lifespan of
						the project, program or solution. Contact us today to discover how our cloud development team can transform your vision into reality, delivering powerful, secure, and
						scalable solutions tailored to your needs.
					</p>
				</section>
			</GcdsContainer>
		</>
	)
}
