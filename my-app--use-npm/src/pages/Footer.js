import React from "react";
import img from './Images/image3.png';
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		WebApp <nbps/> <img src={img}/>   
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Products</FooterLink>
			</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Bangalore</FooterLink>
				</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;


// import SimpleReactFooter from 'simple-react-footer';
// import React, { Component } from 'react';
//  import './mainNavigation.css';

// class  SimpleFooter extends Component { 

// render() {
//     const description = " .";
//      const title = "WebApp";
//      const columns = [
//       {
         
//         title: "Resources",
//           resources: [
//               {
//                   name: "About",
//                   link: "/about"
//               },
//               {
//                   name: "Careers",
//                   link: "/careers"
//               },
//               {
//                   name: "Contact",
//                   link: "/contact"
//               },
//               {
//                   name: "Admin",
//                   link: "/admin"
//               }
//           ]
//       },
//       {
//           title: "Legal",
//           resources: [
//               {
//                   name: "Privacy",
//                   link: "/privacy"
//               },
//               {
//                   name: "Terms",
//                   link: "/terms"
//               }
//           ]
//       },

 

//       {
//           title: "Visit",
//           resources: [
//               {
//                   name: "Locations",
//                   link: "/locations"
//               },
//               {
//                   name: "Culture",
//                   link: "/culture"
//               }
//           ]
//       }
//    ];
//    return <SimpleReactFooter 
//       description={description} 
//        title={title}
//       columns={columns}
//       linkedin=""
//       facebook=""
//       twitter=""
//       instagram=""
//       youtube=""
//       pinterest=""
//       copyright="webapp"
//       iconColor="white"
//       backgroundColor="MidnightBlue"
//       fontColor="white"
//       copyrightColor="darkgrey"
//       spacing="line-spacing"
//    />;
//   };

// }

// export default SimpleFooter;