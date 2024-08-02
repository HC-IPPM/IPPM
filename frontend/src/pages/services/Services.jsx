/* eslint-disable react/prop-types */
import {  GcdsGrid } from "@cdssnc/gcds-components-react"
import { BsCheck2Circle } from "react-icons/bs"

export default function Services() {
	const smallservices = [
		{
			title: "Synthetic data generation",
			description:
				"Synthetic data is created for model training without using sensitive or production data. It allows teams to test and develop solutions risk-free. IPPM offers various methods to generate synthetic data tailored to your business needs.",
		},
		{
			title: "Observability",
			description: "Assistance implementing application observability with Open Telemetry.",
		},
		{
			title: "Version Control",
			description: "Coaching on using git/GitHub to version code (targeting R and Python users).",
		},
		{
			title: "Python/R for data analysis, investigation and cleaning",
			description: "The IPPM is available for coaching teams or individuals on using R and Python for data cleaning, data analysis and data outputs.",
		},
		{
			title: "Data analysis",
			description: "We offer access to a suite of data science tools that can be used in an isolated environment.",
		},
		{
			title: "SDMX",
			description:
				"Statistical Data and Metadata Exchange (SDMX) standardizes the exchange of statistical data and metadata between organizations. Although complex, it enables automated data exchange. Our team enhances this by linking surveys to geographic boundaries for better visualization and analysis.",
		},
		{
			title: "Self-Serve DNS",
			description: "Members of the PHACDataHub GitHub Organization can submit pull-requests for new end points. Exploration of this service for HC is underway.",
		},
		{
			title: "Secure Data Intake",
			description: "Also known as the Safe Inputs project, this service offers a way to safely accept data without operating on dangerous file formats.",
		},
		{
			title: "Data pipelines",
			description: "We can help build low-cost data processing solutions. Both timer driven jobs and complex multi-step pipelines are possible.",
		},
	]

	const SmallCard = ({ smallservices }) => {
		const cardStyle = {
			boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
			transition: "0.3s",
			width: "100%",
			margin: "20px 0",
		}

		const cardHoverStyle = {
			boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
		}

		const containerStyle = {
			padding: "2px 16px",
			height: "325px",
		}

		const iconStyle = {
			display: "inline-block",
			width: "50px",
		}

		const textContainerStyle = {
			display: "inline-block",
			verticalAlign: "top",
			marginLeft: "10px",
		}

		const handleMouseEnter = e => {
			Object.assign(e.currentTarget.style, cardHoverStyle)
		}

		const handleMouseLeave = e => {
			Object.assign(e.currentTarget.style, cardStyle)
		}

		return (
			<div className="card" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<div className="container" style={containerStyle}>
					<div style={{ display: "flex" }} key={smallservices.index}>
						{/* <p style={iconStyle}>{service.type}</p> */}
						<p style={iconStyle}>
							<BsCheck2Circle />
						</p>

						<div style={textContainerStyle}>
							<h3>{smallservices.title}</h3>
							<p>{smallservices.description}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

	const MediumCard = ({ title, children }) => {
		const cardStyle = {
			boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
			transition: "0.3s",
			width: "100%",
			margin: "20px 0",
		}

		const cardHoverStyle = {
			boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
		}

		const containerStyle = {
			padding: "2px 16px",
			height: "800px",
		}

		const iconStyle = {
			display: "inline-block",
			width: "50px",
		}

		const textContainerStyle = {
			display: "inline-block",
			verticalAlign: "top",
			marginLeft: "10px",
		}

		const handleMouseEnter = e => {
			Object.assign(e.currentTarget.style, cardHoverStyle)
		}

		const handleMouseLeave = e => {
			Object.assign(e.currentTarget.style, cardStyle)
		}

		return (
			<div className="card" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<div className="container" style={containerStyle}>
					<div style={{ display: "flex" }}>
						<p style={iconStyle}>
							<BsCheck2Circle />
						</p>
						<div style={textContainerStyle}>
							<h3>{title}</h3>
							<p>{children}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

  const LargeCard = ({ title, children }) => {
		const cardStyle = {
			boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
			transition: "0.3s",
			width: "100%",
			margin: "20px 0",
		}

		const cardHoverStyle = {
			boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
		}

		const containerStyle = {
			padding: "2px 16px",
			height: "auto",
		}

		const iconStyle = {
			display: "inline-block",
			width: "50px",
		}

		const textContainerStyle = {
			display: "inline-block",
			verticalAlign: "top",
			marginLeft: "10px",
		}

		const handleMouseEnter = e => {
			Object.assign(e.currentTarget.style, cardHoverStyle)
		}

		const handleMouseLeave = e => {
			Object.assign(e.currentTarget.style, cardStyle)
		}

		return (
			<div className="card" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<div className="container" style={containerStyle}>
					<div style={{ display: "flex" }}>
						<p style={iconStyle}>
							<BsCheck2Circle />
						</p>
						<div style={textContainerStyle}>
							<h3>{title}</h3>
							<p>{children}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

	const ServiceComparisonTable = () => {
		const tableStyle = {
			width: "100%",
			borderCollapse: "collapse",
			margin: "20px 0",
		}

		const thTdStyle = {
			border: "1px solid #ddd",
			padding: "8px",
			textAlign: "left",
		}

		const thStyle = {
			...thTdStyle,
			backgroundColor: "#f4f4f4",
		}

		const trStyleEven = {
			backgroundColor: "#f9f9f9",
		}

		const captionStyle = {
			fontSize: "1.5em",
			margin: "10px 0",
		}

		return (
			<div>
				<table style={tableStyle}>
					<caption style={captionStyle}>Service Comparison Table</caption>
					<thead>
						<tr>
							<th style={thStyle}>Aspect</th>
							<th style={thStyle}>Base (Self) Service</th>
							<th style={thStyle}>Collaborative Service</th>
							<th style={thStyle}>Full Service</th>
						</tr>
					</thead>
					<tbody>
						<tr style={trStyleEven}>
							<td style={thTdStyle}>What is it?</td>
							<td style={thTdStyle}>
								We allow you to develop without worrying about underlying cloud infrastructure. We provide access to a platform (as a service) and the required software services.
							</td>
							<td style={thTdStyle}>A partnership to build a self-sustainable and supportable system.</td>
							<td style={thTdStyle}>
								This is a full-service, end-to-end application development option. We collaborate closely with your team to understand your unique business needs. From initial
								design and development to testing, deployment, and ongoing maintenance, we ensure a seamless integration with your existing systems.
							</td>
						</tr>
						<tr>
							<td style={thTdStyle}>Use Cases</td>
							<td style={thTdStyle}>Experimentation.</td>
							<td style={thTdStyle}>You have some in-house expertise to leverage or systems that require complex business knowledge to maintain.</td>
							<td style={thTdStyle}>
								You have a problem that needs an IT solution, complex needs, or just want to focus on the business. Or you want a system that can collaborate externally.
							</td>
						</tr>
						<tr style={trStyleEven}>
							<td style={thTdStyle}>What do we do?</td>
							<td style={thTdStyle}>We provision and manage infrastructure and provide Platform as a Service (PaaS), Software as a Service (SaaS), and basic guidance.</td>
							<td style={thTdStyle}>
								We collaborate with your team; technical resources and SMEs to design and develop a solution that is sustainable and meets your specific needs. It includes the
								development of solutions, services, data, but also skills building, which can include coaching, more advanced technical documentation, and variable levels of
								support and involvement.
							</td>
							<td style={thTdStyle}>
								We work closely with your team to understand and capture your requirements through frequent joint planning sessions. We are transparent throughout the entire
								process. We take a phased approach, mock-up and prototype solutions to ensure they align with your needs, and develop an MVP (Minimum Viable Product) which
								continues to be elaborated until a final product is achieved. The solution will be supported and maintained throughout its lifecycle.
							</td>
						</tr>
						<tr>
							<td style={thTdStyle}>What do you do?</td>
							<td style={thTdStyle}>
								Your team assumes full responsibility for the application and tech stack, as well as other requirements such as Accessibility and Security Assessment &
								Authorization (SA&A).
							</td>
							<td style={thTdStyle}>We provision a project space and the base infrastructure to support the application for running.</td>
							<td style={thTdStyle}>
								We take full responsibility for the entire application lifecycle, including design, development, testing, deployment, and ongoing maintenance.
							</td>
						</tr>
						<tr style={trStyleEven}>
							<td style={thTdStyle}>Technical Details</td>
							<td style={thTdStyle}>
								PaaS: a compute environment for developing and deploying applications – includes servers and storage. It is like having a fully equipped workshop in the cloud.
								<br />
								SaaS: We deliver software applications over the internet, easy to use, easy to manage with very little effort on your part as there is no installation or
								maintenance required.
							</td>
							<td style={thTdStyle}>
								The base infrastructure will be a Kubernetes cluster, with the ability to deploy containers into the cluster to a specific namespace. We would work together on
								application development and build pipelines to have containers deployed.
							</td>
							<td style={thTdStyle}>
								We provide a secure, scalable, and high-performance cloud solution. The solution is designed to seamlessly integrate with your existing systems, with ongoing
								support and maintenance.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}

	return (
		<>
			<h1>Services</h1>
			<div>
				<h2>Service Catalogue</h2>
				<p>Service Catalogue paragraph?</p>
			</div>
			<LargeCard title="Application Development">
				<div>
					<p>Secure, Scalable, and High-Performance solutions tailored to your needs.</p>
					<p>We provide a 3-tier model for application development. We can rapidly deploy infrastructure and build solutions to meet urgent or complex business needs.</p>
					<h4>
						Our application deployment services are designed to ensure your software transitions smoothly from development to production, maximizing performance, security, and
						reliability. We manage the entire deployment process, offering expertise and support to make your application&apos;s launch as efficient and stress-free as possible.
					</h4>
					<p>End-to-End Deployment Solutions. Our comprehensive deployment services include: </p>
					<li>
						Planning and Strategy: We collaborate with you to develop a tailored deployment plan, addressing your unique requirements and ensuring all aspects of the launch are
						meticulously prepared.
					</li>
					<li> Environment Setup: Our team sets up and configures the necessary cloud environments, ensuring optimal performance and scalability.</li>
					<li>
						Automated Deployment: Leveraging the latest automation tools and practices, we streamline the deployment process, reducing manual errors and accelerating
						time-to-market.
					</li>
					<li>
						Testing and Validation: Rigorous testing and validation processes confirm that your application functions flawlessly in its new environment, maintaining security and
						compliance standards.
					</li>
					<li> Expertise and Best Practices</li>
					<li>
						Our team of experienced professionals brings a wealth of knowledge and best practices to every deployment project. We stay updated with the latest industry trends and
						technologies, ensuring your application benefits from cutting-edge solutions and methodologies. Security and Compliance
					</li>
					<li>
						Security is a top priority in our deployment process. We implement robust security measures to protect your application and data, ensuring compliance with industry
						standards and regulations. From secure data transfers to comprehensive access controls, we safeguard your application&apos;s integrity.{" "}
					</li>
					<ServiceComparisonTable />
				</div>
			</LargeCard>

			<h3> Medium Services</h3>
			<GcdsGrid container="xl" columns="repeat(auto-fit, minmax(100px, 400px))" alignContent="center" justifyContent="center" alignItems="center">
				<MediumCard title="AI">
					Our GCP environment provides access to advanced AI tools. This secure, dedicated environment offers the following benefits:
					<ul>
						<li>Enhanced Data Security: Your data stays protected within our private cloud, ensuring compliance with strict security protocols.</li>
						<li>Customized AI Solutions: Tailored AI tools designed to meet the unique needs of your projects, from data analysis to predictive modeling.</li>
						<li>
							Scalable Resources: Access to scalable computing resources that can grow with your requirements, enabling efficient handling of large datasets and complex
							computations.
						</li>
						<li>Expert Support: We can assist you in leveraging AI tools effectively, ensuring optimal performance and outcomes.</li>
					</ul>
				</MediumCard>{" "}
				<MediumCard title="Geomatics - Geocoding   ">
					<p>Transform Your Address Data with Our Secure Geocoding Services. </p>
					<p>
						This service offers a secure environment for utilizing vetted address data to process sensitive information (Such as those trapped in Excel sheets). Convert addresses
						into precise map points or reverse-geocode coordinates back into street addresses or specific buildings. Whether you have 1,000 or 100,000 rows of data, our system
						handles it effortlessly.
					</p>
					<p>This service is very cost-Effective compared to other cloud options </p>
				</MediumCard>
				<MediumCard title="Geomatics - Geospatial  ">
					<p> Comprehensive Geospatial tools and analysis. </p>
					<p>
						Anything with a spatial/temporal component, our team has combined operational experience of over 80+ years to handle a wide range of geospatial analysis and related
						activities. Need a simple way of presenting a map for a project? Need something a little more complex like fusing your work with Census data? We can help with the
						basics, the more complex, and everything in between.
					</p>
					<p>
						<strong> Basic Mapping:</strong> Create clear, visually appealing maps to support your projects and presentations.{" "}
					</p>
					<p>
						<strong> Complex Data Integration: </strong>Fuse your data with external sources such as Census data for in-depth analysis and insights.{" "}
					</p>
					<p>
						<strong> Spatial Analysis: </strong> Perform detailed spatial analyses to uncover patterns, relationships, and trends in your data.{" "}
					</p>
				</MediumCard>
				<MediumCard title="Geomatics - Routing    ">
					<p>For determining the best path or route between two or more geographical locations on a map. </p>
					<p>
						Our Routing Services go beyond geocoding, offering powerful tools to streamline your logistical needs. Using custom vetted data sources in both Esri and FOSS
						environments, we process your input data securely, providing precise and efficient routing solutions.
					</p>
					<p> Comprehensive Routing Capabilities </p>
					Our service can answer critical questions for your operations. Some examples include:
					<ul>
						<li> Distance Calculation: Determine the distance in kilometers or miles from Point A to Point B.</li>{" "}
						<li> Shortest Route: Find the quickest route in minutes from Point A to Point B, whether by car, bus, walking, or a combination of these modes.</li>{" "}
						<li> Isochrones: Identify reachable areas within 3, 5, or 9 minutes from a specific location.</li>{" "}
						<li>
							Vehicle Routing Problems (VRP): Optimize the distribution of Personal Protective Equipment (PPE) from a storage site to various locations in a city or area, ensuring
							the most time- and cost-effective sequence of stops.{" "}
						</li>
					</ul>
				</MediumCard>
			</GcdsGrid>
			<h3> Smaller Services</h3>
			<GcdsGrid container="xl" columns="repeat(auto-fit, minmax(100px, 300px))" alignContent="center" justifyContent="center" alignItems="center">
				{smallservices.map((smallservices, index) => (
					<>
						<div key={index}>
							<SmallCard smallservices={smallservices} />
						</div>
					</>
				))}
			</GcdsGrid>
		</>
	)
}
