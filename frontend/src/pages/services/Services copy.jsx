import styles from "./PricingTable.module.css"

const services = [
	{
		type: "Base (self)",
		description: {
			whatIsIt:
				"We allow you to develop without worrying about underlying cloud infrastructure. We provide access to a platform (as a service) and the required software services.",
			useCases: ["Experimentation"],
			whatDoWeDo: "We provision and manage infrastructure and provide Platform as a Service (PaaS), Software as a Service (SaaS), and basic guidance.",
			whatDoYouDo:
				"Your team assumes full responsibility for application and tech stack, as well as other requirements such as Accessibility and Security Assessment & Authorization (SA&A).",
			technicalDetails: {
				PaaS: "A compute environment for developing and deploying applications - includes servers and storage. It is like having a fully equipped workshop in the cloud.",
				SaaS: "We deliver software applications over the internet, easy to use, easy to manage with very little effort on your part as there is no installation or maintenance required.",
			},
		},
	},
	{
		type: "Collaborative Service",
		description: {
			whatIsIt: "A partnership to build a self-sustainable and supportable system.",
			useCases: ["You have some in-house expertise to leverage, or systems that require complex business knowledge to maintain."],
			whatDoWeDoTogether:
				"We collaborate with your team; technical resources and SMEs to design and develop a solution that is sustainable and meets your specific needs. It includes the development of solutions, services, data but also skills building which can include coaching, more advanced technical documentation, and variable levels of support and involvement.",
			howDoesItWork: "We provision a project space, and the base infrastructure to support the application for running.",
			technicalDetails: {
				PaaS: "The base infrastructure will be a Kubernetes cluster, with the ability to deploy containers into the cluster to a specific namespace. We would work together for application development and build pipelines to have containers deployed.",
			},
		},
	},
	{
		type: "Full Service",
		description: {
			whatIsIt:
				"This is a full-service, end-to-end application development option. We collaborate closely with your team to understand your unique business needs. From initial design and development to testing, deployment, and ongoing maintenance, we ensure a seamless integration with your existing systems. Our goal is to provide a secure, scalable, and high-performance cloud solution.",
			useCases: ["You have a problem that needs an IT solution, complex needs, or just want to focus on the business. Or you want a system that can collaborate externally."],
			whatDoWeDoTogether:
				"We work closely with your team to understand and capture your requirements through frequent joint planning sessions. We are transparent throughout the entire process. ",
			technicalDetails: {
				PaaS: "We take a phased approach and, as required, we will mock-up and prototype solutions to ensure they align with your needs and develop an MVP (Minimum Viable Product) and continue elaborating until a final product is achieved. The solution will be supported and maintained as a product throughout its lifecycle.",
			},
		},
	},
]

const PricingTable = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Application Development:</h2>
			<p>Secure, Scalable, and High-Performance solutions tailored to your needs.</p>
			<p>We provide a 3-tier model for application development. We can rapidly deploy infrastructure and build solutions to meet urgent or complex business needs.</p>

			<table className={styles.table}>
				<thead>
					<tr>
						{services.map(service => (
							<th key={service.type}>{service.type}</th>
						))}
					</tr>
				</thead>
				<tbody>
					<tr>
						{services.map(service => (
							<td key={service.type}>
								<div className={styles.description}>
									<h2>What is it?</h2>
									{service.description.whatIsIt}
								</div>
								<div className={styles.useCases}>
									<h2>Use Cases:</h2>
									<ul>
										{service.description.useCases.map((useCase, index) => (
											<li key={index}>{useCase}</li>
										))}
									</ul>
								</div>
								<div className={styles.whatWeDo}>
									<h2>What do we do (together)?</h2>
									{service.description.whatDoWeDoTogether || service.description.whatDoWeDo}
								</div>
								<div className={styles.howItWorks}>
									<h2>How does it work?</h2>
									{service.description.howDoesItWork}
								</div>
								<div className={styles.technicalDetails}>
									<h2>Technical Details:</h2>
									{service.description.technicalDetails &&
										Object.entries(service.description.technicalDetails).map(([key, value]) => (
											<p key={key}>
												<strong>{key}:</strong> {value}
											</p>
										))}
								</div>
							</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	)
}

const ApplicationDeployment = () => {
	const containerStyle = {
		width: "100%",
		maxWidth: "800px",
		margin: "0 auto",
		padding: "20px",
	}

	const headerStyle = {
		fontSize: "28px",
		marginBottom: "16px",
	}

	const introStyle = {
		marginBottom: "24px",
		lineHeight: "1.6",
	}

	const subHeaderStyle = {
		fontSize: "22px",
		marginTop: "24px",
		marginBottom: "12px",
	}

	const descriptionStyle = {
		marginBottom: "16px",
		lineHeight: "1.6",
	}

	const listStyle = {
		marginBottom: "24px",
		paddingLeft: "20px",
		listStyleType: "disc",
	}
	return (
		<div style={containerStyle}>
			<h1 style={headerStyle}>Application Deployment</h1>
			<p style={introStyle}>
				Our application deployment services are designed to ensure your software transitions smoothly from development to production, maximizing performance, security, and
				reliability. We manage the entire deployment process, offering expertise and support to make your application&apos;s launch as efficient and stress-free as possible.
			</p>
			<h2 style={subHeaderStyle}>End-to-End Deployment Solutions</h2>
			<p style={descriptionStyle}>Our comprehensive deployment services include:</p>
			<ul style={listStyle}>
				<li>
					<strong>Planning and Strategy:</strong> We collaborate with you to develop a tailored deployment plan, addressing your unique requirements and ensuring all aspects of the
					launch are meticulously prepared.
				</li>
				<li>
					<strong>Environment Setup:</strong> Our team sets up and configures the necessary cloud environments, ensuring optimal performance and scalability.
				</li>
				<li>
					<strong>Automated Deployment:</strong> Leveraging the latest automation tools and practices, we streamline the deployment process, reducing manual errors and accelerating
					time-to-market.
				</li>
				<li>
					<strong>Testing and Validation:</strong> Rigorous testing and validation processes confirm that your application functions flawlessly in its new environment, maintaining
					security and compliance standards.
				</li>
			</ul>
			<h2 style={subHeaderStyle}>Expertise and Best Practices</h2>
			<p style={descriptionStyle}>
				Our team of experienced professionals brings a wealth of knowledge and best practices to every deployment project. We stay updated with the latest industry trends and
				technologies, ensuring your application benefits from cutting-edge solutions and methodologies.
			</p>
			<h2 style={subHeaderStyle}>Security and Compliance</h2>
			<p style={descriptionStyle}>
				Security is a top priority in our deployment process. We implement robust security measures to protect your application and data, ensuring compliance with industry
				standards and regulations. From secure data transfers to comprehensive access controls, we safeguard your application&apos;s integrity.
			</p>
		</div>
	)
}

const Geomatics = () => {
	const containerStyle = {
		width: "100%",
		maxWidth: "900px",
		margin: "0 auto",
		padding: "20px",
	}

	const headerStyle = {
		fontSize: "28px",
		marginBottom: "16px",
	}

	const sectionStyle = {
		marginBottom: "24px",
	}

	const subHeaderStyle = {
		fontSize: "22px",
		marginTop: "24px",
		marginBottom: "12px",
	}

	const descriptionStyle = {
		marginBottom: "16px",
		lineHeight: "1.6",
	}

	const listStyle = {
		marginBottom: "24px",
		paddingLeft: "20px",
		listStyleType: "disc",
	}

	return (
		<div style={containerStyle}>
			<h1 style={headerStyle}>Geomatics</h1>

			<div style={sectionStyle}>
				<h2 style={subHeaderStyle}>Geospatial</h2>
				<p style={descriptionStyle}>
					Comprehensive Geospatial tools and analysis. Anything with a spatial/temporal component, our team has combined operational experience of over 80+ years to handle a wide
					range of geospatial analysis and related activities. Need a simple way of presenting a map for a project? Need something a little more complex like fusing your work with
					Census data? We can help with the basics, the more complex, and everything in between.
				</p>
				<h3 style={subHeaderStyle}>Basic Mapping:</h3>
				<p style={descriptionStyle}>Create clear, visually appealing maps to support your projects and presentations.</p>
				<h3 style={subHeaderStyle}>Complex Data Integration:</h3>
				<p style={descriptionStyle}>Fuse your data with external sources such as Census data for in-depth analysis and insights.</p>
				<h3 style={subHeaderStyle}>Spatial Analysis:</h3>
				<p style={descriptionStyle}>Perform detailed spatial analyses to uncover patterns, relationships, and trends in your data.</p>
				<h3 style={subHeaderStyle}>Temporal Analysis:</h3>
				<p style={descriptionStyle}>Analyze temporal components to understand changes over time and predict future trends.</p>
				<h3 style={subHeaderStyle}>Custom Solutions:</h3>
				<p style={descriptionStyle}>Develop bespoke geospatial solutions that cater to your specific requirements and objectives.</p>
			</div>

			<div style={sectionStyle}>
				<h2 style={subHeaderStyle}>Tailored to Your Needs</h2>
				<p style={descriptionStyle}>
					Whether you need a simple map for a presentation or a complex geospatial analysis, we provide solutions that fit your needs. Our services are designed to be flexible and
					scalable, ensuring we can support projects of any size and complexity.
				</p>
				<h3 style={subHeaderStyle}>Map Design and Production:</h3>
				<p style={descriptionStyle}>Craft visually compelling maps that effectively communicate your data.</p>
				<h3 style={subHeaderStyle}>Geospatial Data Management:</h3>
				<p style={descriptionStyle}>Organize, maintain, and optimize your geospatial data for efficient use and analysis.</p>
				<h3 style={subHeaderStyle}>Advanced Geospatial Modeling:</h3>
				<p style={descriptionStyle}>Apply complex geospatial models to solve intricate problems and derive meaningful insights.</p>
				<h3 style={subHeaderStyle}>Training and Support:</h3>
				<p style={descriptionStyle}>Provide training and ongoing support to help you make the most of our geospatial tools and services.</p>
			</div>

			<div style={sectionStyle}>
				<h2 style={headerStyle}>Unlock the Power of Geospatial Data</h2>
				<p style={descriptionStyle}>
					Harness the full potential of your spatial and temporal data with our expert geospatial services. Contact us today to discover how we can support your project, from the
					basics to the most complex geospatial challenges.
				</p>
			</div>

			<div style={sectionStyle}>
				<h2 style={headerStyle}>Professional Services and Tools</h2>
				<h3 style={subHeaderStyle}>Geocoding</h3>
				<p style={descriptionStyle}>
					Transform Your Address Data with Our Secure Geocoding Services. This service offers a secure environment for utilizing vetted address data to process sensitive
					information (Such as those trapped in Excel sheets). Convert addresses into precise map points or reverse-geocode coordinates back into street addresses or specific
					buildings. Whether you have 1,000 or 100,000 rows of data, our system handles it effortlessly.
				</p>
				<p style={descriptionStyle}>This service is very cost-effective compared to other cloud options. Web service/application and Web API. Self-service or full support.</p>

				<h3 style={subHeaderStyle}>Routing</h3>
				<p style={descriptionStyle}>
					For determining the best path or route between two or more geographical locations on a map. Our Routing Services go beyond geocoding, offering powerful tools to
					streamline your logistical needs. Using custom vetted data sources in both Esri and FOSS environments, we process your input data securely, providing precise and
					efficient routing solutions.
				</p>

				<h4 style={subHeaderStyle}>Comprehensive Routing Capabilities</h4>
				<ul style={listStyle}>
					<li>
						<strong>Distance Calculation:</strong> Determine the distance in kilometers or miles from Point A to Point B.
					</li>
					<li>
						<strong>Shortest Route:</strong> Find the quickest route in minutes from Point A to Point B, whether by car, bus, walking, or a combination of these modes.
					</li>
					<li>
						<strong>Isochrones:</strong> Identify reachable areas within 3, 5, or 9 minutes from a specific location.
					</li>
					<li>
						<strong>Vehicle Routing Problems (VRP):</strong> Optimize the distribution of Personal Protective Equipment (PPE) from a storage site to various locations in a city or
						area, ensuring the most time- and cost-effective sequence of stops.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default function Services() {
	return (
		<>
			<h1>Services</h1>
			<PricingTable />

			<section>
				{" "}
				<ApplicationDeployment />
			</section>
			<section>
				{" "}
				<Geomatics />
			</section>
		</>
	)
}
